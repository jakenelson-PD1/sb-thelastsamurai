import { clsx } from 'clsx';

export interface RadioOption { label: string; value: string; }
export interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Radio({ name, options, value, onChange, className }: RadioProps) {
  return (
    <fieldset className={clsx('flex flex-col gap-2', className)}>
      {options.map((opt) => (
        <label key={opt.value} className="inline-flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
            className="h-4 w-4 border-line-strong text-action-primary focus:ring-line-focus/20"
          />
          <span className="text-sm text-fg-secondary">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
