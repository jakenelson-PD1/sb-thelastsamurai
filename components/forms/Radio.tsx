import { clsx } from 'clsx';

export interface RadioOption { label: string; value: string; }
export interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function Radio({ name, options, value, onChange, disabled, className }: RadioProps) {
  return (
    <fieldset className={clsx('flex flex-col gap-2', className)}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={clsx(
            'inline-flex cursor-pointer items-center gap-2',
            disabled && 'cursor-not-allowed opacity-50',
          )}
        >
          <span className="relative inline-flex h-4 w-4 flex-shrink-0">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              disabled={disabled}
              onChange={() => onChange?.(opt.value)}
              className={clsx(
                'peer h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-line-strong bg-elevated transition-colors',
                'checked:border-action-primary',
                'focus-visible:ring-2 focus-visible:ring-line-focus focus-visible:ring-offset-1',
                'disabled:cursor-not-allowed',
              )}
            />
            {/* Inner dot — visible when checked */}
            <span
              className="pointer-events-none absolute inset-0 m-auto h-2 w-2 rounded-full bg-action-primary opacity-0 transition-opacity peer-checked:opacity-100"
              aria-hidden="true"
            />
          </span>
          <span className="text-body-md text-secondary">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
