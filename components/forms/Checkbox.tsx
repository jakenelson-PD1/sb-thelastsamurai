import { clsx } from 'clsx';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const checkId = id ?? `cb-${Math.random().toString(36).slice(2)}`;
  return (
    <label htmlFor={checkId} className="inline-flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        id={checkId}
        className={clsx(
          'h-4 w-4 rounded border-neutral-300 text-brand-500 focus:ring-brand-500/20',
          className,
        )}
        {...props}
      />
      {label && <span className="text-sm text-neutral-700">{label}</span>}
    </label>
  );
}
