import { clsx } from 'clsx';

export interface InsetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Padding size:
   * - compact  → 12px  (toolbars, dense panels)
   * - default  → 16px  (standard panels)
   * - relaxed  → 24px  (detail views, forms)
   */
  size?: 'compact' | 'default' | 'relaxed';
  /** Apply padding only on the x-axis */
  x?: boolean;
  /** Apply padding only on the y-axis */
  y?: boolean;
}

const sizeMap = {
  compact: 'p-panel-compact',
  default: 'p-panel',
  relaxed: 'p-panel-relaxed',
} as const;

const xMap = {
  compact: 'px-panel-compact',
  default: 'px-panel',
  relaxed: 'px-panel-relaxed',
} as const;

const yMap = {
  compact: 'py-panel-compact',
  default: 'py-panel',
  relaxed: 'py-panel-relaxed',
} as const;

/**
 * Semantic padding wrapper.
 * Uses layout spacing tokens so padding stays consistent as the design evolves.
 *
 * @example
 * <Inset>…</Inset>
 * <Inset size="compact">…</Inset>
 * <Inset size="relaxed" x>…</Inset>
 */
export function Inset({ size = 'default', x, y, className, children, ...props }: InsetProps) {
  let paddingClass: string;
  if (x)      paddingClass = xMap[size];
  else if (y) paddingClass = yMap[size];
  else        paddingClass = sizeMap[size];

  return (
    <div className={clsx(paddingClass, className)} {...props}>
      {children}
    </div>
  );
}
