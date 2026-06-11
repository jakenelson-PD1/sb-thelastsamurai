import { clsx } from 'clsx';
import { CalendarIcon } from '../primitives/icons/CalendarIcon';

export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function DatePicker({ label, value, onChange, error, disabled, className }: DatePickerProps) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <label className="text-body-md font-medium text-secondary">{label}</label>
      )}
      <div className="relative">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className={clsx(
            'h-10 w-full rounded-card border border-line-strong bg-elevated pl-3 pr-10 text-body-md text-primary',
            'focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20',
            error && 'border-status-error focus:border-status-error focus:ring-status-error/20',
            'disabled:opacity-50 disabled:pointer-events-none',
            // Hide the browser's native calendar / clear indicators so the
            // canonical CalendarIcon overlay is the only affordance.
            '[&::-webkit-calendar-picker-indicator]:absolute',
            '[&::-webkit-calendar-picker-indicator]:inset-0',
            '[&::-webkit-calendar-picker-indicator]:h-full',
            '[&::-webkit-calendar-picker-indicator]:w-full',
            '[&::-webkit-calendar-picker-indicator]:cursor-pointer',
            '[&::-webkit-calendar-picker-indicator]:opacity-0',
            '[&::-webkit-clear-button]:hidden',
            '[&::-webkit-inner-spin-button]:hidden',
          )}
        />
        <CalendarIcon
          size="md"
          className={clsx(
            'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted',
            disabled && 'opacity-50',
          )}
        />
      </div>
      {error && <p className="text-label-md text-status-error-fg">{error}</p>}
    </div>
  );
}
