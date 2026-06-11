#!/usr/bin/env node
/**
 * Generates DESIGN_SYSTEM.md — a comprehensive component catalog for
 * feeding to Claude.ai Projects as design-system knowledge.
 *
 * For each .stories.tsx file:
 *   - Extracts the meta `title:` (Section/Component)
 *   - Reads the matching component .tsx and pulls JSDoc + Props interface
 *   - Lists every exported Story with its full source (args or render)
 *   - Cross-references the live Storybook URL + Figma frame node-id
 *
 * Run: node scripts/gen-design-system.mjs  (or `npm run gen-catalog`)
 */
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const STORYBOOK_BASE = 'https://jake.nelson2.gitlab.io/sb-thelastsamurai';
const FIGMA_FILE_KEY = 'ZP0lSeT5Nwm1lpWI79qIaf';
const FIGMA_BASE = `https://www.figma.com/design/${FIGMA_FILE_KEY}/LSDS`;
const REPO_URL = 'https://gitlab.com/jake.nelson2/sb-thelastsamurai';

// Figma component-name → "page-id|component-id" pulled from Plugin API. The
// page-id navigates to the Figma page; component-id deep-links to the
// ComponentSet inside the page.
const FIGMA_MAP = {
  CommentCard:                'page:76:7|set:1257:278',
  EngagementHeader:           'page:76:9|set:399:52',
  FilterSwatchGroupRow:       'page:1599:80|set:1600:2',
  SubToolbar:                 'page:76:51|set:840:94',
  FileDropZone:               'page:76:10|set:408:34',
  RequestDetailActionBar:     'page:76:13|set:413:44',
  RequestRow:                 'page:76:16|set:1393:674',
  FileRow:                    'page:1547:2|set:1547:133',
  RequestDetailHeader:        'page:76:15|set:415:19',
  RequestDetailAssignments:   'page:76:14|set:420:52',
  ClientFilesSection:         'page:76:6|set:423:136',
  ActivitySection:            'page:76:4|set:2479:1314',
  'Request Detail':           'page:76:12',
  EngagementLayout:           'page:76:33|set:1569:2',
  AppShell:                   'page:76:29|set:815:48',
  Container:                  'page:76:30|set:778:20',
  DetailPanel:                'page:76:31|set:812:87',
  Foundation:                 'page:76:34',
  Grid:                       'page:76:35|set:776:138',
  Inset:                      'page:76:36|set:787:21',
  ListPanel:                  'page:76:37|set:809:124',
  MasterDetailLayout:         'page:76:38|set:818:218',
  Panel:                      'page:76:39|set:800:26',
  PanelGroup:                 'page:76:40|set:806:48',
  PanelHeader:                'page:76:41|set:796:44',
  ScrollArea:                 'page:76:43|set:789:16',
  Stack:                      'page:76:44|set:781:50',
  ThreeColumnLayout:          'page:76:45|set:823:210',
  Breadcrumb:                 'page:76:47|set:838:26',
  NavItem:                    'page:1020:2|set:1054:294',
  PageHeader:                 'page:76:48|set:844:133',
  Pagination:                 'page:76:49|set:839:30',
  SideNav:                    'page:76:50|set:1147:213',
  Tabs:                       'page:76:52|set:520:9',
  TopNav:                     'page:76:53|set:528:444',
  Drawer:                     'page:76:56|set:754:18',
  Modal:                      'page:76:58|set:752:29',
  Popover:                    'page:76:59|set:764:31',
  Tooltip:                    'page:76:60|set:746:6',
  Search:                     'page:76:70|set:541:84',
  CommentComposer:            'page:76:8|set:392:34',
  Card:                       'page:76:5|set:375:8',
  Alert:                      'page:76:18|set:218:34',
  Accordion:                  'page:76:3|set:388:59',
  ActionMenu:                 'page:76:55|set:579:419',
  Avatar:                     'page:76:62|set:484:14',
  Badge:                      'page:76:63|set:485:20',
  Button:                     'page:76:64|set:480:848',
  Checkbox:                   'page:76:23|set:490:30',
  CountBadge:                 'page:76:65|set:483:4',
  DatePicker:                 'page:76:24|set:3129:12',
  Divider:                    'page:76:32|set:783:4',
  Dropdown:                   'page:76:57|set:580:874',
  FilterSwatch:               'page:76:66|set:484:19',
  FilterSwatchGroup:          'page:1590:2|set:697:232',
  FilterChip:                 'page:1124:2|set:1142:410',
  Input:                      'page:76:68|set:537:41',
  List:                       'page:76:11|set:418:22',
  NotificationBadge:          'page:76:69|set:483:7',
  StatusTile:                 'page:1552:2|set:1552:7',
  StatusDot:                  'page:1521:2|set:1521:5',
  Radio:                      'page:76:25|set:491:12',
  ResizeHandle:               'page:76:42|set:802:10',
  Skeleton:                   'page:76:19',
  Switch:                     'page:76:27|set:492:18',
  Spinner:                    'page:76:20|set:222:11',
  Timestamp:                  'page:76:71|set:456:15',
  Toast:                      'page:76:21|set:222:22',
  Table:                      'page:1955:2|set:2032:1834',
  Colors:                     'page:77:2',
  Radii:                      'page:77:3',
  Semantics:                  'page:77:4',
  Shadows:                    'page:77:5',
  Spacing:                    'page:77:6',
  Typography:                 'page:77:7',
  Icons:                      'page:76:67',
};

const SECTION_ORDER = [
  'RLM Layout', 'Layout', 'Navigation', 'Overlay', 'Primitives', 'Foundation',
];

// ── parsing helpers ────────────────────────────────────────────────────────
function kebab(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function storyUrl(title, storyName) {
  return `${STORYBOOK_BASE}/?path=/story/${kebab(title)}--${kebab(storyName)}`;
}

function docsUrl(title) {
  return `${STORYBOOK_BASE}/?path=/docs/${kebab(title)}--docs`;
}

function figmaUrl(componentName) {
  const entry = FIGMA_MAP[componentName];
  if (!entry) return null;
  // Pick the most-specific node (set > page)
  const parts = entry.split('|');
  const set = parts.find((p) => p.startsWith('set:'));
  const page = parts.find((p) => p.startsWith('page:'));
  const node = (set || page).split(':').slice(1).join(':').replace(':', '-');
  return `${FIGMA_BASE}?node-id=${node}`;
}

function extractTitle(src) {
  // Restrict to the meta object literal so we don't pick up `title:` props inside story args.
  const metaStart = src.match(/const\s+meta\b(?:\s*:\s*[^=]+?)?\s*=\s*\{/);
  if (!metaStart) return null;
  const startIdx = metaStart.index + metaStart[0].length - 1;
  let depth = 0, i = startIdx;
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) { i++; break; } }
  }
  const metaBody = src.slice(startIdx, i);
  const m = metaBody.match(/\btitle:\s*['"]([^'"]+)['"]/);
  return m ? m[1] : null;
}

function extractStories(src) {
  // Match every `export const <Name>: Story = { ... };` block up to a balanced closing.
  const stories = [];
  const re = /export\s+const\s+([A-Z][A-Za-z0-9_]*)\s*:\s*Story\s*=\s*\{/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const name = m[1];
    let i = re.lastIndex - 1; // points at the opening `{`
    let depth = 0;
    let inStr = null;
    let escape = false;
    for (; i < src.length; i++) {
      const c = src[i];
      if (escape) { escape = false; continue; }
      if (c === '\\') { escape = true; continue; }
      if (inStr) {
        if (c === inStr) inStr = null;
        if (c === '`' && src[i+1] === '$' && src[i+2] === '{') inStr = null; // shaky but ok
        continue;
      }
      if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
    }
    const body = src.slice(re.lastIndex - 1, i);
    stories.push({ name, body });
  }
  return stories;
}

function extractProps(componentSrc) {
  // Best-effort: pull each interface/type ending in `Props`. Multiple matches allowed.
  const blocks = [];
  const reIface = /export\s+(?:interface|type)\s+(\w+Props)\b[^{=]*[={]/g;
  let m;
  while ((m = reIface.exec(componentSrc)) !== null) {
    const startTokIdx = m.index;
    // Find the start of declaration text
    let i = m.index + m[0].length - 1;
    // The matched char is either `{` (interface) or `=` (type alias). Track braces.
    if (componentSrc[i] === '=') {
      // type alias — capture until end of statement, balancing braces
      let depth = 0;
      let j = i + 1;
      while (j < componentSrc.length) {
        const c = componentSrc[j];
        if (c === '{') depth++;
        else if (c === '}') depth--;
        else if (c === ';' && depth === 0) break;
        j++;
      }
      blocks.push(componentSrc.slice(startTokIdx, j + 1));
    } else {
      let depth = 1;
      let j = i + 1;
      while (j < componentSrc.length && depth > 0) {
        const c = componentSrc[j];
        if (c === '{') depth++;
        else if (c === '}') depth--;
        j++;
      }
      blocks.push(componentSrc.slice(startTokIdx, j));
    }
  }
  return blocks;
}

function extractDescription(componentSrc) {
  // First multiline /** ... */ JSDoc at top of file, or the first triple-slash
  // comment block, or the first non-import comment.
  const m = componentSrc.match(/^\/\*\*([\s\S]+?)\*\//m);
  if (m) {
    return m[1].replace(/^\s*\*\s?/gm, '').trim().split('\n\n')[0];
  }
  // Fall back to leading inline comments above first export
  const lines = componentSrc.split('\n');
  const out = [];
  for (const line of lines) {
    if (line.trim().startsWith('//')) {
      out.push(line.replace(/^\s*\/\/\s?/, ''));
    } else if (out.length) {
      break;
    } else if (line.startsWith('import')) {
      continue;
    } else if (line.trim() === '') {
      continue;
    } else {
      break;
    }
  }
  return out.join(' ').trim() || '';
}

// ── walk components ────────────────────────────────────────────────────────
function listStoryFiles() {
  const out = execSync(
    `find ${ROOT}/components -name '*.stories.tsx' -type f`,
    { encoding: 'utf8' },
  );
  return out.trim().split('\n').filter(Boolean);
}

const entries = [];
for (const storyPath of listStoryFiles()) {
  const storySrc = readFileSync(storyPath, 'utf8');
  const title = extractTitle(storySrc);
  if (!title) continue;
  const [section, componentName] = title.split('/', 2);
  const stories = extractStories(storySrc);
  // Locate matching component source
  const compFile = storyPath.replace(/\.stories\.tsx$/, '.tsx');
  let compSrc = '';
  try { compSrc = readFileSync(compFile, 'utf8'); } catch { /* foundation stories have no .tsx */ }
  entries.push({
    section,
    componentName,
    storyPath: path.relative(ROOT, storyPath),
    compPath: compSrc ? path.relative(ROOT, compFile) : null,
    compSrc,
    storySrc,
    stories,
  });
}

// Sort by section order, then alphabetically within section
entries.sort((a, b) => {
  const sa = SECTION_ORDER.indexOf(a.section);
  const sb = SECTION_ORDER.indexOf(b.section);
  if (sa !== sb) return sa - sb;
  return a.componentName.localeCompare(b.componentName);
});

// ── build markdown ─────────────────────────────────────────────────────────
const lines = [];
const W = (...args) => lines.push(args.join(''));

W('# Suralink Design System (LSDS) — Component Catalog');
W();
W('> Auto-generated from Storybook source by `scripts/gen-design-system.mjs`.');
W('> Regenerate: `npm run gen-catalog`.');
W();
W('## Sources');
W();
W(`- **Storybook (live)**: ${STORYBOOK_BASE}`);
W(`- **Figma file**: ${FIGMA_BASE}`);
W(`- **Source repo**: ${REPO_URL}`);
W();
W('## How to use this file (for Claude.ai Projects)');
W();
W('This catalog is the source of truth for *which components exist*, *what props they take*, and *what variants look like*. Use it to prototype UIs by composing real LSDS components — do not invent new components or rewrite primitives.');
W();
W('When generating UI code:');
W('1. Look up the component below by name.');
W('2. Import it from the path shown in **Import**.');
W('3. Use only the props listed in **Props** and the variants demonstrated in **Stories**.');
W('4. If a variant you need is not listed, link the Figma frame so the user can add it instead of hand-rolling.');
W();
W('For exact visual reference, click the **Storybook** link to see the rendered component in isolation, or the **Figma** link to see the canonical design with full variant matrix.');
W();
W('## Token system');
W();
W('Style everything with the semantic Tailwind tokens, never raw colors/sizes:');
W();
W('- Colors: `bg-surface-canvas`, `bg-surface-elevated`, `bg-action-primary-500`, `text-primary-900`, `text-secondary-700`, `text-tertiary-500`, `text-on-accent`, `border-line`, `bg-accent-{green,yellow,red,orange,purple,blue}-{surface,fg,border}`');
W('- Spacing: `p-1` (4px) … `p-12` (48px) only, no `p-[Npx]`');
W('- Radius: `rounded-control` (button/input), `rounded-card`, `rounded-modal`, `rounded-pill`, `rounded-full`');
W('- Typography: `text-display-lg`, `text-display`, `text-heading-{lg,md,sm}`, `text-body-{md,sm}`, `text-label-{md,sm}`, `text-caption`');
W('- Effects: `shadow-card`, `shadow-modal`, `shadow-toast`');
W();
W('A pre-commit token lint (`scripts/check-tokens.mjs`) blocks raw values automatically.');
W();
W('## Sections');
W();
for (const sec of SECTION_ORDER) {
  const inSec = entries.filter((e) => e.section === sec);
  if (inSec.length === 0) continue;
  W(`- [${sec}](#${kebab(sec)}) — ${inSec.length} components`);
}
W();
W('---');
W();

let lastSection = null;
for (const e of entries) {
  if (e.section !== lastSection) {
    W();
    W(`# ${e.section}`);
    W();
    lastSection = e.section;
  }

  W(`## ${e.componentName}`);
  W();

  const figLink = figmaUrl(e.componentName);
  W('| Source | Link |');
  W('|--------|------|');
  W(`| Storybook (docs) | ${docsUrl(e.section + '/' + e.componentName)} |`);
  if (figLink) W(`| Figma | ${figLink} |`);
  if (e.compPath) W(`| Source | \`${e.compPath}\` |`);
  W(`| Story file | \`${e.storyPath}\` |`);
  W();

  // Description
  const desc = e.compSrc ? extractDescription(e.compSrc) : '';
  if (desc) {
    W('### Description');
    W();
    W(desc);
    W();
  }

  // Import line — derive from compPath
  if (e.compPath) {
    const importPath = './' + e.compPath.replace(/\.tsx$/, '');
    W('### Import');
    W();
    W('```tsx');
    W(`import { ${e.componentName.replace(/[^A-Za-z0-9]/g, '')} } from '${importPath}';`);
    W('```');
    W();
  }

  // Props
  if (e.compSrc) {
    const propBlocks = extractProps(e.compSrc);
    if (propBlocks.length) {
      W('### Props');
      W();
      for (const block of propBlocks) {
        W('```ts');
        W(block.trim());
        W('```');
        W();
      }
    }
  }

  // Stories — every variant
  if (e.stories.length) {
    W('### Variants');
    W();
    for (const s of e.stories) {
      W(`#### \`${s.name}\``);
      W();
      W(`[Open in Storybook →](${storyUrl(e.section + '/' + e.componentName, s.name)})`);
      W();
      W('```tsx');
      W(`export const ${s.name}: Story = ${s.body.trim()};`);
      W('```');
      W();
    }
  }

  W('---');
  W();
}

const outPath = path.join(ROOT, 'DESIGN_SYSTEM.md');
const content = lines.join('\n');
writeFileSync(outPath, content);
const size = statSync(outPath).size;
console.log(`✓ Generated ${path.relative(ROOT, outPath)}  —  ${entries.length} components  ·  ${(size / 1024).toFixed(0)} KB`);
