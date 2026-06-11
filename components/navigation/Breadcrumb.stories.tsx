import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb', component: Breadcrumb, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// ─── Demo stories ───────────────────────────────────────────────────────────

export const Default: Story = {
  args: { items: [{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Sword' }] },
};

// Just the current page — no ancestor links, no separator rendered.
export const SingleItem: Story = {
  args: { items: [{ label: 'Dashboard' }] },
};

// Every item has an href, including the current page (e.g. a shareable deep link).
export const AllLinked: Story = {
  args: {
    items: [
      { label: 'Home',        href: '/' },
      { label: 'Clients',     href: '/clients' },
      { label: 'Acme Corp',   href: '/clients/acme' },
      { label: 'Engagements', href: '/clients/acme/engagements' },
    ],
  },
};

// Items with long text to verify truncation / wrapping behaviour.
export const LongLabels: Story = {
  args: {
    items: [
      { label: 'Home',                                                         href: '/' },
      { label: 'Global Manufacturing Industries & Partners',                   href: '/clients/gmi' },
      { label: 'Annual Financial Statement Review & Compliance Audit FY 2024', href: '/clients/gmi/engagements/audit-2024' },
      { label: 'Q4 Payroll Tax Reconciliation Report — Final Submission' },
    ],
  },
};

// ─── Matrix — mirrors Figma Breadcrumb ComponentSet (838:26) ────────────────
// Figma set has 9 variants on a Length × State grid:
//   Length: Single (1 item), Short (3 items), Long (4 items)
//   State:  Default, Hover, Disabled
// Cell (x, y, w, h) values mirror Figma 76:47 / 838:26 exactly.

const SINGLE = [{ label: 'Dashboard' }];
const SHORT  = [
  { label: 'Home',     href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Sword' },
];
const LONG   = [
  { label: 'Home',        href: '/' },
  { label: 'Clients',     href: '/clients' },
  { label: 'Acme Corp',   href: '/clients/acme' },
  { label: 'Engagements' },
];

const BC_CELLS: MatrixCellSpec[] = [
  // State=Default column (x=24)
  { variant: 'Length=Single, State=Default',  x: 24,  y: 24, w: 86,  h: 24, expect: { headings: [] } },
  { variant: 'Length=Short, State=Default',   x: 24,  y: 61, w: 219, h: 24, expect: { headings: [] } },
  { variant: 'Length=Long, State=Default',    x: 24,  y: 98, w: 349, h: 24, expect: { headings: [] } },
  // State=Hover column (x=474)
  { variant: 'Length=Single, State=Hover',    x: 474, y: 24, w: 86,  h: 24, expect: { headings: [] } },
  { variant: 'Length=Short, State=Hover',     x: 474, y: 61, w: 219, h: 24, expect: { headings: [] } },
  { variant: 'Length=Long, State=Hover',      x: 474, y: 98, w: 349, h: 24, expect: { headings: [] } },
  // State=Disabled column (x=984)
  { variant: 'Length=Single, State=Disabled', x: 984, y: 24, w: 86,  h: 24, expect: { headings: [] } },
  { variant: 'Length=Short, State=Disabled',  x: 984, y: 61, w: 219, h: 24, expect: { headings: [] } },
  { variant: 'Length=Long, State=Disabled',   x: 984, y: 98, w: 349, h: 24, expect: { headings: [] } },
];

const itemsForLength = (length: 'Single' | 'Short' | 'Long') =>
  length === 'Single' ? SINGLE : length === 'Short' ? SHORT : LONG;

// Force hover styling on ancestor chips by targeting their role=button selector.
// Mirrors Chip's hover state: text-link + underline.
const HOVER_OVERRIDE = '[&_[role=button]]:!text-link [&_[role=button]]:!underline';

const renderCell = (variantName: string) => {
  const length = variantName.match(/Length=(\w+)/)![1] as 'Single' | 'Short' | 'Long';
  const state  = variantName.match(/State=(\w+)/)![1]  as 'Default' | 'Hover' | 'Disabled';
  const items = itemsForLength(length);

  if (state === 'Hover')    return <Breadcrumb items={items} className={HOVER_OVERRIDE} />;
  if (state === 'Disabled') return <Breadcrumb items={items} className="opacity-50 pointer-events-none" />;
  return <Breadcrumb items={items} />;
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:47', cells: BC_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1380, height: 150 }}>
      {BC_CELLS.map((c) => (
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
