import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:pointer-events-none disabled:opacity-50',
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
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={clsx(buttonVariants({ variant, size }), className)} {...props} />;
}
