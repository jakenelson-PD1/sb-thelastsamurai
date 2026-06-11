import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { Tabs } from './Tabs';
import { Button } from '../primitives/Button';
import { PlusIcon } from '../primitives/icons/PlusIcon';
import { Download01Icon } from '../primitives/icons/Download01Icon';
import { FilterLinesIcon } from '../primitives/icons/FilterLinesIcon';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof PageHeader> = {
  title: 'Navigation/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

const Actions = () => (
  <div className="flex items-center gap-2">
    <Button variant="secondary" startIcon={<FilterLinesIcon size="sm" />}>Filter</Button>
    <Button variant="secondary" startIcon={<Download01Icon size="sm" />}>Export</Button>
    <Button variant="primary" startIcon={<PlusIcon size="sm" />}>New Engagement</Button>
  </div>
);

const tabItems = [
  { value: 'all',      label: 'All'      },
  { value: 'active',   label: 'Active'   },
  { value: 'archived', label: 'Archived' },
];

function PageTabs() {
  const [active, setActive] = useState('all');
  return <Tabs tabs={tabItems} active={active} onChange={setActive} />;
}

export const TitleOnly: Story = {
  args: {
    title: 'Engagements',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Engagements',
    actions: <Actions />,
  },
};

export const WithBreadcrumb: Story = {
  args: {
    title: 'Q4 Tax Review',
    breadcrumb: [
      { label: 'Clients', href: '#' },
      { label: 'Acme Corp', href: '#' },
      { label: 'Q4 Tax Review' },
    ],
    actions: <Actions />,
  },
};

export const WithTabs: Story = {
  args: {
    title: 'Engagements',
    actions: <Actions />,
    toolbar: <PageTabs />,
  },
};

export const WithBreadcrumbAndTabs: Story = {
  args: {
    title: 'Q4 Tax Review',
    breadcrumb: [
      { label: 'Clients', href: '#' },
      { label: 'Acme Corp', href: '#' },
      { label: 'Q4 Tax Review' },
    ],
    actions: <Actions />,
    toolbar: <PageTabs />,
  },
};

// ─── Matrix — mirrors Figma PageHeader ComponentSet (844:133) ───────────────
// 5 variants on a single `Variant` axis, stacked vertically in Figma at y=24,
// 101, 185, 290, 411. Each variant is 1200px wide; heights grow as content
// rows compose (title row 61, +breadcrumb 28, +tabs 44, +both 65).
// Cell (x, y, w, h) values mirror Figma 76:48 / 844:133 exactly.

const PH_BREADCRUMB = [
  { label: 'Clients', href: '#' },
  { label: 'Acme Corp', href: '#' },
  { label: 'Q4 Tax Review' },
];

const PH_CELLS: MatrixCellSpec[] = [
  { variant: 'Variant=TitleOnly',              x: 24, y: 24,  w: 1200, h: 61,  expect: { headings: ['Engagements'] } },
  { variant: 'Variant=WithActions',            x: 24, y: 101, w: 1200, h: 68,  expect: { headings: ['Engagements'] } },
  { variant: 'Variant=WithBreadcrumb',         x: 24, y: 185, w: 1200, h: 89,  expect: { headings: ['Q4 Tax Review'] } },
  { variant: 'Variant=WithTabs',               x: 24, y: 290, w: 1200, h: 105, expect: { headings: ['Engagements'] } },
  { variant: 'Variant=WithBreadcrumbAndTabs',  x: 24, y: 411, w: 1200, h: 126, expect: { headings: ['Q4 Tax Review'] } },
];

// Each cell renders the canonical `PageHeader` with the props mix that matches
// the corresponding Figma variant. Tabs use a stateless inline `Tabs` so the
// Matrix story stays free of internal interactivity.
function MatrixTabs() {
  return <Tabs tabs={tabItems} active="all" onChange={() => {}} />;
}

const renderCell = (variantName: string) => {
  switch (variantName) {
    case 'Variant=TitleOnly':
      return <PageHeader title="Engagements" />;
    case 'Variant=WithActions':
      return <PageHeader title="Engagements" actions={<Actions />} />;
    case 'Variant=WithBreadcrumb':
      return <PageHeader title="Q4 Tax Review" breadcrumb={PH_BREADCRUMB} actions={<Actions />} />;
    case 'Variant=WithTabs':
      return <PageHeader title="Engagements" actions={<Actions />} toolbar={<MatrixTabs />} />;
    case 'Variant=WithBreadcrumbAndTabs':
      return <PageHeader title="Q4 Tax Review" breadcrumb={PH_BREADCRUMB} actions={<Actions />} toolbar={<MatrixTabs />} />;
    default:
      return null;
  }
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:48', cells: PH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1248, height: 561 }}>
      {PH_CELLS.map((c) => (
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
