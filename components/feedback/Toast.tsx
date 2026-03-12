import { clsx } from 'clsx';

export interface ToastProps {
  message: string;
  description?: string;
  variant?: 'default' | 'success' | 'error';
  className?: string;
}

const variantMap = {
  default: 'bg-fg-primary text-canvas',
  success: 'bg-status-success text-fg-on-accent',
  error:   'bg-status-error text-fg-on-accent',
} as const;

export function Toast({ message, description, variant = 'default', className }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'flex flex-col gap-1 rounded-lg px-4 py-3 shadow-modal text-sm max-w-sm',
        variantMap[variant],
        className,
      )}
    >
      <p className="font-medium">{message}</p>
      {description && <p className="opacity-80">{description}</p>}
    </div>
  );
}
