// Shared size machinery for every icon in this directory.
//
// Discrete tiers mirror the Figma `Size = Small | Medium | Large` axis on the
// Icons page (Rule 2 in CLAUDE.md): Small=16px, Medium=20px, Large=24px.
//
// The `number` escape hatch exists for off-grid call sites (e.g. tiny chevrons
// inside chips). New code should prefer the enum.

export type IconSize = 'sm' | 'md' | 'lg';

export const ICON_SIZE_PX: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

export type IconSizeProp = IconSize | number;

export function resolveIconSize(size: IconSizeProp): number {
  return typeof size === 'number' ? size : ICON_SIZE_PX[size];
}
