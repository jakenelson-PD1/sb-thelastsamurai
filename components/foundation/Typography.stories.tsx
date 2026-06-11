import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta = {
  title: 'Foundation/Typography',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

// ─── Type scale rows — mirrors Figma Typography page (77:7) exactly ─────────
interface TypeRow {
  label: string;       // "Display LG"
  cls: string;         // "text-display-lg"
  specimen: string;    // "Display Large"
  specs: string;       // "30px / 36px lh / Bold"
  rowY: number;        // Figma row Y center for the style label
  specimenY: number;   // Figma specimen text Y (slightly above label due to font ascender)
  specimenH: number;   // Figma specimen text height (Display LG = 29, Body MD = 21, etc)
}

const TYPE_SCALE: TypeRow[] = [
  { label: 'Display LG',   cls: 'text-display-lg',       specimen: 'Display Large',    specs: '30px / 36px lh / Bold',     rowY: 200, specimenY: 196, specimenH: 29 },
  { label: 'Display',      cls: 'text-display',          specimen: 'Display',          specs: '24px / 28.8px lh / Bold',   rowY: 262, specimenY: 258, specimenH: 29 },
  { label: 'Heading LG',   cls: 'text-heading-lg',       specimen: 'Heading Large',    specs: '20px / 25px lh / Semi Bold',rowY: 318, specimenY: 314, specimenH: 25 },
  { label: 'Heading MD',   cls: 'text-heading-md',       specimen: 'Heading Medium',   specs: '18px / 22.5px lh / Semi Bold', rowY: 370, specimenY: 366, specimenH: 23 },
  { label: 'Heading SM',   cls: 'text-heading-sm',       specimen: 'Heading Small',    specs: '16px / 20px lh / Semi Bold',rowY: 420, specimenY: 416, specimenH: 20 },
  { label: 'Body MD',      cls: 'text-body-md',          specimen: 'Body Medium — The quick brown fox jumps over the lazy dog', specs: '14px / 21px lh / Regular',   rowY: 468, specimenY: 464, specimenH: 21 },
  { label: 'Body SM',      cls: 'text-body-sm',          specimen: 'Body Small — The quick brown fox jumps over the lazy dog',  specs: '13px / 19.5px lh / Regular', rowY: 516, specimenY: 512, specimenH: 20 },
  { label: 'Label MD',     cls: 'text-label-md',         specimen: 'Label Medium',     specs: '12px / 16.8px lh / Medium',  rowY: 564, specimenY: 560, specimenH: 17 },
  { label: 'Label SM',     cls: 'text-label-sm',         specimen: 'Label Small',      specs: '11px / 13.75px lh / Medium', rowY: 612, specimenY: 608, specimenH: 14 },
  { label: 'Caption',      cls: 'text-caption',          specimen: 'Caption Text',     specs: '10px / 12px lh / Regular',   rowY: 660, specimenY: 656, specimenH: 12 },
  { label: 'Caption Bold', cls: 'text-caption-bold',     specimen: 'Caption Bold',     specs: '10px / 12px lh / Bold',      rowY: 708, specimenY: 704, specimenH: 12 },
  { label: 'Code',         cls: 'text-code font-mono',   specimen: 'const value = token.resolve();', specs: '12px / 18px lh / Regular', rowY: 756, specimenY: 752, specimenH: 18 },
];

interface WeightRow {
  label: string;       // "Regular"
  cls: string;         // "font-normal"
  specimen: string;    // "The quick brown fox — font-weight: 400"
  rowY: number;        // Figma label Y
  specimenY: number;   // Figma specimen Y
}

const WEIGHTS: WeightRow[] = [
  { label: 'Regular',  cls: 'font-normal',   specimen: 'The quick brown fox — font-weight: 400', rowY: 880, specimenY: 876 },
  { label: 'Medium',   cls: 'font-medium',   specimen: 'The quick brown fox — font-weight: 500', rowY: 928, specimenY: 924 },
  { label: 'Semibold', cls: 'font-semibold', specimen: 'The quick brown fox — font-weight: 600', rowY: 976, specimenY: 972 },
  { label: 'Bold',     cls: 'font-bold',     specimen: 'The quick brown fox — font-weight: 700', rowY: 1024, specimenY: 1020 },
];

// ─── Legacy gallery stories ────────────────────────────────────────────────
export const TypeScale: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-body-sm font-semibold text-secondary mb-4">Type Scale</p>
      {TYPE_SCALE.map((s) => (
        <div key={s.label} className="flex items-baseline gap-6 border-b border-line py-2">
          <span className="w-28 text-label-md text-muted font-mono shrink-0">{s.label}</span>
          <span className={`${s.cls} text-primary flex-1`}>{s.specimen}</span>
          <span className="text-caption text-muted shrink-0">{s.specs}</span>
        </div>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-body-sm font-semibold text-secondary mb-4">Font Weights</p>
      {WEIGHTS.map((w) => (
        <div key={w.label} className="flex items-center gap-6">
          <span className="w-24 text-label-md text-muted font-mono shrink-0">{w.label}</span>
          <span className={`text-heading-md ${w.cls} text-primary`}>{w.specimen}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Typography page (77:7) ──────────
// 16 specimen text cells (12 Type Scale + 4 Font Weights). Each cell pins the
// specimen text container at Figma's exact (x=280, y=specimenY, w=400, h=specimenH).
// Style labels (x=80) + specs labels (x=680) + section headers + page header
// render at Figma's text coordinates.

interface TypoCell extends MatrixCellSpec {
  kind: 'type' | 'weight';
  cls: string;
  text: string;
}

const SPECIMEN_X = 280;
const SPECIMEN_W = 400;

const TYPO_CELLS: TypoCell[] = [
  ...TYPE_SCALE.map((r) => ({
    variant: `Type/${r.label}`,
    kind: 'type' as const,
    cls: r.cls,
    text: r.specimen,
    x: SPECIMEN_X, y: r.specimenY, w: SPECIMEN_W, h: r.specimenH,
    expect: { headings: [] },
  })),
  ...WEIGHTS.map((w) => ({
    variant: `Weight/${w.label}`,
    kind: 'weight' as const,
    cls: `text-heading-md ${w.cls}`,
    text: w.specimen,
    x: SPECIMEN_X, y: w.specimenY, w: SPECIMEN_W, h: 19,
    expect: { headings: [] },
  })),
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:7', cells: TYPO_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1000, height: 1080 }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 80, top: 80 }}>
        <h1 className="text-display-lg font-bold text-primary">Typography</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 122 }}>
        <p className="text-body-md text-secondary">SF Pro typeface · 12 text styles · Linked via Figma Text Styles</p>
      </div>

      {/* Column headers + divider */}
      <div className="absolute" style={{ left: 80, top: 170 }}>
        <span className="text-caption font-semibold text-muted tracking-wider">STYLE</span>
      </div>
      <div className="absolute" style={{ left: 280, top: 170 }}>
        <span className="text-caption font-semibold text-muted tracking-wider">SPECIMEN</span>
      </div>
      <div className="absolute" style={{ left: 680, top: 170 }}>
        <span className="text-caption font-semibold text-muted tracking-wider">SPECS</span>
      </div>
      <div className="absolute bg-line" style={{ left: 80, top: 188, width: 900, height: 1 }} />

      {/* Type Scale rows */}
      {TYPE_SCALE.map((r) => (
        <div key={r.label}>
          <div className="absolute" style={{ left: 80, top: r.rowY }}>
            <span className="text-caption text-primary font-mono">{r.label}</span>
          </div>
          {/* Specimen cell — pixel-pinned */}
          <div
            className="absolute"
            data-matrix-cell
            style={{ left: SPECIMEN_X, top: r.specimenY, width: SPECIMEN_W, height: r.specimenH }}
          >
            <span className={`${r.cls} text-primary`}>{r.specimen}</span>
          </div>
          <div className="absolute" style={{ left: 680, top: r.rowY }}>
            <span className="text-caption text-muted">{r.specs}</span>
          </div>
        </div>
      ))}

      {/* Section divider after Code row */}
      <div className="absolute bg-line" style={{ left: 80, top: 796, width: 900, height: 1 }} />

      {/* Font Weights section header */}
      <div className="absolute" style={{ left: 80, top: 832 }}>
        <h2 className="text-heading-lg font-semibold text-primary">Font Weights</h2>
      </div>

      {/* Weight rows */}
      {WEIGHTS.map((w) => (
        <div key={w.label}>
          <div className="absolute" style={{ left: 80, top: w.rowY }}>
            <span className="text-caption text-primary font-mono">{w.label}</span>
          </div>
          <div
            className="absolute"
            data-matrix-cell
            style={{ left: SPECIMEN_X, top: w.specimenY, width: SPECIMEN_W, height: 19 }}
          >
            <span className={`text-heading-md ${w.cls} text-primary`}>{w.specimen}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
