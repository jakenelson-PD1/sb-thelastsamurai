import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-control font-normal whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:   'bg-action-primary text-on-accent hover:bg-action-primary-hover',
        secondary: 'bg-transparent text-primary hover:bg-recessed border border-line',
        ghost:     'hover:bg-hover-overlay text-secondary',
        danger:    'bg-action-danger text-on-accent hover:bg-action-danger-hover',
        link:      'bg-transparent text-link underline !gap-1 !p-1 !h-auto',
      },
      size: {
        xxs: 'h-6 px-2 text-label-md !gap-1',
        xs:  'h-7 px-3 text-body-md',
        sm:  'h-8 px-3 text-body-md',
        md:  'h-9 px-4 text-body-md',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;

const iconOnlySizeMap: Record<ButtonSize, string> = {
  // All iconOnly sizes use rounded-pill (fully round, radius/pill token).
  xxs: 'h-6 w-6 p-0 !rounded-pill',
  xs:  'h-7 w-7 p-0 !rounded-pill',
  sm:  'h-8 w-8 p-0 !rounded-pill',
  md:  'h-9 w-9 p-0 !rounded-pill',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconOnly?: boolean;
  /**
   * Render a sticky "selected" / pressed affordance — used for toggleable
   * controls whose pressed state needs to persist while a popover/picker
   * is open (e.g. the `@` mention button in CommentComposer, a formatting
   * toggle in a toolbar). Adds `aria-pressed` automatically so screen
   * readers announce the toggle correctly.
   *
   * Visual recipe (canonical LSDS pattern, ghost + iconOnly):
   *   • Fill   = `bg-pressed`           (mid-gray, neutral-300 light)
   *   • Stroke = `action-primary` 1px   (ring-inset — sits inside element box)
   *   • Halo   = `line-focus` 2px       (ring-2 outward, mirrors Figma's
   *                                     DROP_SHADOW spread=2 radius=0 effect
   *                                     on the Ghost iconOnly Focus variant)
   *   • Glyph  = unchanged              (stays the default ghost foreground)
   * Other variants get just the stroke + halo since they already carry
   * their own fill.
   */
  selected?: boolean;
  /**
   * Matrix-story-only: forces the `:hover` visual to render at rest. Mirrors
   * the pattern other LSDS primitives use (NavItem) so a pixel-pinned Matrix
   * story can show every Figma `State=Hover` variant alongside Default and
   * Disabled. Maps the `hover:*` Tailwind utilities to their non-`hover:`
   * equivalents and forces them at the default state.
   */
  forceHover?: boolean;
  /**
   * Matrix-story-only: forces the `:focus-visible` visual to render at rest.
   * Same purpose as `forceHover` — lets Matrix stories show the canonical
   * Figma `State=Focus` variant without keyboard interaction.
   */
  forceFocus?: boolean;
}

// Per-variant hover/focus class maps — what Tailwind's `hover:*` and
// `focus-visible:*` utilities resolve to. Used by `forceHover` / `forceFocus`
// (Matrix-story only) to apply those visuals at rest.
const FORCE_HOVER_CLASS_MAP: Partial<Record<NonNullable<VariantProps<typeof buttonVariants>['variant']>, string>> = {
  primary:   'bg-action-primary-hover',
  secondary: 'bg-recessed',
  ghost:     'bg-hover-overlay',
  danger:    'bg-action-danger-hover',
  link:      '',  // link has no hover bg override
};
const FORCE_FOCUS_CLASS = 'ring-2 ring-line-focus';

// Selected-state class recipe — mirrors the Figma Ghost iconOnly Focus
// variant verbatim (the canonical visual for the toggle/pressed pattern):
//
//   Button edge ─┬─ ring-1 inset action-primary  (1px sitting INSIDE the
//                │                                element box, doesn't push
//                │                                content — same geometry as
//                │                                Figma's strokeAlign=INSIDE)
//                └─ outline-2  line-focus        (2px outward halo, mirrors
//                                                 Figma's DROP_SHADOW with
//                                                 spread=2, radius=0)
//
// Fill is scoped to ghost (`!bg-pressed`) — primary/secondary/danger already
// carry their own fills and only need the stroke + halo for the state signal.
// Glyph color is intentionally left alone so semantic icon tints (status
// colors, brand accents) survive the pressed state.
const SELECTED_RINGS_BLUE =
  'ring-1 ring-inset ring-action-primary outline outline-2 outline-line-focus';
const SELECTED_CLASS_MAP: Partial<Record<NonNullable<VariantProps<typeof buttonVariants>['variant']>, string>> = {
  ghost:     `!bg-pressed ${SELECTED_RINGS_BLUE}`,
  secondary: SELECTED_RINGS_BLUE,
  primary:   SELECTED_RINGS_BLUE,
  danger:    'ring-1 ring-inset ring-status-error outline outline-2 outline-status-error',
};

export function Button({
  variant,
  size,
  iconOnly,
  selected,
  forceHover,
  forceFocus,
  startIcon,
  endIcon,
  type,
  className,
  children,
  ...props
}: ButtonProps) {
  const selectedClass = selected ? SELECTED_CLASS_MAP[variant ?? 'primary'] : undefined;
  const forceHoverClass = forceHover ? FORCE_HOVER_CLASS_MAP[variant ?? 'primary'] : undefined;
  const forceFocusClass = forceFocus ? FORCE_FOCUS_CLASS : undefined;
  return (
    <button
      // Default to type="button" so this primitive doesn't accidentally
      // submit a parent form. Consumers can override to "submit"/"reset".
      type={type ?? 'button'}
      aria-pressed={selected ? true : undefined}
      className={clsx(
        buttonVariants({ variant, size }),
        iconOnly && iconOnlySizeMap[size ?? 'md'],
        selectedClass,
        forceHoverClass,
        forceFocusClass,
        className,
      )}
      {...props}
    >
      {startIcon && <span className="inline-flex">{startIcon}</span>}
      {children}
      {endIcon && <span className="inline-flex">{endIcon}</span>}
    </button>
  );
}
