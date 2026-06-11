import { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronLeftIcon } from '../primitives/icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../primitives/icons/ChevronRightIcon';

export type ActionMenuSize = 'xs' | 'sm' | 'md';

// Single-line item sizing (no description).
const itemSizeMap: Record<ActionMenuSize, string> = {
  xs: 'h-7 px-3 text-body-sm',
  sm: 'h-8 px-3 text-body-sm',
  md: 'h-9 px-4 text-body-md',
};

// Two-line item sizing — when `item.description` is present, the row holds
// the label + a smaller muted subtitle below it. Heights expand and we swap
// from `h-N` to `min-h-N + py-2` so the row breathes around taller content
// (e.g. a Mention picker's user-row Avatar + name + email).
const itemSizeWithDescriptionMap: Record<ActionMenuSize, string> = {
  xs: 'min-h-12 px-3 py-2 text-body-sm',
  sm: 'min-h-12 px-3 py-2 text-body-sm',
  md: 'min-h-14 px-4 py-2 text-body-md',
};

// Trailing chevron + back chevron scale loosely with size.
const chevronSize: Record<ActionMenuSize, number> = { xs: 12, sm: 14, md: 14 };

export interface ActionMenuItem {
  icon?: React.ReactNode;
  label: string;
  /**
   * Optional second line rendered below `label` in a muted style. Used for
   * user-record menus (e.g. mention picker rows showing name + email). When
   * present, the item row grows to a two-line layout via
   * `itemSizeWithDescriptionMap`.
   */
  description?: string;
  shortcut?: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  /**
   * Nested groups rendered as a drill-down child menu. When present, the item
   * renders a trailing chevron-right and clicking it replaces the menu with
   * the child level (plus a back-chevron + title header). Children can
   * themselves contain items with `children`, nesting indefinitely.
   */
  children?: ActionMenuGroup[];
}

export interface ActionMenuGroup {
  items: ActionMenuItem[];
}

export interface ActionMenuProps {
  groups: ActionMenuGroup[];
  size?: ActionMenuSize;
  className?: string;
}

interface StackFrame {
  title: string;
  groups: ActionMenuGroup[];
}

// ─────────────────────────────────────────────────────────────────────────────
// ActionMenuItemRow — standalone canonical row primitive.
//
// Exposed so a Storybook Matrix can pixel-pin individual rows against Figma's
// ActionMenuItem ComponentSet (571:651) without needing to wrap each cell in
// the full <ActionMenu> chrome (border / shadow / py-1).
//
// Internally the <ActionMenu> component renders one of these per item — the
// exported name doubles as the canonical "one row of an action menu" symbol.
// ─────────────────────────────────────────────────────────────────────────────

export interface ActionMenuItemRowProps extends ActionMenuItem {
  size?: ActionMenuSize;
}

export function ActionMenuItemRow({
  size = 'sm',
  icon,
  label,
  description,
  shortcut,
  selected,
  disabled,
  danger,
  children,
  onClick,
}: ActionMenuItemRowProps) {
  const hasChildren = !!(children && children.length > 0);
  const hasDescription = !!description;
  const sizingClass = hasDescription
    ? itemSizeWithDescriptionMap[size]
    : itemSizeMap[size];
  return (
    <button
      role="menuitem"
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'relative flex w-full items-center gap-2 whitespace-nowrap transition-colors',
        sizingClass,
        'focus-visible:outline-none focus-visible:bg-surface',
        danger
          ? 'text-status-error-fg hover:bg-status-error-surface'
          : selected
            ? 'text-primary bg-row-selected'
            : 'text-primary hover:bg-surface',
        disabled && 'cursor-not-allowed opacity-40',
      )}
    >
      {selected && (
        // Accent bar — 2px, flush to left edge, full height. Uses bg-action-primary
        // (brand-500, our primary blue) — matches Figma _AccentBar binding to action/primary.
        <span className="absolute inset-y-0 left-0 w-0.5 bg-action-primary" />
      )}
      {icon && (
        <span className="relative flex-shrink-0 text-muted">{icon}</span>
      )}
      <span className="relative flex-1 text-left flex flex-col leading-tight">
        <span className={clsx(hasDescription && 'font-medium')}>{label}</span>
        {description && (
          <span className="text-body-sm text-muted">{description}</span>
        )}
      </span>
      {shortcut && (
        <span className="relative text-label-md text-muted">{shortcut}</span>
      )}
      {hasChildren && (
        <ChevronRightIcon
          size={chevronSize[size]}
          className="relative flex-shrink-0 text-muted"
        />
      )}
    </button>
  );
}

export function ActionMenu({ groups, size = 'sm', className }: ActionMenuProps) {
  const [stack, setStack] = useState<StackFrame[]>([]);

  const current = stack.length > 0 ? stack[stack.length - 1].groups : groups;
  const title = stack.length > 0 ? stack[stack.length - 1].title : undefined;
  const inSubmenu = stack.length > 0;

  const handleItemClick = (item: ActionMenuItem) => {
    if (item.disabled) return;
    if (item.children && item.children.length > 0) {
      setStack((s) => [...s, { title: item.label, groups: item.children! }]);
      return;
    }
    item.onClick?.();
  };

  const handleBack = () => setStack((s) => s.slice(0, -1));

  return (
    <div
      role="menu"
      className={clsx(
        'min-w-48 rounded-card border border-line bg-elevated py-1 shadow-card',
        className,
      )}
    >
      {/* Submenu nav header */}
      {inSubmenu && (
        <div className="border-b border-line">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Back to parent menu"
            className={clsx(
              'flex w-full items-center gap-2 whitespace-nowrap transition-colors',
              itemSizeMap[size],
              'text-primary hover:bg-surface focus-visible:outline-none focus-visible:bg-surface',
            )}
          >
            <ChevronLeftIcon size={chevronSize[size]} className="flex-shrink-0 text-link" />
            <span className="flex-1 text-left font-medium">{title}</span>
          </button>
        </div>
      )}

      {current.map((group, gi) => (
        <div key={gi}>
          {gi > 0 && <div role="separator" className="my-1 border-t border-line" />}
          {group.items.map((item, ii) => (
            <ActionMenuItemRow
              key={ii}
              size={size}
              {...item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
