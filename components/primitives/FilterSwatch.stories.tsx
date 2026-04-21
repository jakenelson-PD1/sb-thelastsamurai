import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterSwatch } from './FilterSwatch';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof FilterSwatch> = {
  component: FilterSwatch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof FilterSwatch>;

// ─── Interactive multi-select group ──────────────────────────────────────────

const PALETTE_SWATCHES = [
  { key: 'brand',     color: colors.brand[300]     },
  { key: 'cerulean',  color: colors.cerulean[300]  },
  { key: 'green',     color: colors.green[300]     },
  { key: 'yellow',    color: colors.yellow[300]    },
  { key: 'orange',    color: colors.orange[300]    },
  { key: 'red',       color: colors.red[300]       },
  { key: 'pink',      color: colors.pink[300]      },
  { key: 'eggplant',  color: colors.eggplant[300]  },
  { key: 'purple',    color: colors.purple[300]    },
  { key: 'neutral',   color: colors.neutral[300]   },
];

function MultiSelect() {
  const [active, setActive] = useState<Set<string>>(new Set(['brand', 'green']));
  const toggle = (key: string) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  return (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch
          key={key}
          color={color}
          active={active.has(key)}
          onClick={() => toggle(key)}
        />
      ))}
    </div>
  );
}

export const Default: Story = {
  render: () => <MultiSelect />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(['sm', 'md'] as const).map((size) => (
        <div key={size} className="flex items-center gap-2">
          {[colors.brand[300], colors.green[300], colors.yellow[300]].map((color) => (
            <FilterSwatch key={color} color={color} active size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};

// ─── Inactive state in isolation ──────────────────────────────────────────────
export const Inactive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch key={key} color={color} active={false} />
      ))}
    </div>
  ),
};

// ─── High-priority flag overlay ──────────────────────────────────────────────
export const Flagged: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch key={key} color={color} highPriority />
      ))}
    </div>
  ),
};

// ─── Flag + active outline composed together ─────────────────────────────────
export const FlaggedAndActive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch key={key} color={color} active highPriority />
      ))}
    </div>
  ),
};

// ─── Active × flagged matrix per palette color at both sizes ─────────────────
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <div key={key} className="flex items-center gap-4">
          <span className="w-20 text-sm text-fg-muted">{key}</span>
          {(['sm', 'md'] as const).map((size) => (
            <div key={size} className="flex items-center gap-2">
              <FilterSwatch color={color} size={size} active={false} />
              <FilterSwatch color={color} size={size} active />
              <FilterSwatch color={color} size={size} active={false} highPriority />
              <FilterSwatch color={color} size={size} active highPriority />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
