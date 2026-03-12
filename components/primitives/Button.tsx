import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:   'bg-action-primary text-fg-on-accent hover:bg-action-primary-hover',
        secondary: 'bg-surface text-fg-primary hover:bg-elevated border border-line',
        ghost:     'hover:bg-surface text-fg-secondary',
        danger:    'bg-status-error text-fg-on-accent hover:bg-status-error-hover',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-9 px-4 text-sm',
        lg: 'h-11 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;

const iconOnlySizeMap: Record<ButtonSize, string> = {
  sm: 'h-8 w-8 p-0',
  md: 'h-9 w-9 p-0',
  lg: 'h-11 w-11 p-0',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconOnly?: boolean;
}

export function Button({
  variant,
  size,
  iconOnly,
  startIcon,
  endIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonVariants({ variant, size }),
        iconOnly && iconOnlySizeMap[size ?? 'md'],
        className,
      )}
      {...props}
    >
      {startIcon && (
        <span className={clsx('inline-flex', children && !iconOnly && 'mr-1.5')}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={clsx('inline-flex', children && !iconOnly && 'ml-1.5')}>
          {endIcon}
        </span>
      )}
    </button>
  );
}
