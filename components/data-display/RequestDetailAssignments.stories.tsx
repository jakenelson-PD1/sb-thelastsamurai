import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RequestDetailAssignments } from './RequestDetailAssignments';
import type { Assignee } from './RequestDetailAssignments';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof RequestDetailAssignments> = {
  title: 'RLM Layout/RequestDetailAssignments',
  component: RequestDetailAssignments,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="h-[480px] overflow-y-auto bg-canvas border border-line rounded-card">  // token-lint-skip: showcase fixed dims for screenshot stability
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof RequestDetailAssignments>;

const mockClientAssignees: Assignee[] = [
  { initials: 'GS', name: 'Gerardo Sumano',  email: 'gerardo@clientco.com',  type: 'client' },
  { initials: 'MK', name: 'Maria Kim',        email: 'maria@clientco.com',    type: 'client' },
];

const mockFirmAssignees: Assignee[] = [
  { initials: 'JA', name: 'Jake Allsop',      email: 'jake@firm.com',         type: 'firm' },
  { initials: 'AJ', name: 'Amana Johanson',   email: 'amana@firm.com',        type: 'firm' },
];

// ─── Default ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    clientAssignees: mockClientAssignees,
    firmAssignees: mockFirmAssignees,
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};

// ─── Empty state ──────────────────────────────────────────────────────────────
export const Empty: Story = {
  args: {
    clientAssignees: [],
    firmAssignees: [],
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};

// ─── Client only ──────────────────────────────────────────────────────────────
export const ClientOnly: Story = {
  args: {
    clientAssignees: mockClientAssignees,
    firmAssignees: [],
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};

// ─── Firm only ────────────────────────────────────────────────────────────────
export const FirmOnly: Story = {
  args: {
    clientAssignees: [],
    firmAssignees: mockFirmAssignees,
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};

// ─── Interactive ──────────────────────────────────────────────────────────────
export const Interactive: Story = {
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    return (
      <div className="flex flex-col">
        <RequestDetailAssignments
          clientAssignees={[
            { initials: 'GS', name: 'Gerardo Sumano', email: 'gerardo@clientco.com', type: 'client' },
            { initials: 'MK', name: 'Maria Kim', email: 'maria@clientco.com', type: 'client' },
          ]}
          firmAssignees={[
            { initials: 'JA', name: 'Jake Allsop', email: 'jake@firm.com', type: 'firm' },
            { initials: 'AJ', name: 'Amana Johanson', email: 'amana@firm.com', type: 'firm' },
          ]}
          onAddAssignee={(a) => setLog((prev) => [`Added ${a.name}`, ...prev])}
        />
        {log.length > 0 && (
          <div className="p-4 space-y-1 border-t border-line">
            <p className="text-label-sm text-muted font-semibold">Actions</p>
            {log.map((entry, i) => (
              <p key={i} className="text-body-md text-primary">{entry}</p>
            ))}
          </div>
        )}
      </div>
    );
  },
};

// ─── Many assignees ───────────────────────────────────────────────────────────
export const ManyAssignees: Story = {
  args: {
    clientAssignees: [
      { initials: 'GS', name: 'Gerardo Sumano',  email: 'gerardo@clientco.com',  type: 'client' },
      { initials: 'MK', name: 'Maria Kim',        email: 'maria@clientco.com',    type: 'client' },
      { initials: 'RL', name: 'Rachel Lopez',     email: 'rachel@clientco.com',   type: 'client' },
    ],
    firmAssignees: [
      { initials: 'JA', name: 'Jake Allsop',      email: 'jake@firm.com',         type: 'firm' },
      { initials: 'AJ', name: 'Amana Johanson',   email: 'amana@firm.com',        type: 'firm' },
      { initials: 'JS', name: 'Jenny Staggs',     email: 'jenny@firm.com',        type: 'firm' },
    ],
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};

// ─── Matrix — 1:1 mirror of Figma RequestDetailAssignments page (76:14) ──────
// ComponentSet (id 420:52), single variant State=open: an Accordion
// ("Assignments" + 4-avatar stack + chevron) over a 2-column Content
// (Client Available: Gerardo + Maria; Firm available: Jake + Amana).
// Variant at (8,8), 800×170.
const RDA_CELLS: MatrixCellSpec[] = [
  {
    variant: 'State=open',
    x: 0,
    y: 0,
    w: 800,
    h: 170,
    expect: {
      // The whole Accordion header is one <button>; its text content is the
      // title "Assignments" followed by the 4 avatar-stack initials (G/M/J/A),
      // so MatrixVerify reads it as the concatenation below.
      buttonLabels: ['AssignmentsGMJA'],
    },
  },
];

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:14', cells: RDA_CELLS },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 170 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 800 }}>
        <RequestDetailAssignments
          clientAssignees={mockClientAssignees}
          firmAssignees={mockFirmAssignees}
          defaultOpen
        />
      </div>
    </div>
  ),
};
