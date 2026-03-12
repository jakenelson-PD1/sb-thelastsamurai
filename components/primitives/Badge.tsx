import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default:  'bg-surface text-fg-secondary',
        brand:    'bg-status-info-surface text-status-info-fg',
        success:  'bg-status-success-surface text-status-success-fg',
        warning:  'bg-status-warning-surface text-status-warning-fg',
        danger:   'bg-status-error-surface text-status-error-fg',
        outlined: 'border border-line-strong bg-transparent text-fg-secondary',
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
        <span className="-ml-1 mr-1.5 inline-flex">{avatar}</span>
      )}
      {children}
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="ml-1 -mr-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-fg-primary/10 focus:outline-none"
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </span>
  );
}
