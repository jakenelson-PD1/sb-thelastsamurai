#!/usr/bin/env node
/**
 * Token compliance lint — blocks raw styling values that bypass our design tokens.
 *
 * Scans .tsx/.ts/.css for the violations catalogued in
 * .claude/skills/token-compliance-gate/SKILL.md. Exits non-zero on any hit so
 * pre-commit / CI can block.
 *
 * Skip a single line with a trailing `// token-lint-skip: <reason>` comment.
 *
 * Usage:
 *   node scripts/check-tokens.mjs              # scan all source files
 *   node scripts/check-tokens.mjs file [file]  # scan specific files (pre-commit)
 */
import { readFileSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

// ── Banned patterns ─────────────────────────────────────────────────────────
// Each pattern is { name, regex, message, scope: 'class' | 'any' }.
// 'class' patterns only fire inside className="..." (or `className={...}`).
// 'any' patterns fire anywhere in the file.
const PATTERNS = [
  {
    name: 'raw-white-overlay',
    regex: /\b(?:hover:|focus:|active:|group-hover:)?bg-white\/\d+\b/g,
    message: 'bg-white/N is a raw overlay. Use bg-nav-hover-bg, bg-hover-overlay, or another semantic overlay token.',
    scope: 'class',
  },
  {
    name: 'raw-black-overlay',
    regex: /\b(?:hover:|focus:|active:|group-hover:)?bg-black\/\d+\b/g,
    message: 'bg-black/N is a raw overlay. Use bg-scrim or another semantic overlay token.',
    scope: 'class',
  },
  {
    name: 'raw-white-text',
    regex: /\btext-white\b/g,
    message: 'text-white bypasses dark mode. Use text-fg-on-accent or text-nav-text.',
    scope: 'class',
  },
  {
    name: 'raw-black-text',
    regex: /\btext-black\b/g,
    message: 'text-black bypasses dark mode. Use text-fg-primary or text-fg-heading.',
    scope: 'class',
  },
  {
    name: 'arbitrary-color',
    regex: /\b(?:bg|text|border|divide|ring|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]/g,
    message: 'Arbitrary hex color in className. Bind to a semantic token in tokens/semantic.ts.',
    scope: 'class',
  },
  {
    name: 'arbitrary-rgba',
    regex: /\b(?:bg|text|border|divide|ring|fill|stroke)-\[(?:rgba?|hsla?)\([^)]+\)\]/g,
    message: 'Arbitrary rgba/hsl color in className. Bind to a semantic token instead.',
    scope: 'class',
  },
  {
    name: 'tailwind-default-text-size',
    regex: /\b(?:hover:|focus:|sm:|md:|lg:|xl:|2xl:)?text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b/g,
    message: 'Tailwind default text size. Use the Type Scale: text-body-md|sm, text-heading-lg|md|sm, text-label-md|sm, text-caption.',
    scope: 'class',
  },
  {
    name: 'arbitrary-text-size',
    regex: /\btext-\[[^\]]*px\]/g,
    message: 'Arbitrary text size like text-[14px]. Use the Type Scale class that matches.',
    scope: 'class',
  },
  {
    name: 'tailwind-default-radius',
    regex: /\b(?:hover:|focus:)?rounded-(?:sm|md|lg|xl|2xl|3xl)\b/g,
    message: 'Tailwind default radius. Use rounded-control | rounded-card | rounded-modal | rounded-pill | rounded-full.',
    scope: 'class',
  },
  {
    name: 'arbitrary-radius',
    regex: /\brounded-\[[^\]]*px\]/g,
    message: 'Arbitrary radius. Use the named radius scale.',
    scope: 'class',
  },
  {
    name: 'off-scale-dimension',
    // Spacing scale (tokens/spacing.ts): 0..12, 14, 15, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96.
    // Flag dimension classes using numbers NOT in that set.
    regex: /\b(?:h|w|min-h|min-w|max-h|max-w)-(?:13|17|18|19|21|22|23|25|26|27|29|30|31|33|34|35|37|38|39|41|42|43|45|46|47|49|50|51|53|54|55|57|58|59|61|62|63|65|66|67|68|69|70|71|73|74|75|76|77|78|79|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95)\b/g,
    message: 'Dimension class uses a value not in our spacing scale (0/1-12/14/15/16/20/24/28/32/36/40/44/48/52/56/60/64/72/80/96). Either snap to a scale value or add the new value to tokens/spacing.ts.',
    scope: 'class',
  },
  {
    name: 'arbitrary-dimension',
    regex: /\b(?:h|w|min-h|min-w|max-h|max-w)-\[[^\]]*px\]/g,
    message: 'Arbitrary dimension class like h-[44px]. Snap to the spacing scale.',
    scope: 'class',
  },
  {
    name: 'inline-style-padding',
    regex: /style=\{\{[^}]*\bpadding[A-Za-z]*\s*:\s*['"`]?\d/g,
    message: 'Inline padding style. Use a Tailwind p-* / px-* / py-* class so spacing tokens apply.',
    scope: 'any',
  },
  {
    name: 'inline-style-margin',
    regex: /style=\{\{[^}]*\bmargin[A-Za-z]*\s*:\s*['"`]?\d/g,
    message: 'Inline margin style. Use a Tailwind m-* / mx-* / my-* class.',
    scope: 'any',
  },
  {
    name: 'inline-style-color',
    regex: /style=\{\{[^}]*\b(?:color|background(?:Color)?|borderColor)\s*:\s*['"`]#[0-9a-fA-F]/g,
    message: 'Inline color style with raw hex. Use a Tailwind class bound to a semantic token, or var(--color-*) for runtime values.',
    scope: 'any',
  },
];

// ── File discovery ───────────────────────────────────────────────────────────
const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const args = process.argv.slice(2);

function listAllSourceFiles() {
  try {
    const out = execSync(
      `git -C "${ROOT}" ls-files 'components/**/*.tsx' 'components/**/*.ts' 'stories/**/*.tsx' 'tokens/**/*.ts'`,
      { encoding: 'utf8' },
    );
    return out.split('\n').map(f => path.join(ROOT, f)).filter(f => {
      try { return statSync(f).isFile(); } catch { return false; }
    });
  } catch {
    return [];
  }
}

const files = args.length
  ? args.map(f => path.isAbsolute(f) ? f : path.resolve(process.cwd(), f))
  : listAllSourceFiles();

if (!files.length) {
  console.error('check-tokens: no files to scan');
  process.exit(0);
}

// ── Scan ─────────────────────────────────────────────────────────────────────
const CLASSNAME_RE = /className\s*=\s*(?:"([^"]*)"|'([^']*)'|`([^`]*)`|\{[^}]*\})/g;
const SKIP_RE = /\/\/\s*token-lint-skip(?::|$)/;

let totalHits = 0;

for (const file of files) {
  if (!/\.(tsx?|css)$/.test(file)) continue;
  let src;
  try {
    src = readFileSync(file, 'utf8');
  } catch {
    continue;
  }

  const lines = src.split('\n');
  const hits = [];

  for (const pat of PATTERNS) {
    if (pat.scope === 'class') {
      // Scan only inside className="..." string forms (skip {…} expressions; we can't statically resolve those).
      let m;
      while ((m = CLASSNAME_RE.exec(src)) !== null) {
        const literal = m[1] ?? m[2] ?? m[3];
        if (literal === undefined) continue;
        const lineStart = src.slice(0, m.index).split('\n').length;
        // Skip if same line carries the skip marker
        if (SKIP_RE.test(lines[lineStart - 1] ?? '')) continue;
        let cm;
        const localRe = new RegExp(pat.regex.source, pat.regex.flags);
        while ((cm = localRe.exec(literal)) !== null) {
          hits.push({ line: lineStart, name: pat.name, message: pat.message, match: cm[0].trim() });
        }
      }
    } else {
      let m;
      const localRe = new RegExp(pat.regex.source, pat.regex.flags);
      while ((m = localRe.exec(src)) !== null) {
        const lineNum = src.slice(0, m.index).split('\n').length;
        if (SKIP_RE.test(lines[lineNum - 1] ?? '')) continue;
        hits.push({ line: lineNum, name: pat.name, message: pat.message, match: m[0].slice(0, 80) });
      }
    }
  }

  if (hits.length) {
    totalHits += hits.length;
    const rel = path.relative(ROOT, file);
    console.error(`\n✗ ${rel}`);
    for (const h of hits) {
      console.error(`  ${rel}:${h.line}  [${h.name}]  ${h.match}`);
      console.error(`    ${h.message}`);
    }
  }
}

if (totalHits) {
  console.error(`\n${totalHits} token violation${totalHits === 1 ? '' : 's'} — fix or add // token-lint-skip: <reason>`);
  process.exit(1);
}

console.log(`✓ token compliance — ${files.length} files clean`);
