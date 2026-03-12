import { clsx } from 'clsx';

export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

export function DatePicker({ label, value, onChange, error, className }: DatePickerProps) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <label className="text-sm font-medium text-fg-secondary">{label}</label>
      )}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          'h-10 w-full rounded-lg border border-line-strong bg-elevated px-3 text-sm text-fg-primary',
          'focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20',
          error && 'border-status-error focus:border-status-error focus:ring-status-error/20',
        )}
      />
      {error && <p className="text-xs text-status-error-fg">{error}</p>}
    </div>
  );
}
