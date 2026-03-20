import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RequestRow } from './RequestRow';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof RequestRow> = {
  component: RequestRow,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof RequestRow>;

// ─── Default ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <RequestRow
      orderNumber={1}
      title="CFO Initial Inquiries"
      status="none"
    />
  ),
};

// ─── Selected (description visible) ──────────────────────────────────────────

export const Selected: Story = {
  render: () => {
    const [selected, setSelected] = useState(true);
    return (
      <RequestRow
        orderNumber={3}
        title="CFO Initial Inquiries"
        description="Procedures and process documentation regarding IT general controls"
        status="warning"
        selected={selected}
        onClick={() => setSelected((v) => !v)}
      />
    );
  },
};

// ─── All Statuses ─────────────────────────────────────────────────────────────

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-line">
      {(['warning', 'in-progress', 'rejected', 'complete', 'none'] as const).map((status, i) => (
        <RequestRow
          key={status}
          orderNumber={58 + i}
          title={`Status: ${status}`}
          status={status}
        />
      ))}
    </div>
  ),
};

// ─── With All Meta ────────────────────────────────────────────────────────────

export const WithAllMeta: Story = {
  render: () => (
    <RequestRow
      orderNumber={7}
      title="Audit Committee Meeting Minutes"
      status="in-progress"
      meta={[
        { type: 'e-signature' },
        { type: 'assignee', initials: 'A', color: colors.orange[100] },
        { type: 'due-date', date: '04/18/2025' },
        { type: 'comments', count: 2 },
        { type: 'documents', count: 3 },
        { type: 'flag' },
      ]}
    />
  ),
};

// ─── With Attachment ──────────────────────────────────────────────────────────

export const WithAttachment: Story = {
  render: () => (
    <RequestRow
      orderNumber={3}
      title="CFO Initial Inquiries"
      status="warning"
      attachmentLabel="Firm provided 8 files"
      meta={[
        { type: 'due-date', date: '04/18/2025' },
        { type: 'comments', count: 2 },
        { type: 'documents', count: 3 },
        { type: 'flag' },
      ]}
    />
  ),
};

// ─── No Meta ──────────────────────────────────────────────────────────────────

export const NoMeta: Story = {
  render: () => (
    <RequestRow
      orderNumber={12}
      title="Board of Directors Resolutions"
      status="complete"
    />
  ),
};

// ─── Assignee With Lock ───────────────────────────────────────────────────────

export const AssigneeWithLock: Story = {
  render: () => (
    <RequestRow
      orderNumber={5}
      title="Payroll Processing Records"
      status="in-progress"
      meta={[
        { type: 'assignee', initials: 'A', color: colors.orange[100], locked: true },
        { type: 'due-date', date: '04/18/2025' },
      ]}
    />
  ),
};
