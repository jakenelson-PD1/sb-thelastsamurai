import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { Button } from '../primitives/Button';

/**
 * ──────────────────────────────────────────────────────────────────────────
 * TableHeaderCell — atom
 * ──────────────────────────────────────────────────────────────────────────
 * Header cell. Renders as `<th>`. Composes the canonical `Button` primitive
 * (variant="ghost", iconOnly, size="xs") for any column actions (sort,
 * filter, more-menu, etc.).
 *
 * Why an atom: every `<th>` in the system should look and behave identically
 * — composing inline `<button>` elements in consumers is forbidden by the
 * Composition rule (CLAUDE.md → Conventions → Composition).
 *
 * Design tokens used:
 * - fg/secondary  → header text
 * - line          → bottom + left dividers
 */
export type TableHeaderAction = {
  /** Icon node — typically `<Icon icon={...} size={14} />`. */
  icon: ReactNode;
  /** Accessible label (becomes `aria-label`). */
  label: string;
  /** Click handler. */
  onClick?: () => void;
  /** Pressed/active state — shown as a tinted icon-button. */
  active?: boolean;
};

export interface TableHeaderCellProps {
  /** Visual variant. Drives padding density + body text size. */
  variant?: 'modern' | 'excel';
  /** Horizontal alignment of header text + actions cluster. */
  align?: 'left' | 'center' | 'right';
  /** Whether to render the left divider (Excel, column index > 0). */
  hasLeftBorder?: boolean;
  /** Whether to render the bottom divider (almost always true). */
  hasBottomBorder?: boolean;
  /** Optional icon-button cluster rendered after the header label. */
  actions?: TableHeaderAction[];
  /** Optional extra classes. */
  className?: string;
  /** Header text (or composed content). */
  children?: ReactNode;
}

export function TableHeaderCell({
  variant = 'modern',
  align,
  hasLeftBorder = false,
  hasBottomBorder = true,
  actions,
  className,
  children,
}: TableHeaderCellProps) {
  const isExcel = variant === 'excel';
  const headerPad = isExcel ? 'px-2 py-1.5' : 'px-4 py-2';
  const headerMinH = isExcel ? 'h-8' : 'h-10';
  const baseTextSize = isExcel ? 'text-body-sm' : 'text-body-md';

  return (
    <th
      className={clsx(
        'font-semibold text-secondary align-middle whitespace-nowrap bg-elevated',
        baseTextSize,
        headerPad,
        headerMinH,
        // Per-cell borders (no row-level styling)
        hasBottomBorder && 'border-b border-line',
        hasLeftBorder && 'border-l border-line',
        // Alignment
        align === 'right' && 'text-right',
        align === 'center' && 'text-center',
        (!align || align === 'left') && 'text-left',
        className,
      )}
    >
      {actions && actions.length > 0 ? (
        <span className="inline-flex items-center gap-2 w-full">
          <span className="flex-1 truncate">{children}</span>
          <span className="inline-flex items-center gap-0.5 shrink-0">
            {actions.map((a, i) => (
              <Button
                key={i}
                variant="ghost"
                iconOnly
                size="xs"
                startIcon={a.icon}
                aria-label={a.label}
                aria-pressed={a.active}
                className={clsx(a.active && '!bg-row-selected !text-status-info-fg')}
                onClick={(e) => { e.stopPropagation(); a.onClick?.(); }}
              />
            ))}
          </span>
        </span>
      ) : (
        children
      )}
    </th>
  );
}
