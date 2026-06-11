import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Search> = {
  title: 'Overlay/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Search>;

function InteractiveSearch(props: Partial<React.ComponentProps<typeof Search>>) {
  const [value, setValue] = useState('');
  return (
    <Search
      value={value}
      onChange={setValue}
      onClear={() => setValue('')}
      {...props}
    />
  );
}

export const Default: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch placeholder="Type here…" currentMatch={0} totalMatches={0} />
    </div>
  ),
};

export const WithMatches: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch
        value="contract"
        currentMatch={3}
        totalMatches={7}
        onNext={() => {}}
        onPrevious={() => {}}
      />
    </div>
  ),
};

export const NoMatches: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch
        value="xyz"
        currentMatch={0}
        totalMatches={0}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <Search value="" placeholder="Type here…" disabled currentMatch={0} totalMatches={0} />
    </div>
  ),
};

// ─── Custom placeholder ────────────────────────────────────────────────────────
export const CustomPlaceholder: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch placeholder="Search documents…" />
    </div>
  ),
};

// ─── Size comparison ──────────────────────────────────────────────────────────
// Matches Button's xs / sm / md scheme.
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch size="xs" placeholder="xs (h-7 / 28px)" />
      <InteractiveSearch size="sm" placeholder="sm (h-8 / 32px)" />
      <InteractiveSearch size="md" placeholder="md (h-9 / 36px) — default" />
    </div>
  ),
};

// ─── With navigation callbacks (onNext / onPrevious) ─────────────────────────
export const WithNavigation: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch
        value="clause"
        currentMatch={2}
        totalMatches={5}
        onNext={() => alert('next')}
        onPrevious={() => alert('previous')}
      />
    </div>
  ),
};

// ─── Matrix — mirrors Figma Search ComponentSet (541:84) ────────────────────
// 15 variants on Size × State grid:
//   Size:  xs (28h) | sm (32h) | md (36h)
//   State: Idle | Hover | Focus | Active | Disabled
// All cells are 280 wide. State variants force visuals via className overrides
// so the canonical Search primitive renders each cell — no forks. Cell (x,y)
// values mirror Figma 541:84 exactly: xs row y=0, sm row y=68, md row y=140;
// State columns at x = 0 / 320 / 640 / 960 / 1280.

type SearchSize = 'xs' | 'sm' | 'md';
type SearchState = 'Idle' | 'Hover' | 'Focus' | 'Active' | 'Disabled';

const SIZE_H: Record<SearchSize, number> = { xs: 28, sm: 32, md: 36 };
const SIZE_Y: Record<SearchSize, number> = { xs: 0,  sm: 68, md: 140 };
const STATE_X: Record<SearchState, number> = {
  Idle: 0, Hover: 320, Focus: 640, Active: 960, Disabled: 1280,
};

const SEARCH_CELLS: MatrixCellSpec[] = (['xs', 'sm', 'md'] as const).flatMap((size) =>
  (['Idle', 'Hover', 'Focus', 'Active', 'Disabled'] as const).map((state) => ({
    variant: `Size=${size}, State=${state}`,
    x: STATE_X[state],
    y: SIZE_Y[size],
    w: 280,
    h: SIZE_H[size],
    expect: { headings: [] },
  })),
);

const renderCell = (variant: string) => {
  const sizeMatch = variant.match(/Size=(\w+)/);
  const stateMatch = variant.match(/State=(\w+)/);
  if (!sizeMatch || !stateMatch) return null;
  const size = sizeMatch[1] as SearchSize;
  const state = stateMatch[1] as SearchState;

  // Hover / Focus aren't a runtime DOM state we can render passively — force
  // the visual via the same className overrides Figma's variants use:
  //   Hover → bg-surface (subtle hover background, border unchanged)
  //   Focus → info-toned border + ring (keyboard a11y emphasis)
  if (state === 'Hover') {
    return <Search size={size} placeholder="Type here…" className="!bg-surface" />;
  }
  if (state === 'Focus') {
    return (
      <Search
        size={size}
        placeholder="Type here…"
        className="!border-status-info-border !ring-2 !ring-status-info-border/40"
      />
    );
  }
  if (state === 'Active') {
    // Filled state: real value drives the active-chrome (counter + nav + clear)
    return (
      <Search
        size={size}
        value="Search query"
        currentMatch={1}
        totalMatches={5}
        onChange={() => {}}
        onClear={() => {}}
      />
    );
  }
  if (state === 'Disabled') {
    return <Search size={size} placeholder="Type here…" disabled />;
  }
  // Idle
  return <Search size={size} placeholder="Type here…" />;
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:70', cells: SEARCH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1580, height: 200 }}>
      {SEARCH_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderCell(c.variant)}
        </div>
      ))}
    </div>
  ),
};
