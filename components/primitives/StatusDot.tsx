import { clsx } from 'clsx';

export type StatusDotVariant =
  | 'unread'
  | 'attention'
  | 'success'
  | 'error'
  | 'warning'
  | 'cerulean'
  | 'purple'
  | 'pink'
  | 'eggplant'
  | 'brand';

/**
 * StatusDot — canonical 8×8 colored dot. Mirrors the Figma `StatusDot`
 * ComponentSet (1521:5).
 *
 * After the indicator/ → status/ consolidation pass, every dot color is
 * sourced from `action/primary` (brand-blue) or a `status/*` flat -500
 * accent. The StatusDot variant names are kept as a stable public API; they
 * just map to the canonical underlying tokens.
 *
 * Positioning + halo ring are left to the consumer via `className`
 * (e.g. an overlapping indicator wants `absolute -top-1 -right-1 ring-2 ring-elevated`).
 */
const DOT_COLOR: Record<StatusDotVariant, string> = {
  unread:    'bg-action-primary',
  brand:     'bg-action-primary',
  attention: 'bg-status-attention',
  success:   'bg-status-success',
  error:     'bg-status-error',
  warning:   'bg-status-warning',
  cerulean:  'bg-status-cerulean',
  purple:    'bg-status-purple',
  pink:      'bg-status-pink',
  eggplant:  'bg-status-eggplant',
};

export interface StatusDotProps {
  variant: StatusDotVariant;
  className?: string;
}

export function StatusDot({ variant, className }: StatusDotProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx('inline-block h-2 w-2 rounded-pill', DOT_COLOR[variant], className)}
    />
  );
}
