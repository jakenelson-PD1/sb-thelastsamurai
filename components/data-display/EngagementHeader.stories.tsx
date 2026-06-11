import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { EngagementHeader } from './EngagementHeader';
import { MatrixVerify } from '../_decorators/MatrixVerify';

const meta: Meta<typeof EngagementHeader> = {
  title: 'RLM Layout/EngagementHeader',
  component: EngagementHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof EngagementHeader>;

export const Default: Story = {
  args: {
    firmName: 'PricewaterhouseCoopers',
    clientName: 'Meridian Holdings',
    engagementId: 'ENG-2025-042',
    engagementName: 'Annual Tax Compliance Review',
  },
};

export const WithActivity: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 4,
  },
};

export const LongNames: Story = {
  args: {
    firmName: 'Ernst & Young LLP',
    clientName: 'Global Manufacturing Industries',
    engagementId: 'ENG-2024-087-AUDIT',
    engagementName: 'Annual Financial Statement Review & Compliance',
    activityCount: 12,
  },
};

export const WithAllActions: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 4,
    onMenuClick: fn(),
    onTeamClick: fn(),
    onNotificationsClick: fn(),
    onAnalyticsClick: fn(),
    onActivityClick: fn(),
  },
};

export const NoActivity: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 0,
  },
};

export const HighActivityCount: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 150,
  },
};

// ─── Matrix — 1:1 mirror of Figma EngagementHeader page (76:9) ───────────────
// Figma: 1 ComponentSet, 1 variant `State=default` at (0, 0) sized 800×80.
// bg/elevated, border/default, padding 16/24/24/24, itemSpacing 16.
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:9',
      cells: [
        {
          variant: 'State=default', x: 0, y: 0, w: 800, h: 80,
          expect: {
            // Figma breadcrumb: Home / Products / Sword (last = current page)
            // No labeled action buttons (all icon-only); title rendered as h1
            headings: ['Annual Tax Compliance Review'],
            swatchCount: 0,
            // Action buttons are icon-only so they have no text label
            buttonLabels: ['Home', 'Products', 'Sword'],
          },
        },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 80 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 800 }}>
        <EngagementHeader
          firmName="Home"
          firmHref="#home"
          clientName="Products"
          clientHref="#products"
          engagementId="Sword"
          engagementName="Annual Tax Compliance Review"
        />
      </div>
    </div>
  ),
};
