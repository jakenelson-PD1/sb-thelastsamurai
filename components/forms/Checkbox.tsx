import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';

const sizeMap = {
  sm: { box: 'h-4 w-4', icon: 'h-3 w-3', label: 'text-body-md' },
  lg: { box: 'h-5 w-5', icon: 'h-4 w-4', label: 'text-heading-sm' },
};

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'lg';
  /**
   * Indeterminate (mixed) state — e.g. a "select all" that's partially
   * selected. Set via the input's DOM property since it's not a standard
   * HTML attribute. Renders the dash glyph instead of the check.
   */
  indeterminate?: boolean;
  /**
   * Matrix-story-only: forces the `:hover` visual to render at rest. Mirrors
   * the Button pattern so a pixel-pinned Matrix story can show every Figma
   * `State=Hover` variant alongside Default / Focus / Disabled. Resolves to
   * the same border + bg the `hover:*` classes apply (per Checked state).
   */
  forceHover?: boolean;
  /**
   * Matrix-story-only: forces the `:focus-visible` visual to render at rest.
   * Same purpose as `forceHover` — lets Matrix stories show the canonical
   * Figma `State=Focus` variant without keyboard interaction.
   */
  forceFocus?: boolean;
}

export function Checkbox({ label, className, id, disabled, size = 'sm', indeterminate = false, checked, forceHover, forceFocus, ...props }: CheckboxProps) {
  const checkId = id ?? `cb-${Math.random().toString(36).slice(2)}`;
  const { box, icon, label: labelSize } = sizeMap[size];
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return (
    <label
      htmlFor={checkId}
      className={clsx(
        'inline-flex cursor-pointer items-center gap-2',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <span className={clsx('relative inline-flex flex-shrink-0', box)}>
        <input
          ref={inputRef}
          type="checkbox"
          id={checkId}
          disabled={disabled}
          checked={checked}
          className={clsx(
            'peer cursor-pointer appearance-none rounded-control border border-line-strong bg-elevated transition-colors',
            box,
            'hover:border-muted hover:bg-surface',
            'checked:border-action-primary checked:bg-action-primary',
            'checked:hover:border-action-primary-hover checked:hover:bg-action-primary-hover',
            'indeterminate:border-action-primary indeterminate:bg-action-primary',
            'indeterminate:hover:border-action-primary-hover indeterminate:hover:bg-action-primary-hover',
            'focus-visible:ring-2 focus-visible:ring-line-focus focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed',
            // Matrix-only force-state overrides — match the equivalent pseudo-class styles
            forceHover && !(checked || indeterminate) && '!border-muted !bg-surface',
            forceHover && (checked || indeterminate) && '!border-action-primary-hover !bg-action-primary-hover',
            forceFocus && 'ring-2 ring-line-focus ring-offset-1',
          )}
          {...props}
        />
        {/* Checkmark — visible when checked */}
        <svg
          viewBox="0 0 12 12"
          fill="none"
          className={clsx('pointer-events-none absolute inset-0 m-auto opacity-0 transition-opacity peer-checked:opacity-100', icon)}
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
          className={clsx('pointer-events-none absolute inset-0 m-auto opacity-0 transition-opacity peer-indeterminate:opacity-100', icon)}
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
      {label && <span className={clsx(labelSize, 'text-secondary')}>{label}</span>}
    </label>
  );
}
