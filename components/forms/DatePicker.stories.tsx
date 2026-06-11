import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof DatePicker> = {
  title: 'Primitives/DatePicker', component: DatePicker, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default:    Story = { args: { label: 'Select date' } };
export const WithError:  Story = { args: { label: 'Select date', error: 'Date is required' } };
export const WithValue:  Story = { args: { label: 'Select date', value: '2026-03-27' } };
export const Disabled:   Story = { args: { label: 'Select date', value: '2026-03-27', disabled: true } };

// ─── Matrix — pixel-pinned mirror of Figma DatePicker ComponentSet (3129:12) ─
// Canonical DatePicker ComponentSet on page 76:24 with 5 State variants:
// Default / WithValue / Focused / WithError / Disabled. Each variant is 280×40
// for the input row (or 280×62 for WithError including helper text).
// TEXT props: Label, Value, Placeholder, ErrorMessage.
// BOOLEAN props: ShowLabel, ShowError.

type DP_State = 'Default' | 'WithValue' | 'Focused' | 'WithError' | 'Disabled';

interface DPCell extends MatrixCellSpec {
  state: DP_State;
}

// Y coords normalized from Figma's first input frame at y=206.
// Spacing: 122px between rows (Default → WithValue → Focused → WithError).
// WithError → Disabled has 150px due to the inline error message.
const DATEPICKER_CELLS: DPCell[] = [
  { variant: 'State=Default',   state: 'Default',   x: 0, y: 0,   w: 280, h: 40, expect: { headings: [] } },
  { variant: 'State=WithValue', state: 'WithValue', x: 0, y: 122, w: 280, h: 40, expect: { headings: [] } },
  { variant: 'State=Focused',   state: 'Focused',   x: 0, y: 244, w: 280, h: 40, expect: { headings: [] } },
  { variant: 'State=WithError', state: 'WithError', x: 0, y: 366, w: 280, h: 40, expect: { headings: [] } },
  { variant: 'State=Disabled',  state: 'Disabled',  x: 0, y: 516, w: 280, h: 40, expect: { headings: [] } },
];

function renderDPCell(cell: DPCell) {
  switch (cell.state) {
    case 'Default':   return <DatePicker />;
    case 'WithValue': return <DatePicker value="2026-03-27" />;
    case 'Focused':   return <DatePicker className="[&_input]:!border-line-focus [&_input]:!ring-2 [&_input]:!ring-line-focus/20" />;
    case 'WithError': return <DatePicker error="Please select a valid date." />;
    case 'Disabled':  return <DatePicker value="2026-03-27" disabled />;
  }
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '3129:12', cells: DATEPICKER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 280, height: 556 }}>
      {DATEPICKER_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderDPCell(c)}
        </div>
      ))}
    </div>
  ),
};
