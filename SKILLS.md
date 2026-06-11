# LSDS Skills — Install Guide for the Product Org

Four Claude skills that codify the rules and workflows for working in the Suralink Last Samurai Design System (LSDS). Install once, then every Claude session you run (Claude Code, Cursor, VS Code extension, Claude.ai with project knowledge) gets the LSDS discipline applied automatically.

## The four skills

| Skill | Who it's for | What it enforces |
|---|---|---|
| **`lsds-rapid-prototyping`** | Devs, PMs, PDs | Compose UI from real LSDS components, never invent. Brief-before-build. Cross-reference Storybook + Figma on every turn. |
| **`figma-canonical-only`** | Designers, anyone working in the Figma file | Block creating new ComponentSets in Figma. Every node must be an instance of an existing canonical. |
| **`figma-page-to-storybook-matrix`** | Devs building/reconciling Matrix stories | Force per-cell numeric verification before any "done" claim. No "9 cells render — looks good." |
| **`token-compliance-gate`** | Devs writing any styling code | Block raw hex, arbitrary dims, Tailwind defaults, unbound Figma values. Every visual value must resolve to a documented token. |

Together they cover the three pillars of LSDS discipline: canonical-only composition, token-binding, and brief-first prototyping.

## Install (Claude Code, Cursor, VS Code with Claude)

The skills live in this repo at `.claude/skills/`. Two install paths:

### Path A — Symlink (recommended)

Symlinks auto-update whenever you `git pull`. This is how skills should be installed for active LSDS work.

```bash
# Adjust REPO if you cloned somewhere else
REPO="$HOME/Downloads/agents-main/last-samurai"

mkdir -p ~/.claude/skills
for skill in lsds-rapid-prototyping figma-canonical-only figma-page-to-storybook-matrix token-compliance-gate; do
  ln -sf "$REPO/.claude/skills/$skill" "$HOME/.claude/skills/$skill"
done

ls -la ~/.claude/skills/
```

Restart Claude Code afterwards. The skills will appear in your available-skills list.

### Path B — Packaged `.skill` files (for users who don't clone the repo)

If a teammate doesn't want to clone the whole design system repo, they can install just the skills via `.skill` packages:

```bash
mkdir -p ~/.claude/skills
cd ~/.claude/skills

# Download all four skill packages
for skill in lsds-rapid-prototyping figma-canonical-only figma-page-to-storybook-matrix token-compliance-gate; do
  curl -L -o "/tmp/${skill}.skill" \
    "https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/dist/${skill}.skill"
  unzip -o "/tmp/${skill}.skill" -d ~/.claude/skills/
done
```

Restart Claude Code.

The downside vs symlink: skills won't auto-update. They'd need to re-run this command when the design system evolves. For most consumers (PMs, PDs, dabbler devs) that's fine.

## Install (Claude.ai web)

Claude.ai doesn't load `.skill` packages directly yet. To get the same behavior in a Claude.ai Project:

1. Open https://claude.ai/projects → your design system Project
2. For each skill, grab the SKILL.md body (everything after the closing `---` of the frontmatter):
   - https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/.claude/skills/lsds-rapid-prototyping/SKILL.md
   - https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/.claude/skills/figma-canonical-only/SKILL.md
   - https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/.claude/skills/figma-page-to-storybook-matrix/SKILL.md
   - https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/.claude/skills/token-compliance-gate/SKILL.md
3. Paste into the Project's **Custom instructions** OR upload as files to **Project knowledge** — both work. Custom instructions trigger more reliably; knowledge files are fetched on demand.

The shortcut for Claude.ai users: just paste [PROJECT_INSTRUCTIONS.md](PROJECT_INSTRUCTIONS.md) into custom instructions — it's a pre-merged version of the prototyping discipline that pulls all four pillars into one shorter document.

## Verify after install

In a fresh Claude session, ask:

> "What skills do you have available for LSDS work?"

You should see all four skills listed by name. Then test a real trigger:

> "Prototype a settings page for a Suralink engagement."

Claude should respond by outputting a **Design Brief** first (canonical components, sections, open questions) and waiting for your confirmation before writing any JSX. If it dives straight into code without a brief, the `lsds-rapid-prototyping` skill isn't loaded — re-check `~/.claude/skills/` and restart your session.

## Distribution to the product org

Quickest Slack message to onboard a teammate:

> 🥷 Suralink design-system rapid prototyping — install 4 Claude skills in 30 seconds:
>
> ```bash
> mkdir -p ~/.claude/skills && cd ~/.claude/skills
> for s in lsds-rapid-prototyping figma-canonical-only figma-page-to-storybook-matrix token-compliance-gate; do
>   curl -L -o "/tmp/$s.skill" "https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/dist/$s.skill"
>   unzip -o "/tmp/$s.skill" -d ~/.claude/skills/
> done
> ```
>
> Restart Claude Code. Now when you ask Claude to prototype any Suralink UI, it composes real LSDS components, binds every style to a token, and verifies against both Storybook + Figma. Catalog of all components is at https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/DESIGN_SYSTEM.md.
>
> For Claude.ai users (PMs, PDs without Claude Code), paste this into a Project's custom instructions instead: https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/PROJECT_INSTRUCTIONS.md

## Keeping skills fresh

When the design system evolves (new components, new tokens, renamed variants), the skills evolve too — they reference `DESIGN_SYSTEM.md`, which is auto-regenerated by `npm run gen-catalog`.

For symlink installs: `git pull` is enough.

For `.skill` package installs: re-run the install one-liner above. The packaged skills are rebuilt automatically by the project's CI on every push to `main`.

If you change a skill, repackage:

```bash
cd <repo>
# requires the skill-creator package (PyYAML)
pip3 install --user pyyaml
python3 -m scripts.package_skill .claude/skills/<skill-name>
mv <skill-name>.skill dist/
git add dist/<skill-name>.skill .claude/skills/<skill-name>
git commit -m "feat(skill): update <skill-name>"
git push
```

## Skills' dependencies on each other

The skills are intentionally composable:

- `lsds-rapid-prototyping` calls out the other three as the rules it enforces
- `figma-canonical-only` is the Figma-side enforcer for the same canonical-only rule
- `token-compliance-gate` is the styling-side enforcer for token binding
- `figma-page-to-storybook-matrix` is the parity enforcer between the two sources of truth

If a teammate only needs one, install all four anyway — they don't conflict and they trigger on disjoint contexts (PMs will mostly trip the first; devs will see all four; designers will mostly see the first two).
