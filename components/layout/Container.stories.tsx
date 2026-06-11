import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container', component: Container, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Container>;

const Box = () => (
  <div className="bg-action-primary/10 border border-line rounded-control p-4 text-center text-body-sm text-primary">
    Content inside container
  </div>
);

export const Default: Story = { args: { children: 'Content inside container', maxWidth: '2xl' } };

export const SmallWidth: Story = {
  args: { maxWidth: 'sm', children: <Box /> },
};

export const MediumWidth: Story = {
  args: { maxWidth: 'md', children: <Box /> },
};

export const LargeWidth: Story = {
  args: { maxWidth: 'lg', children: <Box /> },
};

export const XLWidth: Story = {
  args: { maxWidth: 'xl', children: <Box /> },
};

export const TwoXLWidth: Story = {
  args: { maxWidth: '2xl', children: <Box /> },
};

export const FullWidth: Story = {
  args: { maxWidth: 'full', children: <Box /> },
};

// ─── Matrix — mirrors Figma "Container" page (76:30) ─────────────────────────
// LAYOUT scaffolding: 6 variants stacked vertically at 160px steps.
// Figma ComponentSet 778:20 — cell positions/sizes mirror the Figma frame
// exactly (each variant cell is the wrapping outer frame; inner pill is a
// placeholder that visually marks the constrained content area).
const C_CELLS: MatrixCellSpec[] = [
  { variant: 'MaxWidth=sm',   x: 40, y: 40,  w: 384,  h: 128, expect: { headings: [] } },
  { variant: 'MaxWidth=md',   x: 40, y: 200, w: 448,  h: 128, expect: { headings: [] } },
  { variant: 'MaxWidth=lg',   x: 40, y: 360, w: 512,  h: 128, expect: { headings: [] } },
  { variant: 'MaxWidth=xl',   x: 40, y: 520, w: 576,  h: 128, expect: { headings: [] } },
  { variant: 'MaxWidth=2xl',  x: 40, y: 680, w: 672,  h: 128, expect: { headings: [] } },
  { variant: 'MaxWidth=full', x: 40, y: 840, w: 1800, h: 128, expect: { headings: [] } },
];

// Placeholder pill — matches the Figma showcase: a centered light-grey rounded
// rectangle inside a bordered outer frame, marking the content slot.
const ContainerPlaceholder = () => (
  <div className="h-12 w-full rounded-card bg-recessed" />
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:30', cells: C_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1880, height: 1010 }}>
      {C_CELLS.map(c => (
        <div
          key={c.variant}
          className="absolute border border-line rounded-control bg-canvas overflow-hidden flex items-center"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Container maxWidth={c.variant.replace('MaxWidth=','') as 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'}>
            <ContainerPlaceholder />
          </Container>
        </div>
      ))}
    </div>
  ),
};
