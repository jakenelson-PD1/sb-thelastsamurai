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
        <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'h-10 w-full rounded border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400',
          'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
          'disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400',
          error && 'border-error-500 focus:ring-error-500/20',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-error-500">{error}</p>}
    </div>
  );
}
