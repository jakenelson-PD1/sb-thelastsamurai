import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';
import { RequestRow } from './RequestRow';
import { Avatar } from '../primitives/Avatar';
import { Badge } from '../primitives/Badge';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof AccordionItem> = {
  title: 'Overlay/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof AccordionItem>;

// ─── Size: md (32px) ──────────────────────────────────────────────────────────

export const SizeMd: Story = {
  render: () => (
    <AccordionItem title="General / Planning" size="md" defaultOpen={true}>
      <div className="px-3 py-3 text-body-sm text-secondary">
        32px header — the default size.
      </div>
    </AccordionItem>
  ),
};

// ─── Size: sm (24px) ──────────────────────────────────────────────────────────

export const SizeSm: Story = {
  render: () => (
    <AccordionItem title="General / Planning" size="sm" defaultOpen={true}>
      <div className="px-2 py-2 text-label-sm text-secondary">
        24px header — compact size.
      </div>
    </AccordionItem>
  ),
};

// ─── Size: lg (40px) ──────────────────────────────────────────────────────────

export const SizeLg: Story = {
  render: () => (
    <AccordionItem title="Assignments" size="lg" defaultOpen={true}>
      <div className="px-4 py-3 text-body-sm text-secondary">
        40px header — used for primary section headers (e.g. request detail sections).
      </div>
    </AccordionItem>
  ),
};

// ─── All Sizes ────────────────────────────────────────────────────────────────

export const BothSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-label-sm text-muted px-4 pb-2">lg — 40px · primary section headers</p>
        <AccordionItem title="Assignments" size="lg" defaultOpen={true}>
          <div className="px-4 py-3 text-body-sm text-secondary">Content area.</div>
        </AccordionItem>
      </div>
      <div>
        <p className="text-label-sm text-muted px-3 pb-2">md — 32px · default</p>
        <AccordionItem title="General / Planning" size="md" defaultOpen={true}>
          <div className="px-3 py-3 text-body-sm text-secondary">Content area.</div>
        </AccordionItem>
      </div>
      <div>
        <p className="text-label-sm text-muted px-3 pb-2">sm — 24px · compact</p>
        <AccordionItem title="General / Planning" size="sm" defaultOpen={true}>
          <div className="px-2 py-2 text-label-sm text-secondary">Content area.</div>
        </AccordionItem>
      </div>
    </div>
  ),
};

// ─── With extra content ───────────────────────────────────────────────────────
// Use the `extra` prop to place badges, chips, or avatar stacks between
// the title and the chevron.

export const WithBadge: Story = {
  render: () => (
    <AccordionItem
      title="Client attached files"
      size="lg"
      extra={<Badge variant="default">4 files</Badge>}
      defaultOpen={false}
    >
      <div className="px-4 py-3 text-body-sm text-secondary">File list content.</div>
    </AccordionItem>
  ),
};

export const WithAvatars: Story = {
  render: () => (
    <AccordionItem
      title="Assignments"
      size="lg"
      extra={
        <div className="flex items-center gap-1">
          <Avatar variant="client" size="xs" initials="GS" />
          <Avatar variant="client" size="xs" initials="MK" />
          <Avatar variant="firm"   size="xs" initials="AJ" />
        </div>
      }
      defaultOpen={false}
    >
      <div className="px-4 py-3 text-body-sm text-secondary">Assignee list content.</div>
    </AccordionItem>
  ),
};

// ─── With Request Rows (sticky category headers) ─────────────────────────────
// Each section header is sticky — it pins at top-0 of the scroll container and
// is pushed out by the next section header as you scroll down.

export const WithRequestRows: Story = {
  render: () => (
    <div className="h-[480px] overflow-y-auto border border-line rounded-card">  // token-lint-skip: showcase fixed dims for screenshot stability
    <Accordion>
      <AccordionItem title="General / Planning" defaultOpen={true} sticky>
        <RequestRow
          orderNumber={1}
          title="Engagement Letter"
          status="accepted"
          meta={[
            { type: 'due-date', date: '04/01/2025' },
            { type: 'comments', count: 2 },
            { type: 'documents', count: 1 },
          ]}
        />
        <RequestRow
          orderNumber={2}
          title="Organizational Chart"
          status="outstanding"
          meta={[
            { type: 'due-date', date: '04/08/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 0 },
          ]}
        />
        <RequestRow
          orderNumber={3}
          title="Prior Year Audit Report"
          status="fulfilled"
          meta={[
            { type: 'due-date', date: '03/28/2025' },
            { type: 'comments', count: 1 },
            { type: 'documents', count: 4 },
          ]}
        />
      </AccordionItem>

      <AccordionItem title="Financial Controls" defaultOpen={false} sticky>
        <RequestRow
          orderNumber={4}
          title="General Ledger Trial Balance"
          status="returned"
          meta={[
            { type: 'due-date', date: '04/15/2025' },
            { type: 'comments', count: 3 },
            { type: 'documents', count: 2 },
          ]}
        />
        <RequestRow
          orderNumber={5}
          title="Bank Reconciliation Statements"
          status="outstanding"
          meta={[
            { type: 'due-date', date: '04/18/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 0 },
          ]}
        />
      </AccordionItem>

      <AccordionItem title="HR Compliance" defaultOpen={false} sticky>
        <RequestRow
          orderNumber={6}
          title="Payroll Register — Q1"
          status="accepted"
          meta={[
            { type: 'due-date', date: '04/10/2025' },
            { type: 'comments', count: 1 },
            { type: 'documents', count: 3 },
          ]}
        />
        <RequestRow
          orderNumber={7}
          title="Employee Benefit Plan Documentation"
          status="none"
          meta={[
            { type: 'due-date', date: '04/22/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 0 },
          ]}
        />
        <RequestRow
          orderNumber={8}
          title="I-9 Compliance Records"
          status="fulfilled"
          meta={[
            { type: 'due-date', date: '04/05/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 2 },
          ]}
        />
      </AccordionItem>
    </Accordion>
    </div>
  ),
};

// ─── Multiple Items (all can be open) ─────────────────────────────────────────

export const MultipleItems: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Introduction" defaultOpen={true}>
        <div className="px-3 py-3 text-body-sm text-secondary">
          Each accordion item manages its own open/closed state independently.
          Multiple panels can be expanded at the same time — there is no
          exclusive selection behavior.
        </div>
      </AccordionItem>

      <AccordionItem title="Usage Guidelines" defaultOpen={true}>
        <div className="px-3 py-3 text-body-sm text-secondary">
          Use the <code className="text-primary">Accordion</code> wrapper to
          group multiple <code className="text-primary">AccordionItem</code>{' '}
          components. The wrapper adds dividers between items. You can also use{' '}
          <code className="text-primary">AccordionItem</code> in isolation
          without the wrapper.
        </div>
      </AccordionItem>

      <AccordionItem title="Accessibility" defaultOpen={false}>
        <div className="px-3 py-3 text-body-sm text-secondary">
          The header is a native <code className="text-primary">button</code>{' '}
          element with <code className="text-primary">aria-expanded</code>{' '}
          reflecting the current state. The panel is always present in the DOM
          for screen readers; only its visual height is animated via the CSS
          grid trick.
        </div>
      </AccordionItem>
    </Accordion>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Accordion ComponentSet (388:59) ──
// 24 variants on 4 axes (Size × State × Chevron × Avatars) at exact Figma coords.
// Grid layout:
//   X columns (per State + Chevron):  0 / 504 / 1008 / 1512
//   Y rows (per Size + Avatars):      0 / 97 / 194 / 299 / 404 / 517
//   Each variant 480w; heights vary by Size + State.

const SAMPLE_CONTENT = (
  <div className="px-3 py-2 text-body-sm text-secondary">Content area.</div>
);
const AVATARS_SLOT = (
  <span className="flex items-center gap-1">
    <Avatar size="xs" variant="client" initials="G" />
    <Avatar size="xs" variant="firm" initials="J" />
  </span>
);

interface AccCell extends MatrixCellSpec {
  size: 'sm' | 'md' | 'lg';
  open: boolean;
  showChevron: boolean;
  showAvatars: boolean;
}

const ACCORDION_CELLS: AccCell[] = [
  // ── Avatars=None ── (top half)
  // Row 1: sm Closed/Open  ·  Chevron Show/Hide
  { variant: 'Size=sm, State=Closed, Chevron=Show, Avatars=None', x: 0,    y: 0,   w: 480, h: 24, size: 'sm', open: false, showChevron: true,  showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=sm, State=Closed, Chevron=Hide, Avatars=None', x: 504,  y: 0,   w: 480, h: 24, size: 'sm', open: false, showChevron: false, showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   Chevron=Show, Avatars=None', x: 1008, y: 0,   w: 480, h: 73, size: 'sm', open: true,  showChevron: true,  showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   Chevron=Hide, Avatars=None', x: 1512, y: 0,   w: 480, h: 73, size: 'sm', open: true,  showChevron: false, showAvatars: false, expect: { headings: [] } },
  // Row 2: md Closed/Open  ·  Chevron Show/Hide
  { variant: 'Size=md, State=Closed, Chevron=Show, Avatars=None', x: 0,    y: 194, w: 480, h: 32, size: 'md', open: false, showChevron: true,  showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=md, State=Closed, Chevron=Hide, Avatars=None', x: 504,  y: 194, w: 480, h: 32, size: 'md', open: false, showChevron: false, showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   Chevron=Show, Avatars=None', x: 1008, y: 194, w: 480, h: 81, size: 'md', open: true,  showChevron: true,  showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   Chevron=Hide, Avatars=None', x: 1512, y: 194, w: 480, h: 81, size: 'md', open: true,  showChevron: false, showAvatars: false, expect: { headings: [] } },
  // Row 3: lg Closed/Open  ·  Chevron Show/Hide
  { variant: 'Size=lg, State=Closed, Chevron=Show, Avatars=None', x: 0,    y: 404, w: 480, h: 40, size: 'lg', open: false, showChevron: true,  showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=lg, State=Closed, Chevron=Hide, Avatars=None', x: 504,  y: 404, w: 480, h: 40, size: 'lg', open: false, showChevron: false, showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=lg, State=Open,   Chevron=Show, Avatars=None', x: 1008, y: 404, w: 480, h: 89, size: 'lg', open: true,  showChevron: true,  showAvatars: false, expect: { headings: [] } },
  { variant: 'Size=lg, State=Open,   Chevron=Hide, Avatars=None', x: 1512, y: 404, w: 480, h: 89, size: 'lg', open: true,  showChevron: false, showAvatars: false, expect: { headings: [] } },
  // ── Avatars=Show ── (sub-rows interleaved per size)
  { variant: 'Size=sm, State=Closed, Chevron=Show, Avatars=Show', x: 0,    y: 97,  w: 480, h: 24, size: 'sm', open: false, showChevron: true,  showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=sm, State=Closed, Chevron=Hide, Avatars=Show', x: 504,  y: 97,  w: 480, h: 24, size: 'sm', open: false, showChevron: false, showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   Chevron=Show, Avatars=Show', x: 1008, y: 97,  w: 480, h: 73, size: 'sm', open: true,  showChevron: true,  showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   Chevron=Hide, Avatars=Show', x: 1512, y: 97,  w: 480, h: 73, size: 'sm', open: true,  showChevron: false, showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=md, State=Closed, Chevron=Show, Avatars=Show', x: 0,    y: 299, w: 480, h: 32, size: 'md', open: false, showChevron: true,  showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=md, State=Closed, Chevron=Hide, Avatars=Show', x: 504,  y: 299, w: 480, h: 32, size: 'md', open: false, showChevron: false, showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   Chevron=Show, Avatars=Show', x: 1008, y: 299, w: 480, h: 81, size: 'md', open: true,  showChevron: true,  showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   Chevron=Hide, Avatars=Show', x: 1512, y: 299, w: 480, h: 81, size: 'md', open: true,  showChevron: false, showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=lg, State=Closed, Chevron=Show, Avatars=Show', x: 0,    y: 517, w: 480, h: 40, size: 'lg', open: false, showChevron: true,  showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=lg, State=Closed, Chevron=Hide, Avatars=Show', x: 504,  y: 517, w: 480, h: 40, size: 'lg', open: false, showChevron: false, showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=lg, State=Open,   Chevron=Show, Avatars=Show', x: 1008, y: 517, w: 480, h: 89, size: 'lg', open: true,  showChevron: true,  showAvatars: true,  expect: { headings: [] } },
  { variant: 'Size=lg, State=Open,   Chevron=Hide, Avatars=Show', x: 1512, y: 517, w: 480, h: 89, size: 'lg', open: true,  showChevron: false, showAvatars: true,  expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:3', cells: ACCORDION_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1992, height: 606 }}>
      {ACCORDION_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <AccordionItem
            title="General / Planning"
            size={c.size}
            defaultOpen={c.open}
            showChevron={c.showChevron}
            extra={c.showAvatars ? AVATARS_SLOT : undefined}
          >
            {SAMPLE_CONTENT}
          </AccordionItem>
        </div>
      ))}
    </div>
  ),
};
