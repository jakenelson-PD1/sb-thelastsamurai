import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-fg-secondary">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'h-10 w-full rounded border border-line-strong bg-elevated px-3 text-sm text-fg-primary placeholder:text-fg-muted',
          'focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20',
          'disabled:cursor-not-allowed disabled:bg-canvas disabled:text-fg-muted',
          error && 'border-status-error focus:ring-status-error/20',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-status-error">{error}</p>}
    </div>
  );
}
