import { clsx } from 'clsx';

/**
 * SubToolbar — secondary toolbar bar, typically docked under a page header.
 *
 * Two opinionated content slots: `left` and `right`. Both accept any composition
 * of LSDS controls — buttons, dropdowns, inputs, search, filter swatch groups,
 * dividers, etc. The slots auto-space (left anchors to the start, right anchors
 * to the end) so consumers don't need to write spacer divs.
 *
 * Mirrors the `SubToolbar` ComponentSet in Figma (`Slots=Both/LeftOnly/RightOnly`).
 */
export interface SubToolbarProps {
  /**
   * Left content slot — checkboxes, search, action buttons, etc.
   * Wrap multiple controls in a fragment; they'll align horizontally with `gap-3`.
   */
  left?: React.ReactNode;
  /**
   * Right content slot — filters, sort, assignees, dividers, etc.
   * Wrap multiple controls in a fragment; they'll align horizontally with `gap-3`.
   */
  right?: React.ReactNode;
  className?: string;
}

export function SubToolbar({ left, right, className }: SubToolbarProps) {
  return (
    <div
      role="toolbar"
      className={clsx(
        // Figma uses primaryAxisAlignItems=MIN (left-pack) — left content and
        // right content sit next to each other with itemSpacing, NOT spread
        // to opposite ends. This matches the Figma SubToolbar canonical.
        'flex h-12 shrink-0 items-center justify-start gap-4 px-6 bg-elevated border-t border-b border-line-strong',
        className,
      )}
    >
      {left !== undefined && (
        <div className="flex items-center gap-3">
          {left}
        </div>
      )}
      {right !== undefined && (
        <div className="flex items-center gap-3">
          {right}
        </div>
      )}
    </div>
  );
}
