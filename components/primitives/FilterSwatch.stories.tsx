import { Fragment, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterSwatch } from './FilterSwatch';
import { colors } from '../../tokens/colors';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof FilterSwatch> = {
  title: 'Primitives/FilterSwatch',
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
          selected={active.has(key)}
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
            <FilterSwatch key={color} color={color} selected size={size} />
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
        <FilterSwatch key={key} color={color} selected={false} />
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
        <FilterSwatch key={key} color={color} selected highPriority />
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
          <span className="w-20 text-body-sm text-muted">{key}</span>
          {(['sm', 'md'] as const).map((size) => (
            <div key={size} className="flex items-center gap-2">
              <FilterSwatch color={color} size={size} selected={false} />
              <FilterSwatch color={color} size={size} selected />
              <FilterSwatch color={color} size={size} selected={false} highPriority />
              <FilterSwatch color={color} size={size} selected highPriority />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma FilterSwatch ComponentSet (484:19) ─
// 40 variants: Color (not-started/outstanding/fulfilled/overdue) × Size (sm/md)
// × State (Default/Selected/Hover/Focus/Disabled).
// Layout grid (matches Figma exactly):
//   Y rows (per Color): not-started=40/42, outstanding=76/78, fulfilled=112/114, overdue=148/150
//                       (md=top row, sm=offset +2 for visual centering)
//   X cols (sm): Default=40,  Hover=80,  Focus=120, Selected=160, Disabled=200
//   X cols (md): Default=250, Hover=294, Focus=338, Selected=382, Disabled=426

type FS_Color = 'not-started' | 'outstanding' | 'fulfilled' | 'overdue';
type FS_Size = 'sm' | 'md';
type FS_State = 'Default' | 'Selected' | 'Hover' | 'Focus' | 'Disabled';

interface FSCell extends MatrixCellSpec {
  color: FS_Color;
  size: FS_Size;
  state: FS_State;
}

const COLOR_VAR: Record<FS_Color, string> = {
  'not-started': 'var(--color-swatch-not-started)',
  'outstanding': 'var(--color-swatch-outstanding)',
  'fulfilled':   'var(--color-swatch-fulfilled)',
  'overdue':     'var(--color-swatch-overdue)',
};

const SM_X: Record<FS_State, number> = { Default: 40,  Hover: 80,  Focus: 120, Selected: 160, Disabled: 200 };
const MD_X: Record<FS_State, number> = { Default: 250, Hover: 294, Focus: 338, Selected: 382, Disabled: 426 };
const COLOR_Y_SM: Record<FS_Color, number> = { 'not-started': 42,  outstanding: 78,  fulfilled: 114, overdue: 150 };
const COLOR_Y_MD: Record<FS_Color, number> = { 'not-started': 40,  outstanding: 76,  fulfilled: 112, overdue: 148 };

const FS_COLORS: FS_Color[] = ['not-started', 'outstanding', 'fulfilled', 'overdue'];
const FS_STATES: FS_State[] = ['Default', 'Selected', 'Hover', 'Focus', 'Disabled'];

const FILTERSWATCH_CELLS: FSCell[] = FS_COLORS.flatMap((color) =>
  FS_STATES.flatMap((state) => ([
    { variant: `Color=${color}, Size=sm, State=${state}`, color, size: 'sm' as FS_Size, state,
      x: SM_X[state], y: COLOR_Y_SM[color], w: 16, h: 16, expect: { headings: [] } },
    { variant: `Color=${color}, Size=md, State=${state}`, color, size: 'md' as FS_Size, state,
      x: MD_X[state], y: COLOR_Y_MD[color], w: 20, h: 20, expect: { headings: [] } },
  ])),
);

function PinnedSwatch({ cell }: { cell: FSCell }) {
  // Force Hover / Focus visuals at rest so matrix can show every state side-by-side.
  const hoverOverride = '[&_button>span]:!opacity-100';
  const focusOverride = '[&_button]:!ring-2 [&_button]:!ring-line-focus [&_button]:!ring-offset-2';
  const wrapCls =
    cell.state === 'Hover' ? hoverOverride :
    cell.state === 'Focus' ? focusOverride :
    '';
  return (
    <div className={wrapCls}>
      <FilterSwatch
        color={COLOR_VAR[cell.color]}
        size={cell.size}
        selected={cell.state === 'Selected'}
        disabled={cell.state === 'Disabled'}
      />
    </div>
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '484:19', cells: FILTERSWATCH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 470, height: 200 }}>
      {FILTERSWATCH_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <PinnedSwatch cell={c} />
        </div>
      ))}
    </div>
  ),
};
