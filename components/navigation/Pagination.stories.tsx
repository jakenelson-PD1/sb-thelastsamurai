import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination', component: Pagination, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Pagination>;

// ─── Demo stories ───────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} total={10} onChange={setPage} />;
  },
};

export const FirstPage: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} total={10} onChange={setPage} />;
  },
};

export const LastPage: Story = {
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination page={page} total={10} onChange={setPage} />;
  },
};

export const SinglePage: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} total={1} onChange={setPage} />;
  },
};

// ─── Matrix — mirrors Figma Pagination ComponentSet (839:30) ────────────────
// 12 variants on PagePosition × State grid, where State directionality targets
// the SPECIFIC clickable button (Prev / Next):
//   PagePosition: Default, FirstPage, LastPage, SinglePage
//   State:        Default, Hover-Prev, Hover-Next, Focus-Prev, Focus-Next
// Not all combinations exist — e.g. FirstPage disables Prev, so it has no
// Hover-Prev / Focus-Prev variant. SinglePage has only Default (both disabled).
// Cell (x, y, w, h) values mirror Figma 76:49 / 839:30 exactly.

// State overrides — apply hover/focus styling to ONE specific button via
// nth-of-type selectors. Prev is the first button, Next is the last button.
const HOVER_PREV = '[&>button:nth-of-type(1):not(:disabled)]:!bg-surface';
const HOVER_NEXT = '[&>button:nth-of-type(2):not(:disabled)]:!bg-surface';
const FOCUS_PREV =
  '[&>button:nth-of-type(1):not(:disabled)]:!ring-2 ' +
  '[&>button:nth-of-type(1):not(:disabled)]:!ring-line-focus ' +
  '[&>button:nth-of-type(1):not(:disabled)]:!ring-offset-0';
const FOCUS_NEXT =
  '[&>button:nth-of-type(2):not(:disabled)]:!ring-2 ' +
  '[&>button:nth-of-type(2):not(:disabled)]:!ring-line-focus ' +
  '[&>button:nth-of-type(2):not(:disabled)]:!ring-offset-0';

type PagePosition = 'Default' | 'FirstPage' | 'LastPage' | 'SinglePage';
type PaginationState = 'Default' | 'Hover-Prev' | 'Hover-Next' | 'Focus-Prev' | 'Focus-Next';

// Page/total combos by PagePosition variant
const PAGE_TOTAL: Record<PagePosition, { page: number; total: number }> = {
  Default:    { page: 2,  total: 10 },
  FirstPage:  { page: 1,  total: 10 },
  LastPage:   { page: 10, total: 10 },
  SinglePage: { page: 1,  total: 1 },
};

const PG_CELLS: MatrixCellSpec[] = [
  // — PagePosition=Default (both buttons clickable — all 5 states)
  { variant: 'PagePosition=Default, State=Default',    x: 24,   y: 24,  w: 197, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=Default, State=Hover-Prev', x: 304,  y: 24,  w: 197, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=Default, State=Hover-Next', x: 584,  y: 24,  w: 197, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=Default, State=Focus-Prev', x: 864,  y: 24,  w: 197, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=Default, State=Focus-Next', x: 1144, y: 24,  w: 197, h: 37, expect: { headings: [] } },
  // — PagePosition=FirstPage (Prev disabled — only Next states)
  { variant: 'PagePosition=FirstPage, State=Default',    x: 24,   y: 77,  w: 195, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=FirstPage, State=Hover-Next', x: 584,  y: 77,  w: 195, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=FirstPage, State=Focus-Next', x: 1144, y: 77,  w: 195, h: 37, expect: { headings: [] } },
  // — PagePosition=LastPage (Next disabled — only Prev states)
  { variant: 'PagePosition=LastPage, State=Default',    x: 24,  y: 130, w: 204, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=LastPage, State=Hover-Prev', x: 304, y: 130, w: 204, h: 37, expect: { headings: [] } },
  { variant: 'PagePosition=LastPage, State=Focus-Prev', x: 864, y: 130, w: 204, h: 37, expect: { headings: [] } },
  // — PagePosition=SinglePage (both disabled — Default only)
  { variant: 'PagePosition=SinglePage, State=Default', x: 24,  y: 183, w: 187, h: 37, expect: { headings: [] } },
];

const parseVariant = (v: string): { pagePosition: PagePosition; state: PaginationState } => {
  const pagePosition = v.match(/PagePosition=(\w+)/)![1] as PagePosition;
  const state = v.match(/State=([\w-]+)/)![1] as PaginationState;
  return { pagePosition, state };
};

const STATE_OVERRIDE: Record<PaginationState, string> = {
  'Default':    '',
  'Hover-Prev': HOVER_PREV,
  'Hover-Next': HOVER_NEXT,
  'Focus-Prev': FOCUS_PREV,
  'Focus-Next': FOCUS_NEXT,
};

const renderCell = (variant: string) => {
  const { pagePosition, state } = parseVariant(variant);
  const { page, total } = PAGE_TOTAL[pagePosition];
  return <Pagination page={page} total={total} onChange={() => {}} className={STATE_OVERRIDE[state]} />;
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:49', cells: PG_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1365, height: 244 }}>
      {PG_CELLS.map((c) => (
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
