import { clsx } from 'clsx';
import type { ReactNode } from 'react';

/**
 * ──────────────────────────────────────────────────────────────────────────
 * TableCell — atom
 * ──────────────────────────────────────────────────────────────────────────
 * Single body cell. Owns its own padding, height, alignment, borders,
 * background fill (selected/hover), and focus ring. Renders as a `<td>`.
 *
 * Content composition is via the convenience props (`iconLeft`/`iconRight`/
 * `iconOnly`) OR plain `children`. Higher-level concerns (column mapping,
 * data binding, single-selection state) live in the `Table` organism.
 *
 * Design tokens used:
 * - bg/elevated         → cell background (white)
 * - bg/surface          → :hover
 * - status/info-surface → selected
 * - line                → bottom + left dividers
 * - line-focus          → 2px inset focus ring
 */
export type TableCellVariant = 'modern' | 'excel';

export interface TableCellProps {
  /** Visual variant. Drives padding density + body text size. */
  variant?: TableCellVariant;
  /** Horizontal content alignment. */
  align?: 'left' | 'center' | 'right';
  /** Whether this cell is the currently selected cell (single-selection). */
  selected?: boolean;
  /** Whether the cell participates in keyboard/click interaction. */
  interactive?: boolean;
  /** Whether to render the bottom divider (last-row exception in Excel). */
  hasBottomBorder?: boolean;
  /** Whether to render the left divider (Excel, ci > 0). */
  hasLeftBorder?: boolean;
  /** Convenience: icon (or atom) BEFORE text content. */
  iconLeft?: ReactNode;
  /** Convenience: icon (or atom) AFTER text content. */
  iconRight?: ReactNode;
  /** If true, render only `iconLeft` (no children/text). */
  iconOnly?: boolean;
  /** Click handler. Only fires when `interactive`. */
  onClick?: () => void;
  /** Optional extra classes. */
  className?: string;
  /** ARIA selected state — wired automatically when `selected` is set. */
  'aria-selected'?: boolean;
  /** Cell content (text or composed atoms). */
  children?: ReactNode;
}

export function TableCell({
  variant = 'modern',
  align,
  selected = false,
  interactive = false,
  hasBottomBorder = true,
  hasLeftBorder = false,
  iconLeft,
  iconRight,
  iconOnly = false,
  onClick,
  className,
  children,
  'aria-selected': ariaSelected,
}: TableCellProps) {
  const isExcel = variant === 'excel';
  const cellPad = isExcel ? 'px-2 py-1' : 'px-4 py-3';
  const cellMinH = isExcel ? 'h-8' : 'h-11';
  const baseTextSize = isExcel ? 'text-body-sm' : 'text-body-md';

  return (
    <td
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'gridcell' : undefined}
      aria-selected={interactive ? (ariaSelected ?? selected) : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? (e) => {
        if (e.key === 'Enter') onClick?.();
        if (e.key === ' ') { e.preventDefault(); onClick?.(); }
      } : undefined}
      className={clsx(
        // Foundation
        'text-primary align-middle relative bg-elevated',
        baseTextSize,
        cellPad,
        cellMinH,
        // Per-cell borders (cell-level, never row-level)
        hasBottomBorder && 'border-b border-line',
        hasLeftBorder && 'border-l border-line',
        // Alignment
        align === 'right' && 'text-right',
        align === 'center' && 'text-center',
        // State fills (Selected highest priority, then hover)
        selected && 'bg-row-selected',
        !selected && interactive && 'hover:bg-surface',
        // Focus ring (inset, never clipped, replaces all four borders on focus)
        interactive && 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-line-focus focus:border-transparent',
        className,
      )}
    >
      <CellContent iconLeft={iconLeft} iconRight={iconRight} iconOnly={iconOnly}>
        {children}
      </CellContent>
    </td>
  );
}

/**
 * Internal — content composer with priority:
 *   `iconOnly`     → just the iconLeft (no text)
 *   no icons       → children alone
 *   icons + text   → flex row: iconLeft, children (truncate), iconRight
 */
function CellContent({
  iconLeft,
  iconRight,
  iconOnly,
  children,
}: {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconOnly?: boolean;
  children?: ReactNode;
}) {
  if (iconOnly) {
    return <span className="inline-flex items-center justify-center">{iconLeft}</span>;
  }
  if (!iconLeft && !iconRight) {
    return <>{children}</>;
  }
  return (
    <span className="inline-flex items-center gap-2">
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span className="truncate">{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </span>
  );
}
