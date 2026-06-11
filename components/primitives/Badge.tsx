import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-control px-2 py-[2px] text-label-md font-medium', // py: 2px hardcoded — too small for spacing scale, intentional badge-only exception
  {
    variants: {
      variant: {
        default:  'bg-surface text-secondary',
        brand:    'bg-row-selected text-status-info-fg',
        success:  'bg-status-success-surface text-status-success-fg',
        warning:  'bg-status-warning-surface text-status-warning-fg',
        danger:   'bg-status-error-surface text-status-error-fg',
        outlined: 'border border-line-strong bg-transparent text-secondary',
        cerulean: 'bg-status-cerulean-surface text-status-cerulean-fg',
        purple:   'bg-status-purple-surface text-status-purple-fg',
        pink:     'bg-status-pink-surface text-status-pink-fg',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  onDelete?: () => void;
  avatar?: React.ReactNode;
}

export function Badge({ variant, onDelete, avatar, className, children, ...props }: BadgeProps) {
  return (
    <span className={clsx(badgeVariants({ variant }), className)} {...props}>
      {avatar && (
        <span className="-ml-1 mr-2 inline-flex">{avatar}</span>
      )}
      {children}
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="ml-1 -mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-primary/10 focus:outline-none"
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </span>
  );
}
