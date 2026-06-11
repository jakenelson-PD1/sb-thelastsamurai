import { clsx } from 'clsx';

type InputSize = 'xs' | 'sm' | 'md';

const inputSizeClass: Record<InputSize, string> = {
  xs: 'h-7',
  sm: 'h-8',
  md: 'h-9',
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /**
   * Where the label sits relative to the input.
   * - `top` (default): stacked above the input.
   * - `left`: inline to the left of the input.
   * - `right`: inline to the right of the input.
   * - `none`: no label is rendered (equivalent to omitting `label`).
   * Omit `label` to render no label.
   */
  labelPosition?: 'top' | 'left' | 'right' | 'none';
  error?: string;
  size?: InputSize;
}

export function Input({
  label,
  labelPosition = 'top',
  error,
  size = 'md',
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  // `labelPosition='none'` forces the label off even when `label` is provided —
  // mirrors the Figma `LabelPosition=none` variant for surface parity.
  const showLabel = labelPosition !== 'none' && !!label;
  const isInline = showLabel && (labelPosition === 'left' || labelPosition === 'right');

  const labelEl = showLabel ? (
    // Type Scale: Body MD Regular + `primary`. Matches Dropdown's label style.
    // (Body MD has no "Medium" Type Scale variant — Regular and Strong only.)
    <label htmlFor={inputId} className="whitespace-nowrap text-body-md text-primary">
      {label}
    </label>
  ) : null;

  const inputEl = (
    <input
      id={inputId}
      className={clsx(
        inputSizeClass[size],
        'w-full rounded-control border border-line-strong bg-elevated px-3 text-body-md text-primary placeholder:text-muted transition-colors',
        'hover:bg-surface',
        'focus:border-line-focus focus:bg-elevated focus:outline-none focus:ring-2 focus:ring-line-focus/20',
        'disabled:cursor-not-allowed disabled:bg-canvas disabled:text-muted disabled:hover:bg-canvas',
        error && 'border-status-error focus:border-status-error focus:ring-status-error/20',
        className,
      )}
      {...props}
    />
  );

  // Inline (left/right): label and input share a single row; error text wraps below.
  if (isInline) {
    return (
      <div className="flex flex-col gap-1">
        <div className="inline-flex items-center gap-2">
          {labelPosition === 'left' && labelEl}
          {inputEl}
          {labelPosition === 'right' && labelEl}
        </div>
        {error && <p className="text-label-md text-status-error">{error}</p>}
      </div>
    );
  }

  // Stacked (top or no label): label above, input below, error text under input.
  return (
    <div className="flex flex-col gap-1">
      {labelEl}
      {inputEl}
      {error && <p className="text-label-md text-status-error">{error}</p>}
    </div>
  );
}
