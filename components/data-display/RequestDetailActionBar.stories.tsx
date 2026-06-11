import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RequestDetailActionBar } from './RequestDetailActionBar';
import { MatrixVerify } from '../_decorators/MatrixVerify';
import type { StatusIndicator } from './RequestRow';

const meta: Meta<typeof RequestDetailActionBar> = {
  title: 'RLM Layout/RequestDetailActionBar',
  component: RequestDetailActionBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof RequestDetailActionBar>;

// ─── Default — outstanding ────────────────────────────────────────────────────
export const Default: Story = {
  args: { currentState: 'outstanding' },
};

// ─── All states ───────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-line border border-line rounded-card overflow-hidden">
      <RequestDetailActionBar currentState="outstanding" />
      <RequestDetailActionBar currentState="accepted" />
      <RequestDetailActionBar currentState="fulfilled" />
      <RequestDetailActionBar currentState="returned" />
    </div>
  ),
};

// ─── Interactive — state changes reflected in the trigger label ───────────────
export const Interactive: Story = {
  render: () => {
    const [state, setState] = useState<StatusIndicator>('outstanding');
    return (
      <RequestDetailActionBar
        currentState={state}
        onChangeState={setState}
        onEdit={() => alert('Edit')}
        onDelete={() => alert('Delete')}
        onMore={() => alert('More')}
      />
    );
  },
};

// ─── Matrix — 1:1 mirror of Figma RequestDetailActionBar page (76:13) ─────────
// ComponentSet `RequestDetailActionBar` (id 413:44), 671×48 (single variant).
//   State=default @ (8, 8) — left "Change request state" Secondary sm Button w/
//   chevron-down icon Right; right Actions cluster of 3 Ghost md iconOnly
//   buttons (dots-horizontal, edit-02, trash-03) at gap-1 (4px).
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:13',
      cells: [
        {
          variant: 'State=default',
          x: 8, y: 8, w: 671, h: 48,
          expect: {
            // Only the dropdown trigger has visible text. The 3 right action
            // buttons (More/Edit/Delete) are iconOnly with aria-labels —
            // MatrixVerify filters empty-text buttons from `buttonLabels`.
            buttonLabels: ['Change request state'],
          },
        },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 687, height: 64 }}>
      <div className="absolute" data-matrix-cell style={{ left: 8, top: 8, width: 671 }}>
        <RequestDetailActionBar currentState="outstanding" />
      </div>
    </div>
  ),
};
