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
      {label && <label className="text-sm font-medium text-neutral-700">{label}</label>}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          'h-10 w-full rounded border border-neutral-300 bg-white px-3 text-sm text-neutral-900',
          'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
          error && 'border-error-500',
        )}
      />
      {error && <p className="text-xs text-error-500">{error}</p>}
    </div>
  );
}
