import { clsx } from 'clsx';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className, id, disabled, ...props }: CheckboxProps) {
  const checkId = id ?? `cb-${Math.random().toString(36).slice(2)}`;
  return (
    <label
      htmlFor={checkId}
      className={clsx(
        'inline-flex cursor-pointer items-center gap-2',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <span className="relative inline-flex h-4 w-4 flex-shrink-0">
        <input
          type="checkbox"
          id={checkId}
          disabled={disabled}
          className={clsx(
            'peer h-4 w-4 cursor-pointer appearance-none rounded border border-line-strong bg-elevated transition-colors',
            'checked:border-action-primary checked:bg-action-primary',
            'indeterminate:border-action-primary indeterminate:bg-action-primary',
            'focus-visible:ring-2 focus-visible:ring-line-focus focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed',
          )}
          {...props}
        />
        {/* Checkmark — visible when checked */}
        <svg
          viewBox="0 0 12 12"
          fill="none"
          className="pointer-events-none absolute inset-0 m-auto h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100"
          aria-hidden="true"
        >
          <path
            d="M2 6l3 3 5-5"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Indeterminate dash */}
        <svg
          viewBox="0 0 12 12"
          fill="none"
          className="pointer-events-none absolute inset-0 m-auto h-3 w-3 opacity-0 transition-opacity peer-indeterminate:opacity-100"
          aria-hidden="true"
        >
          <path
            d="M2.5 6h7"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {label && <span className="text-sm text-fg-secondary">{label}</span>}
    </label>
  );
}
