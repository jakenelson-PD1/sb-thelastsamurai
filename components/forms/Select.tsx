import { clsx } from 'clsx';

export interface SelectOption { label: string; value: string; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-fg-secondary">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={clsx(
          'h-10 w-full rounded-lg border border-line-strong bg-elevated px-3 text-sm text-fg-primary',
          'focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20',
          'disabled:cursor-not-allowed disabled:bg-canvas disabled:text-fg-muted',
          error && 'border-status-error focus:border-status-error focus:ring-status-error/20',
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-status-error-fg">{error}</p>}
    </div>
  );
}
