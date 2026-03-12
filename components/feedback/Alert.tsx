import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva('flex items-start gap-3 rounded-card border p-4 text-sm', {
  variants: {
    variant: {
      info:    'border-brand-200   bg-brand-50   text-brand-800',
      success: 'border-green-200   bg-green-50   text-green-800',
      warning: 'border-yellow-200  bg-yellow-50  text-yellow-800',
      danger:  'border-red-200     bg-red-50     text-red-800',
    },
  },
  defaultVariants: { variant: 'info' },
});

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
}

export function Alert({ variant, title, children, className, ...props }: AlertProps) {
  return (
    <div role="alert" className={clsx(alertVariants({ variant }), className)} {...props}>
      <div>
        {title && <p className="font-medium">{title}</p>}
        {children && <p className={title ? 'mt-1 opacity-80' : ''}>{children}</p>}
      </div>
    </div>
  );
}
