import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as IconModule from './icons';

const meta: Meta = {
  title: 'Foundation/Icons',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

// ─── Extract every icon component from the barrel ───────────────────────────
// Mirrors Figma Icons page (76:67) which has 1,178 icon ComponentSets across
// 162 alphabetised rows × ~8 columns, each with Size=Small/Medium/Large.
// Source has ~1,175 React icon components (1:1 with Figma, ±3 from renames).
// Every icon ships sizes: 16 (Small), 20 (Medium), 24 (Large) — set via the
// `size` prop.

type IconComponent = (props: { size?: number; className?: string }) => JSX.Element;

interface IconEntry {
  name: string;       // "ActivityIcon"
  displayName: string; // "activity" (kebab — matches Figma ComponentSet name)
  Component: IconComponent;
}

function toKebab(pascal: string): string {
  return pascal
    .replace(/Icon$/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([0-9]+)/g, '-$1')
    .replace(/--+/g, '-')
    .replace(/^-/, '')
    .toLowerCase();
}

const ALL_ICONS: IconEntry[] = Object.entries(IconModule)
  .filter(([name, value]) => name.endsWith('Icon') && typeof value === 'function')
  .map(([name, Component]) => ({
    name,
    displayName: toKebab(name),
    Component: Component as IconComponent,
  }))
  .sort((a, b) => a.displayName.localeCompare(b.displayName));

// ─── Library — searchable grid of every canonical icon ────────────────────
export const Library: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [size, setSize] = useState<16 | 20 | 24>(20);
    const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) return ALL_ICONS;
      return ALL_ICONS.filter((i) => i.displayName.includes(q));
    }, [query]);

    return (
      <div className="bg-canvas p-8 min-h-screen">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-display-lg font-bold text-primary">Icon Library</h1>
          <p className="text-body-md text-secondary">
            {ALL_ICONS.length} icons · 3 sizes each (Small 16 / Medium 20 / Large 24) ·
            Mirrors Figma Icons page (76:67)
          </p>
        </div>

        <div className="mb-6 flex items-center gap-4 sticky top-0 bg-canvas py-3 z-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${ALL_ICONS.length} icons…`}
            className="h-9 w-80 rounded-control border border-line-strong bg-elevated px-3 text-body-md text-primary placeholder:text-muted focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20"
          />
          <div className="flex items-center gap-1">
            {([16, 20, 24] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`h-9 px-3 rounded-control text-body-sm transition-colors ${
                  size === s
                    ? 'bg-action-primary text-on-accent'
                    : 'bg-elevated text-secondary hover:bg-surface'
                }`}
              >
                {s}px
              </button>
            ))}
          </div>
          <span className="text-label-md text-muted">
            {filtered.length} of {ALL_ICONS.length}
          </span>
        </div>

        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}
        >
          {filtered.map(({ name, displayName, Component }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-card border border-line bg-elevated p-3 hover:border-line-strong transition-colors"
            >
              <div className="flex h-10 items-center justify-center text-primary">
                <Component size={size} />
              </div>
              <span className="text-caption text-muted font-mono text-center truncate w-full">
                {displayName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// ─── Sizes — show all 3 canonical sizes side-by-side ────────────────────────
export const Sizes: Story = {
  render: () => {
    const Sample = ALL_ICONS.find((i) => i.displayName === 'activity')?.Component;
    if (!Sample) return <p>Activity icon not found.</p>;
    return (
      <div className="bg-canvas p-8">
        <h2 className="text-heading-lg font-semibold text-primary mb-4">Canonical Sizes</h2>
        <p className="text-body-md text-secondary mb-6">
          Every icon ships at 3 sizes that match Figma's <code className="text-code font-mono">Size=Small | Medium | Large</code> variants.
        </p>
        <div className="flex items-end gap-8 text-primary">
          <div className="flex flex-col items-center gap-2"><Sample size={16} /><span className="text-caption text-muted">Small / 16px</span></div>
          <div className="flex flex-col items-center gap-2"><Sample size={20} /><span className="text-caption text-muted">Medium / 20px</span></div>
          <div className="flex flex-col items-center gap-2"><Sample size={24} /><span className="text-caption text-muted">Large / 24px</span></div>
        </div>
      </div>
    );
  },
};
