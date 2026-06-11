import type { Meta, StoryObj } from '@storybook/react';
import { RequestStatusColorNav } from './RequestStatusColorNav';
import type { RequestSection } from './RequestStatusColorNav';

const meta: Meta<typeof RequestStatusColorNav> = {
  title: 'RLM Layout/RequestStatusColorNav',
  component: RequestStatusColorNav,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => (
    <div className="bg-canvas p-4">
      <Story />
    </div>
  )],
};
export default meta;
type Story = StoryObj<typeof RequestStatusColorNav>;

const mockSections: RequestSection[] = [
  {
    id: 'general',
    label: 'General',
    requests: [
      { id: 'g1', status: 'fulfilled' },
      { id: 'g2', status: 'outstanding' },
      { id: 'g3', status: 'fulfilled' },
    ],
  },
  {
    id: 'financial-reporting',
    label: 'Financial Reporting',
    requests: [
      { id: 'fr1', status: 'outstanding' },
      { id: 'fr2', status: 'not-started' },
      { id: 'fr3', status: 'overdue' },
      { id: 'fr4', status: 'outstanding' },
    ],
  },
  {
    id: 'cash',
    label: 'Cash',
    requests: [
      { id: 'ca1', status: 'fulfilled' },
      { id: 'ca2', status: 'fulfilled' },
    ],
  },
  {
    id: 'ar-sales',
    label: 'A/R & Sales',
    requests: [
      { id: 'ar1', status: 'outstanding' },
      { id: 'ar2', status: 'not-started' },
      { id: 'ar3', status: 'overdue' },
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    requests: [
      { id: 'in1', status: 'not-started' },
      { id: 'in2', status: 'not-started' },
      { id: 'in3', status: 'outstanding' },
    ],
  },
  {
    id: 'fixed-assets',
    label: 'Fixed Assets',
    requests: [
      { id: 'fa1', status: 'fulfilled' },
      { id: 'fa2', status: 'outstanding' },
    ],
  },
  {
    id: 'accounts-payable',
    label: 'Accounts Pay...',
    requests: [
      { id: 'ap1', status: 'overdue' },
      { id: 'ap2', status: 'outstanding' },
      { id: 'ap3', status: 'not-started' },
      { id: 'ap4', status: 'fulfilled' },
    ],
  },
];

export const Default: Story = {
  args: {
    sections: mockSections,
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};

export const WithActive: Story = {
  args: {
    sections: mockSections,
    activeId: 'g2',
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};

export const Overflow: Story = {
  decorators: [(Story) => (
    <div className="bg-canvas p-4" style={{ width: 800 }}>
      <Story />
    </div>
  )],
  args: {
    sections: [
      { id: 'general', label: 'General', requests: [
        { id: 'g1', status: 'fulfilled' }, { id: 'g2', status: 'outstanding' }, { id: 'g3', status: 'outstanding', isFlagged: true },
        { id: 'g4', status: 'fulfilled' }, { id: 'g5', status: 'fulfilled' }, { id: 'g6', status: 'outstanding' },
        { id: 'g7', status: 'overdue' }, { id: 'g8', status: 'fulfilled' }, { id: 'g9', status: 'outstanding' }, { id: 'g10', status: 'overdue' },
      ]},
      { id: 'fin-rep', label: 'Financial Reporting', requests: [
        { id: 'fr1', status: 'overdue', isFlagged: true }, { id: 'fr2', status: 'not-started' }, { id: 'fr3', status: 'not-started' },
        { id: 'fr4', status: 'outstanding', isFlagged: true }, { id: 'fr5', status: 'not-started' }, { id: 'fr6', status: 'fulfilled' },
        { id: 'fr7', status: 'not-started' }, { id: 'fr8', status: 'not-started' }, { id: 'fr9', status: 'not-started' },
        { id: 'fr10', status: 'fulfilled', isFlagged: true }, { id: 'fr11', status: 'fulfilled' }, { id: 'fr12', status: 'not-started' },
      ]},
      { id: 'cash', label: 'Cash', requests: [
        { id: 'ca1', status: 'not-started' }, { id: 'ca2', status: 'not-started' }, { id: 'ca3', status: 'not-started' },
        { id: 'ca4', status: 'not-started' }, { id: 'ca5', status: 'not-started' }, { id: 'ca6', status: 'not-started' },
        { id: 'ca7', status: 'not-started' }, { id: 'ca8', status: 'not-started' },
      ]},
      { id: 'ar-sales', label: 'A/R & Sales', requests: [
        { id: 'ar1', status: 'overdue' }, { id: 'ar2', status: 'not-started' }, { id: 'ar3', status: 'overdue' },
        { id: 'ar4', status: 'not-started' }, { id: 'ar5', status: 'not-started' }, { id: 'ar6', status: 'not-started' },
        { id: 'ar7', status: 'not-started' }, { id: 'ar8', status: 'not-started' }, { id: 'ar9', status: 'not-started' }, { id: 'ar10', status: 'not-started' },
      ]},
      { id: 'inventory', label: 'Inventory', requests: [
        { id: 'in1', status: 'not-started' }, { id: 'in2', status: 'not-started' }, { id: 'in3', status: 'not-started' },
        { id: 'in4', status: 'not-started' }, { id: 'in5', status: 'not-started' }, { id: 'in6', status: 'not-started' },
        { id: 'in7', status: 'fulfilled' }, { id: 'in8', status: 'fulfilled' }, { id: 'in9', status: 'fulfilled' }, { id: 'in10', status: 'fulfilled' },
      ]},
      { id: 'fixed-assets', label: 'Fixed Assets', requests: [
        { id: 'fa1', status: 'fulfilled' }, { id: 'fa2', status: 'fulfilled' }, { id: 'fa3', status: 'fulfilled' },
        { id: 'fa4', status: 'fulfilled' }, { id: 'fa5', status: 'outstanding' }, { id: 'fa6', status: 'outstanding' },
        { id: 'fa7', status: 'fulfilled' }, { id: 'fa8', status: 'fulfilled' }, { id: 'fa9', status: 'fulfilled' }, { id: 'fa10', status: 'fulfilled' },
      ]},
      { id: 'accounts-payable', label: 'Accounts Pay...', requests: [
        { id: 'ap1', status: 'outstanding' }, { id: 'ap2', status: 'outstanding' }, { id: 'ap3', status: 'not-started' },
        { id: 'ap4', status: 'not-started' }, { id: 'ap5', status: 'not-started' }, { id: 'ap6', status: 'not-started' },
      ]},
    ],
    activeId: 'g2',
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};

export const WithFlags: Story = {
  args: {
    sections: mockSections.map((section) => ({
      ...section,
      requests: section.requests.map((req, i) => ({
        ...req,
        isFlagged: i === 1,
      })),
    })),
    activeId: 'fr1',
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};
