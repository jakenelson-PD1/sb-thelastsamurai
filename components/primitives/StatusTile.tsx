import { clsx } from 'clsx';

export type StatusTileVariant = 'not-started' | 'outstanding' | 'fulfilled' | 'overdue';

export interface StatusTileProps {
  variant: StatusTileVariant;
  /** Optional accessible label, e.g. `"Outstanding · 4 items"` */
  label?: string;
  className?: string;
}

/**
 * StatusTile — a 10×10 squircle that visualises a request's status colour.
 * Mirrors the Figma `StatusTile` canonical (1552:7). Used in dense status
 * indicators (e.g. row prefixes, color-nav tiles, density legends).
 *
 * For interactive status pickers (with hover / focus / selected states), use
 * `FilterSwatch` instead — this primitive is intentionally non-interactive.
 */
const VARIANT_BG: Record<StatusTileVariant, string> = {
  'not-started': 'bg-swatch-not-started',
  'outstanding': 'bg-swatch-outstanding',
  'fulfilled':   'bg-swatch-fulfilled',
  'overdue':     'bg-swatch-overdue',
};

export function StatusTile({ variant, label, className }: StatusTileProps) {
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={clsx(
        'inline-block h-2.5 w-2.5 shrink-0 rounded-control',
        VARIANT_BG[variant],
        className,
      )}
    />
  );
}
