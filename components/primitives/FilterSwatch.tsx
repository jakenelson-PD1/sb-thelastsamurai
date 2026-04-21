import { clsx } from 'clsx';
import { Tooltip } from '../overlay/Tooltip';
import { Flag02Icon } from './icons/Flag02Icon';

export interface FilterSwatchProps {
  /** Color value — use a value from the design system palette */
  color: string;
  active?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
  className?: string;
  label?: string;
  /** Overlay a flag icon on the swatch — marks this tile as high priority */
  highPriority?: boolean;
}

const sizeMap = {
  sm: { swatch: 'h-4 w-4' },
  md: { swatch: 'h-5 w-5' },
};

export function FilterSwatch({
  color,
  active = false,
  onClick,
  size = 'sm',
  className,
  label,
  highPriority = false,
}: FilterSwatchProps) {
  const { swatch } = sizeMap[size];
  const btn = (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        'flex items-center justify-center transition-all',
        className,
      )}
    >
      <span
        className={clsx(
          'relative rounded-control transition-all',
          active
            ? 'outline outline-2 outline-[var(--color-action-primary)] outline-offset-0'
            : 'opacity-80 hover:opacity-100',
          swatch,
        )}
        style={{ backgroundColor: color }}
      >
        {highPriority && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Flag02Icon
              size={size === 'md' ? 14 : 12}
              className="text-tile-flag"
              aria-label="High priority"
            />
          </span>
        )}
      </span>
    </button>
  );
  return label ? <Tooltip content={label}>{btn}</Tooltip> : btn;
}
