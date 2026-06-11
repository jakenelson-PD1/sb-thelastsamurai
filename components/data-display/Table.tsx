import { clsx } from 'clsx';
import { TableCell } from './TableCell';
import { TableHeaderCell, type TableHeaderAction } from './TableHeaderCell';
import type { ReactNode } from 'react';

/**
 * ──────────────────────────────────────────────────────────────────────────
 * Table — organism
 * ──────────────────────────────────────────────────────────────────────────
 * Composed entirely from canonical atoms:
 *   `TableHeaderCell` × n   — for `<th>` (uses `Button` for header actions)
 *   `TableCell`        × n  — for `<td>`
 *
 * The organism owns the data → row → cell mapping, the variant prop
 * propagation, and the single-cell selection state. It does NOT own any
 * cell-level styling — that lives in the atoms.
 *
 * Cell-level interactions (focus, hover, selected) apply to BOTH `modern`
 * and `excel` variants. The visual difference between the two is purely
 * spacing density + grid borders.
 *
 * @see TableCell, TableHeaderCell — Composition rule (CLAUDE.md)
 */
export type { TableHeaderAction };

export interface Column<T> {
  key: keyof T;
  header: string;
  /** Optional icon buttons rendered next to the header text. */
  headerActions?: TableHeaderAction[];
  /** Horizontal alignment of cell content. Default `left`. */
  align?: 'left' | 'center' | 'right';
  /** Convenience: render an icon (or atom) BEFORE the cell text. */
  iconLeft?: (row: T, index: number) => ReactNode;
  /** Convenience: render an icon (or atom) AFTER the cell text. */
  iconRight?: (row: T, index: number) => ReactNode;
  /** If true, the cell renders ONLY the `iconLeft` (no text). */
  iconOnly?: boolean;
  /**
   * Custom cell renderer — highest priority. Use for Switch, Chip, Badge,
   * multi-button action groups, or any complex cell composition.
   */
  render?: (row: T, index: number) => ReactNode;
}

export type TableVariant = 'modern' | 'excel';

export interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  /**
   * Visual style.
   * - `modern` (default): bottom dividers only, no vertical column lines.
   * - `excel`: full cell-grid borders + outer table chrome.
   *
   * Both variants are cell-interactive — there is no row-level click/focus.
   */
  variant?: TableVariant;
  /**
   * Cell click handler — fires when an individual cell is clicked (or
   * Enter/Space when focused). Applies to BOTH variants.
   */
  onCellClick?: (row: T, rowIndex: number, columnKey: keyof T, columnIndex: number) => void;
  /** The currently selected cell (single-selection). */
  selectedCell?: { row: number; col: number };
  className?: string;
}

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  variant = 'modern',
  onCellClick,
  selectedCell,
  className,
}: TableProps<T>) {
  const isExcel = variant === 'excel';
  const interactive = !!onCellClick;
  const isCellSelected = (r: number, c: number) =>
    !!selectedCell && selectedCell.row === r && selectedCell.col === c;

  return (
    <div
      className={clsx(
        'w-full overflow-x-auto',
        isExcel && 'rounded-control border border-line bg-elevated',
        className,
      )}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className={clsx(isExcel && 'bg-recessed')}>
            {columns.map((col, ci) => (
              <TableHeaderCell
                key={String(col.key)}
                variant={variant}
                align={col.align}
                actions={col.headerActions}
                hasLeftBorder={isExcel && ci > 0}
              >
                {col.header}
              </TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr key={ri}>
              {columns.map((col, ci) => {
                const selected = isCellSelected(ri, ci);
                // Excel: every cell EXCEPT in the last row has a bottom border
                // (the outer table chrome provides the final boundary).
                // Modern: every cell, including last row.
                const hasBottomBorder = isExcel ? ri < data.length - 1 : true;
                const content = col.render
                  ? col.render(row, ri)
                  : String(row[col.key] ?? '');
                return (
                  <TableCell
                    key={String(col.key)}
                    variant={variant}
                    align={col.align}
                    selected={selected}
                    interactive={interactive}
                    hasBottomBorder={hasBottomBorder}
                    hasLeftBorder={isExcel && ci > 0}
                    iconLeft={col.iconLeft?.(row, ri)}
                    iconRight={col.iconRight?.(row, ri)}
                    iconOnly={col.iconOnly}
                    onClick={interactive ? () => onCellClick!(row, ri, col.key, ci) : undefined}
                  >
                    {content}
                  </TableCell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
