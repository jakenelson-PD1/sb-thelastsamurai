import { clsx } from 'clsx';
import { FilterSwatch } from './FilterSwatch';

export interface FilterSwatchGroupSwatch {
  /** Color value — use a value from the design system palette */
  color: string;
  active?: boolean;
  highPriority?: boolean;
  onClick?: () => void;
  /** Per-swatch tooltip, passed through to the underlying FilterSwatch */
  label?: string;
}

export interface FilterSwatchGroupProps {
  /** Category label shown beneath the cluster */
  label: string;
  swatches: FilterSwatchGroupSwatch[];
  /** Applies to every swatch in the group */
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Splits `swatches` into up to two rows by count.
 * - 1–6: one row (all swatches)
 * - 7+:  two rows of ceil(N/2) and floor(N/2)
 */
function splitRows<T>(swatches: T[]): [T[], T[]] {
  const count = swatches.length;
  if (count <= 6) return [swatches, []];
  const splitIndex = Math.ceil(count / 2);
  return [swatches.slice(0, splitIndex), swatches.slice(splitIndex)];
}

export function FilterSwatchGroup({
  label,
  swatches,
  size = 'sm',
  className,
}: FilterSwatchGroupProps) {
  const [row1, row2] = splitRows(swatches);

  return (
    <div className={clsx('flex flex-col items-center gap-2', className)}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {row1.map((s, i) => (
            <FilterSwatch
              key={`r1-${i}`}
              color={s.color}
              active={s.active}
              highPriority={s.highPriority}
              onClick={s.onClick}
              label={s.label}
              size={size}
            />
          ))}
        </div>
        {row2.length > 0 && (
          <div className="flex gap-2">
            {row2.map((s, i) => (
              <FilterSwatch
                key={`r2-${i}`}
                color={s.color}
                active={s.active}
                highPriority={s.highPriority}
                onClick={s.onClick}
                label={s.label}
                size={size}
              />
            ))}
          </div>
        )}
      </div>
      <span className="text-label-md text-fg-muted text-center">{label}</span>
    </div>
  );
}
