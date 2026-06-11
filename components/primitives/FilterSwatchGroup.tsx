import { clsx } from 'clsx';
import { FilterSwatch } from './FilterSwatch';
import { Card } from '../data-display/Card';

export interface FilterSwatchGroupSwatch {
  /** Color value — use a value from the design system palette */
  color: string;
  selected?: boolean;
  highPriority?: boolean;
  onClick?: () => void;
  /** Per-swatch tooltip, passed through to the underlying FilterSwatch */
  label?: string;
}

export interface FilterSwatchGroupProps {
  /** Category label shown alongside the cluster. Omit (or pass empty) to hide. */
  label?: string;
  /**
   * Where the label sits relative to the swatches.
   * - `bottom` (default): label below a card-wrapped cluster, centered.
   * - `left`: label to the left of bare swatches, vertically centered.
   */
  labelPosition?: 'bottom' | 'left';
  swatches: FilterSwatchGroupSwatch[];
  /** Applies to every swatch in the group */
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Returns swatches as a single row. Matches Figma `FilterSwatchGroup` canonical
 * (Layout=OneRow only). The card width grows horizontally to fit all swatches.
 */
function splitRows<T>(swatches: T[]): [T[], T[]] {
  return [swatches, []];
}

export function FilterSwatchGroup({
  label,
  labelPosition = 'bottom',
  swatches,
  size = 'sm',
  className,
}: FilterSwatchGroupProps) {
  const [row1, row2] = splitRows(swatches);

  const hasLabel = Boolean(label);

  const rows = (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        {row1.map((s, i) => (
          <FilterSwatch
            key={`r1-${i}`}
            color={s.color}
            selected={s.selected}
            highPriority={s.highPriority}
            onClick={s.onClick}
            label={s.label}
            size={size}
          />
        ))}
      </div>
    </div>
  );

  if (labelPosition === 'left') {
    return (
      <div className={clsx('flex flex-row items-center gap-2', className)}>
        {hasLabel && (
          <span className="text-body-md text-primary">{label}</span>
        )}
        {rows}
      </div>
    );
  }

  return (
    <div className={clsx('flex flex-col items-center gap-2', className)}>
      {hasLabel ? <Card padding="xs">{rows}</Card> : rows}
      {hasLabel && (
        <span className="text-label-md text-muted text-center">{label}</span>
      )}
    </div>
  );
}
