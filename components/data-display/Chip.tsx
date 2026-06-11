import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Chip — a compact pill control for displaying a label with optional icons on
 * either side. Mirrors the `Chip` ComponentSet in Figma
 * (Size × Interaction × Actions × Icon × State).
 *
 * The X-to-remove pattern is just `iconRight={<XCloseIcon onClick={...} />}` —
 * it isn't a special prop. Pass any icon you want in either slot.
 */

const chipVariants = cva(
  'inline-flex items-center gap-1.5 rounded-pill border bg-surface text-primary transition-colors whitespace-nowrap select-none',
  {
    variants: {
      size: {
        sm: 'h-6 px-2 text-label-md',
        md: 'h-7 px-3 text-label-md',
      },
      selected: {
        none:   'border-line-strong',
        single: 'border-status-info-border !bg-row-selected !text-status-info-fg',
        multi:  'border-status-info-border !bg-row-selected !text-status-info-fg',
      },
      error: {
        true:  'border-status-error text-status-error',
        false: '',
      },
      disabled: {
        true:  'cursor-not-allowed opacity-50 pointer-events-none',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      { selected: 'none', error: false, disabled: false, className: 'hover:bg-recessed' },
    ],
    defaultVariants: {
      size: 'md',
      selected: 'none',
      error: false,
      disabled: false,
    },
  },
);

type ChipVariantProps = VariantProps<typeof chipVariants>;

export interface ChipProps extends Omit<ChipVariantProps, 'disabled'> {
  /** Visible label text. Omit (or pass empty) for icon-only chips. */
  label?: string;
  /** Optional leading icon */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon (e.g. an X-close button for removable chips) */
  iconRight?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Chip({
  label,
  iconLeft,
  iconRight,
  size = 'md',
  selected = 'none',
  error = false,
  disabled = false,
  onClick,
  className,
}: ChipProps) {
  const hasLabel = label !== undefined && label !== '';
  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onClick={() => !disabled && onClick?.()}
      onKeyDown={(e) => {
        if (!onClick || disabled) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={selected !== 'none' ? true : undefined}
      aria-disabled={disabled}
      aria-invalid={error || undefined}
      className={clsx(
        chipVariants({ size, selected, error, disabled }),
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
        className,
      )}
    >
      {iconLeft && <span className="inline-flex shrink-0 items-center">{iconLeft}</span>}
      {hasLabel && <span className="truncate">{label}</span>}
      {iconRight && <span className="inline-flex shrink-0 items-center">{iconRight}</span>}
    </span>
  );
}
