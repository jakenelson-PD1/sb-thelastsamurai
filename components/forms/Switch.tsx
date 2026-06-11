import { clsx } from 'clsx';

export type SwitchSize = 'sm' | 'md';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  /** `md` (default) = 24×44 track / 20×20 thumb; `sm` = 16×28 track / 12×12 thumb. */
  size?: SwitchSize;
  className?: string;
}

// Track + thumb sizing per Size variant. Translate offset = trackWidth - thumbWidth - 4
// (2px padding on each side) so the thumb sits flush against the right edge when checked.
const TRACK: Record<SwitchSize, string> = {
  md: 'h-6 w-11', // 24×44
  sm: 'h-5 w-9',  // 20×36
};
const THUMB: Record<SwitchSize, string> = {
  md: 'h-5 w-5 translate-x-0', // 20×20
  sm: 'h-4 w-4 translate-x-0', // 16×16
};
const THUMB_ON: Record<SwitchSize, string> = {
  md: 'translate-x-5', // 44 - 20 - 4 = 20px
  sm: 'translate-x-4', // 36 - 16 - 4 = 16px
};

export function Switch({ checked, onChange, label, disabled, size = 'md', className }: SwitchProps) {
  return (
    <label
      className={clsx(
        'inline-flex cursor-pointer items-center gap-2',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <button
        role="switch"
        type="button"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={clsx(
          'relative rounded-pill transition-colors focus:outline-none focus:ring-2 focus:ring-line-focus/30',
          TRACK[size],
          checked ? 'bg-action-primary' : 'bg-line-strong',
        )}
      >
        <span
          className={clsx(
            'absolute top-0.5 left-0.5 rounded-pill bg-elevated shadow transition-transform',
            THUMB[size],
            checked && THUMB_ON[size],
          )}
        />
      </button>
      {label && <span className="text-body-sm text-secondary">{label}</span>}
    </label>
  );
}
