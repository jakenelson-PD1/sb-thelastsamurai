import type { Meta } from '@storybook/react';
import { colors } from '../../tokens/colors';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta = {
  title: 'Foundation/Colors',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

const COLOR_FAMILIES = [
  { name: 'Brand',    swatches: colors.brand     },
  { name: 'Neutral',  swatches: colors.neutral   },
  { name: 'Cerulean', swatches: colors.cerulean  },
  { name: 'Green',    swatches: colors.green     },
  { name: 'Yellow',   swatches: colors.yellow    },
  { name: 'Orange',   swatches: colors.orange    },
  { name: 'Red',      swatches: colors.red       },
  { name: 'Pink',     swatches: colors.pink      },
  { name: 'Eggplant', swatches: colors.eggplant  },
  { name: 'Purple',   swatches: colors.purple    },
];

function ColorRow({ name, swatches }: { name: string; swatches: Record<number, string> }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm font-semibold text-secondary">{name}</p>  // token-lint-skip: showcase typography for swatch labels
      <div className="flex gap-1">
        {Object.entries(swatches).map(([shade, hex]) => (
          <div key={shade} className="flex flex-col items-center gap-1">
            <div
              className="h-10 w-10 rounded"
              style={{ backgroundColor: hex }}
              title={hex}
            />
            <span className="text-[10px] text-muted">{shade}</span>  // token-lint-skip: showcase typography for swatch labels
          </div>
        ))}
      </div>
    </div>
  );
}

export const Palette = {
  render: () => (
    <div className="p-4 bg-canvas">
      {COLOR_FAMILIES.map(({ name, swatches }) => (
        <ColorRow key={name} name={name} swatches={swatches as Record<number, string>} />
      ))}
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Colors page (77:2) ───────────────
// 110 swatches (10 families × 11 shades) at Figma's exact grid:
//   X by family: Brand=80, Neutral=188, Green=296, Yellow=404, Red=512,
//                Eggplant=620, Purple=728, Orange=836, Pink=944, Cerulean=1052
//                (stride 108 between families; family columns laid out per Figma — not alphabetical)
//   Y by shade index: 50=200, 100=252, ..., 950=720 (stride 52)
//   Each swatch is 96×52, fill = source colors[family][shade] hex.

type FamilyName = 'Brand'|'Neutral'|'Green'|'Yellow'|'Red'|'Eggplant'|'Purple'|'Orange'|'Pink'|'Cerulean';
const FAMILY_X: Record<FamilyName, number> = {
  Brand: 80, Neutral: 188, Green: 296, Yellow: 404, Red: 512,
  Eggplant: 620, Purple: 728, Orange: 836, Pink: 944, Cerulean: 1052,
};
const FAMILY_TOKEN: Record<FamilyName, Record<number, string>> = {
  Brand: colors.brand,
  Neutral: colors.neutral,
  Green: colors.green,
  Yellow: colors.yellow,
  Red: colors.red,
  Eggplant: colors.eggplant,
  Purple: colors.purple,
  Orange: colors.orange,
  Pink: colors.pink,
  Cerulean: colors.cerulean,
};
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

interface SwatchCell extends MatrixCellSpec {
  family: FamilyName;
  shade: number;
  hex: string;
}

const SWATCH_CELLS: SwatchCell[] = (Object.keys(FAMILY_X) as FamilyName[]).flatMap((family) =>
  SHADES.map((shade, i) => ({
    variant: `${family}/${shade}`,
    family, shade,
    hex: FAMILY_TOKEN[family][shade],
    x: FAMILY_X[family],
    y: 200 + i * 52,
    w: 96, h: 52,
    expect: { headings: [] },
  })),
);

export const Matrix = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:2', cells: SWATCH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story: () => JSX.Element) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1148, height: 780 }}>
      {SWATCH_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h, backgroundColor: c.hex }}
          title={`${c.family}/${c.shade} ${c.hex}`}
        />
      ))}
    </div>
  ),
};

