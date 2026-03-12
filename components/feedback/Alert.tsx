import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva('rounded-lg border p-4 text-sm', {
  variants: {
    variant: {
      info:    'border-status-info-border    bg-status-info-surface    text-status-info-fg',
      success: 'border-status-success-border bg-status-success-surface text-status-success-fg',
      warning: 'border-status-warning-border bg-status-warning-surface text-status-warning-fg',
      danger:  'border-status-error-border   bg-status-error-surface   text-status-error-fg',
    },
  },
  defaultVariants: { variant: 'info' },
});

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

const iconBgMap: Record<AlertVariant, string> = {
  info:    'bg-status-info-surface text-status-info-fg',
  success: 'bg-status-success-surface text-status-success-fg',
  warning: 'bg-status-warning-surface text-status-warning-fg',
  danger:  'bg-status-error-surface text-status-error-fg',
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
  action?: { label: string; onClick: () => void };
}

export function Alert({ variant, title, icon, action, children, className, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={clsx(alertVariants({ variant }), 'flex items-start gap-3', className)}
      {...props}
    >
      {icon && (
        <span
          className={clsx(
            'h-8 w-8 flex-shrink-0 rounded-full flex items-center justify-center',
            iconBgMap[variant ?? 'info'],
          )}
        >
          {icon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        {title && <p className="font-medium">{title}</p>}
        {children && <p className={title ? 'mt-1 opacity-80' : ''}>{children}</p>}
      </div>
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="ml-auto flex-shrink-0 text-sm font-medium text-fg-link hover:underline"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
