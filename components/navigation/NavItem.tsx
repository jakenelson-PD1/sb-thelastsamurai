import { clsx } from 'clsx';
import { StatusOutstandingIcon } from '../primitives/icons/StatusOutstandingIcon';
import { StatusFulfilledIcon } from '../primitives/icons/StatusFulfilledIcon';
import { StatusReturnedIcon } from '../primitives/icons/StatusReturnedIcon';
import { StatusAcceptedIcon } from '../primitives/icons/StatusAcceptedIcon';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';
import type { IconSizeProp } from '../primitives/icons/_iconSize';

export type NavItemStatus = 'outstanding' | 'fulfilled' | 'returned' | 'accepted';

interface StatusMeta {
  Icon: React.ComponentType<{ size?: IconSizeProp; className?: string }>;
  iconClass: string;
}

// Mapping mirrors `renderStatus()` in components/data-display/statusUtils.tsx
// so the NavItem chip, RequestRow leftmost icon, and RequestDetailHeader
// title-icon all show the same glyph + color for a given status.
const STATUS_META: Record<NavItemStatus, StatusMeta> = {
  outstanding: { Icon: StatusOutstandingIcon, iconClass: 'text-action-primary' },
  fulfilled:   { Icon: StatusFulfilledIcon,   iconClass: 'text-status-warning' },
  returned:    { Icon: StatusReturnedIcon,    iconClass: 'text-status-error' },
  accepted:    { Icon: StatusAcceptedIcon,    iconClass: 'text-status-success' },
};

// ─── Shared row frame ───────────────────────────────────────────────────────
// Every NavItem variant — item, group, section — uses the same height,
// padding, radius, gap, and base typography so they read as siblings when
// interleaved in a list. The only thing that differs across variants is the
// internal slot composition.

const ROW_FRAME = clsx(
  'flex items-center gap-3 h-9 p-2 rounded-card',
  'text-body-sm transition-colors motion-reduce:transition-none',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
);

// ─── Status chip — used by the group variant ────────────────────────────────
// Reference: Doc-Previewer `Requests` ComponentSet, chip is 36×18, radius 100,
// 16px status icon + 10px chevron-down, 4px horizontal padding, 2px gap.

function StatusChip({
  status,
  onClick,
  inverted = false,
}: {
  status: NavItemStatus;
  onClick?: () => void;
  /** True when the parent GroupRow is active or force-hovered. Flips both the
   *  status glyph and the chevron to `on-accent` (white) so the chip stays
   *  legible on the blue/purple row fill — mirrors Figma's recoloring of
   *  Hover/Active variants of `Type=Group`. */
  inverted?: boolean;
}) {
  const { Icon, iconClass } = STATUS_META[status];
  return (
    <button
      type="button"
      aria-label={`Status: ${status}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={clsx(
        'inline-flex items-center gap-0.5 shrink-0',
        'h-5 px-1 rounded-pill',
        'bg-transparent border border-action-primary',
        'transition-colors hover:bg-action-primary/10',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
      )}
    >
      {/* Both glyphs flip to white when the parent row is inverted (active /
          forceHover) OR while it's being hovered (group-hover from GroupRow's
          `group` class). Default color falls through to STATUS_META.iconClass /
          sidenav-text-muted. `!` overrides the default class without forking. */}
      <Icon
        size="sm"
        className={clsx(
          iconClass,
          'group-hover:!text-on-accent',
          inverted && '!text-on-accent',
        )}
      />
      <ChevronDownIcon
        size={10}
        className={clsx(
          // Always-white chevron — `on-accent` resolves to pure white in
          // both light + dark modes, so the dropdown affordance reads cleanly
          // on the dark sidenav surface without needing a theme/mode override.
          'text-on-accent',
          'group-hover:!text-on-accent',
          inverted && '!text-on-accent',
        )}
      />
    </button>
  );
}

// ─── Item variant — icon + text (default) ───────────────────────────────────
// Used in two contexts via the `tone` prop:
//   • tone="sidebar" — left-rail nav rows (default). Hover fills with
//     action/primary, active fills with nav/active-bg.
//   • tone="topnav"  — top header nav items. Hover fills with nav/hover-bg
//     (subtle white overlay), active fills with nav/active-bg.
// `iconSide` flips the icon between leading (default) and trailing.

type NavItemTone = 'sidebar' | 'topnav';
type IconSide = 'leading' | 'trailing';

interface ItemRowProps {
  type?: 'item';
  /** Leading icon. Optional — hide entirely by omitting or by setting `showIcon={false}`. */
  icon?: React.ComponentType<{ size?: IconSizeProp; className?: string }>;
  /** Toggle leading icon visibility. Defaults to true when `icon` is provided. */
  showIcon?: boolean;
  title: string;
  /** Which side the icon sits on. Defaults to `leading`. */
  iconSide?: IconSide;
  active?: boolean;
  disabled?: boolean;
  /** Statically render the hover style (for Matrix/showcase only — bypasses :hover). */
  forceHover?: boolean;
  tone?: NavItemTone;
  href?: string;
  onSelect?: () => void;
  'aria-label'?: string;
  /** First trailing slot. Drop a Button, CountBadge, Dropdown, etc. */
  slot1?: React.ReactNode;
  /** Second trailing slot. Same intent as `slot1`. */
  slot2?: React.ReactNode;
  /**
   * Indent the row 24px to the right of the row's left edge — mirrors the
   * Figma `Indent` BOOLEAN on the NavItem set. Used when this row sits inside
   * a Waterfall children slot and you want it to read as a child. WaterfallRow
   * defaults children to `indent={true}`; pass `indent={false}` explicitly to
   * opt out (e.g. SideNav body where the section header already provides the
   * visual hierarchy).
   */
  indent?: boolean;
  className?: string;
}

function ItemRow({
  icon: IconComp,
  showIcon = true,
  title,
  iconSide = 'leading',
  active,
  disabled,
  forceHover,
  tone = 'sidebar',
  href,
  onSelect,
  'aria-label': ariaLabel,
  slot1,
  slot2,
  indent,
  className,
}: ItemRowProps) {
  const Tag = href ? 'a' : 'button';
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onSelect?.();
  };

  // Mirror Figma `NavItem` set's `ShowIcon` BOOLEAN — hide when explicitly
  // false or when no icon component was supplied.
  const iconEl = IconComp && showIcon ? <IconComp size="sm" className="shrink-0" /> : null;
  const labelEl = (
    <span className="min-w-0 flex-1 truncate text-left">
      {title}
    </span>
  );

  return (
    <Tag
      {...(href ? { href } : { type: 'button' as const })}
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      className={clsx(
        ROW_FRAME,
        'w-full font-medium cursor-pointer',
        // Indent toggle — mirrors Figma `Indent` BOOLEAN on the NavItem set.
        // `pl-8` (32px) overrides the default `p-2` left padding (8px), pushing
        // the icon/label inwards by 24px so the row reads as a child of a
        // Waterfall section.
        indent && 'pl-8',
        active && 'bg-header-active-bg text-on-accent',
        !active && tone === 'sidebar' && (
          forceHover
            ? 'bg-action-primary text-on-accent'
            : 'text-sidenav-fg-primary hover:bg-action-primary hover:text-on-accent'
        ),
        !active && tone === 'topnav' && (
          forceHover
            ? 'bg-header-hover-bg text-on-accent'
            : 'text-header-text hover:bg-header-hover-bg hover:text-on-accent'
        ),
        disabled && 'opacity-40 pointer-events-none',
        className,
      )}
    >
      {iconSide === 'leading' ? (
        <>
          {iconEl}
          {labelEl}
        </>
      ) : (
        <>
          {labelEl}
          {iconEl}
        </>
      )}
      {/* Trailing slots — mirror Figma `Slot1` + `Slot2` INSTANCE_SWAP. */}
      {slot1 && <span className="shrink-0">{slot1}</span>}
      {slot2 && <span className="shrink-0">{slot2}</span>}
    </Tag>
  );
}

// ─── Group variant — status chip + request number + request title ───────────
// Reference row: shares ROW_FRAME (h-9, p-2, gap-3, rounded-card). Hover
// fills with action/primary; selected fills with nav/active-bg.

interface GroupRowProps {
  type: 'group';
  status: NavItemStatus;
  /** Toggle the leading StatusChip visibility (mirrors Figma `ShowIcon` BOOLEAN). */
  showIcon?: boolean;
  index: number;
  title: string;
  active?: boolean;
  disabled?: boolean;
  /** Statically render the hover style (for Matrix/showcase only — bypasses :hover). */
  forceHover?: boolean;
  onSelect?: () => void;
  onStatusClick?: () => void;
  /** First trailing slot. Drop a Button, CountBadge, Dropdown, etc. */
  slot1?: React.ReactNode;
  /** Second trailing slot. Same intent as `slot1`. */
  slot2?: React.ReactNode;
  /** Indent the row 24px (mirrors Figma `Indent` BOOLEAN). See `ItemRowProps.indent`. */
  indent?: boolean;
  className?: string;
}

function GroupRow({
  status,
  showIcon = true,
  index,
  title,
  active,
  disabled,
  forceHover,
  onSelect,
  onStatusClick,
  slot1,
  slot2,
  indent,
  className,
}: GroupRowProps) {
  const handleActivate = () => {
    if (!disabled) onSelect?.();
  };
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      aria-current={active ? 'page' : undefined}
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleActivate();
        }
      }}
      className={clsx(
        ROW_FRAME,
        'group cursor-pointer',
        // Indent — mirrors Figma `Indent` BOOLEAN. See `ItemRowProps.indent`.
        indent && 'pl-8',
        active
          ? 'bg-header-active-bg text-on-accent'
          : forceHover
            ? 'bg-action-primary text-on-accent'
            : 'text-sidenav-fg-primary hover:bg-action-primary hover:text-on-accent',
        disabled && 'opacity-40 pointer-events-none',
        className,
      )}
    >
      {showIcon && <StatusChip status={status} onClick={onStatusClick} inverted={active || forceHover} />}
      {/* Index + title pair — sits inside an inner flex with a smaller gap
          (1.5 = 6px) so the number reads as a leading hint to its title rather
          than as a sibling sitting on the row's main rhythm. The outer
          `gap-3` from ROW_FRAME still gives 12px between StatusChip and this
          block, preserving the row's primary cadence. */}
      <div className="flex-1 min-w-0 flex items-center gap-1.5">
        <span
          className={clsx(
            'shrink-0 w-5 text-right tabular-nums',
            // Index reads as a soft hint — 80%-opacity white on the dark
            // sidenav surface gives a lighter, more legible gray than the
            // earlier `sidenav-text-muted` while still deferring to the title.
            // Flips fully white on active/hover.
            (active || forceHover)
              ? 'text-on-accent'
              : 'text-on-accent/80 group-hover:text-on-accent',
          )}
        >
          {index}
        </span>
        <span className="flex-1 min-w-0 truncate">{title}</span>
      </div>
      {slot1 && <span className="shrink-0">{slot1}</span>}
      {slot2 && <span className="shrink-0">{slot2}</span>}
    </div>
  );
}

// ─── Section heading variant — text + trailing chevron, collapsible ─────────
// Shares ROW_FRAME so headings line up with sibling item/group rows.

interface SectionHeadingProps {
  type: 'section';
  title: string;
  expanded?: boolean;
  disabled?: boolean;
  /** Statically render the hover style (for Matrix/showcase only — bypasses :hover). */
  forceHover?: boolean;
  onToggle?: () => void;
  /** First trailing slot. Rendered between the title and the chevron. */
  slot1?: React.ReactNode;
  /** Second trailing slot. Same intent as `slot1`. */
  slot2?: React.ReactNode;
  /** Indent the row 24px (mirrors Figma `Indent` BOOLEAN). See `ItemRowProps.indent`. */
  indent?: boolean;
  className?: string;
}

function SectionHeading({
  title,
  expanded = true,
  disabled,
  forceHover,
  onToggle,
  slot1,
  slot2,
  indent,
  className,
}: SectionHeadingProps) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      onClick={onToggle}
      className={clsx(
        ROW_FRAME,
        'group w-full justify-between cursor-pointer',
        // Indent — mirrors Figma `Indent` BOOLEAN. See `ItemRowProps.indent`.
        indent && 'pl-8',
        forceHover
          ? 'bg-action-primary text-on-accent'
          : 'text-sidenav-fg-primary hover:bg-action-primary hover:text-on-accent',
        disabled && 'opacity-40 pointer-events-none',
        className,
      )}
    >
      <span className="flex-1 min-w-0 truncate text-left">{title}</span>
      {slot1 && <span className="shrink-0">{slot1}</span>}
      {slot2 && <span className="shrink-0">{slot2}</span>}
      <ChevronDownIcon
        size="sm"
        className={clsx(
          'shrink-0 transition-transform motion-reduce:transition-none',
          forceHover
            ? 'text-on-accent'
            : 'text-sidenav-fg-secondary group-hover:text-on-accent',
          !expanded && '-rotate-90',
        )}
      />
    </button>
  );
}

// ─── Waterfall variant — parent row with indented children slot ─────────────
// Renders a single nav row (optional leading icon + title + trailing chevron)
// that toggles open/closed. When expanded, the `children` slot renders below
// the parent row, indented by `pl-4` (scale/4 = 16px). Nest naturally — a
// waterfall inside another waterfall compounds the indent via the box model.
//
// `expanded` (controlled) overrides `defaultExpanded` (uncontrolled). Clicking
// anywhere on the parent row toggles the open state and fires `onToggle`.

import { useState, Children, cloneElement, isValidElement } from 'react';
import type { ReactElement } from 'react';

interface WaterfallRowProps {
  type: 'waterfall';
  /** Optional leading icon. Same icon contract as item rows. */
  icon?: React.ComponentType<{ size?: IconSizeProp; className?: string }>;
  /** Toggle leading icon visibility. Defaults to true when `icon` is provided. */
  showIcon?: boolean;
  title: string;
  /** Controlled open state. Overrides defaultExpanded when provided. */
  expanded?: boolean;
  /** Initial open state for uncontrolled usage. Defaults to true. */
  defaultExpanded?: boolean;
  active?: boolean;
  disabled?: boolean;
  /** Statically render the hover style (for Matrix/showcase only — bypasses :hover). */
  forceHover?: boolean;
  onToggle?: (next: boolean) => void;
  /** First trailing slot. Rendered between the title and the chevron. */
  slot1?: React.ReactNode;
  /** Second trailing slot. Same intent as `slot1`. */
  slot2?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function WaterfallRow({
  icon: IconComp,
  showIcon = true,
  title,
  expanded,
  defaultExpanded = true,
  active,
  disabled,
  forceHover,
  onToggle,
  slot1,
  slot2,
  children,
  className,
}: WaterfallRowProps) {
  const [internalOpen, setInternalOpen] = useState(defaultExpanded);
  const isOpen = expanded ?? internalOpen;

  const handleToggle = () => {
    if (disabled) return;
    if (expanded === undefined) setInternalOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  return (
    <div className={clsx('flex flex-col', className)}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        onClick={handleToggle}
        className={clsx(
          ROW_FRAME,
          'group w-full font-medium cursor-pointer',
          active
            ? 'bg-header-active-bg text-on-accent'
            : forceHover
              ? 'bg-action-primary text-on-accent'
              : 'text-sidenav-fg-primary hover:bg-action-primary hover:text-on-accent',
          disabled && 'opacity-40 pointer-events-none',
        )}
      >
        {IconComp && showIcon && <IconComp size="sm" className="shrink-0" />}
        <span className="flex-1 min-w-0 truncate text-left">{title}</span>
        {slot1 && <span className="shrink-0">{slot1}</span>}
        {slot2 && <span className="shrink-0">{slot2}</span>}
        {/* Chevron only renders when there are children to expand/collapse —
            mirrors Figma's chevron.visible ← ShowChildren BOOLEAN binding. */}
        {children && (
          <ChevronDownIcon
            size="sm"
            className={clsx(
              // Always-white parent chevron — `on-accent` is white in both
              // light + dark modes, so the expand/collapse affordance reads
              // cleanly on the dark sidenav surface regardless of theme.
              'shrink-0 text-on-accent transition-transform motion-reduce:transition-none',
              !isOpen && '-rotate-90',
            )}
          />
        )}
      </button>
      {isOpen && children && (
        // Children rows fill the full width (same as the parent row). Visual
        // hierarchy comes from each child's `indent` prop — mirrors the Figma
        // `Indent` BOOLEAN on the NavItem set. WaterfallRow defaults its
        // children to `indent={true}` so the existing waterfall look is
        // preserved without per-call wiring; consumers can override on any
        // child by passing an explicit `indent={false}` (e.g. SideNav body
        // sections that don't want the second-level inset).
        <div className="flex flex-col pt-1">
          {Children.map(children, (child) => {
            if (!isValidElement(child)) return child;
            const childProps = child.props as { indent?: boolean };
            const indent = childProps.indent ?? true;
            return cloneElement(child as ReactElement<{ indent?: boolean }>, {
              indent,
            });
          })}
        </div>
      )}
    </div>
  );
}

// ─── Union type + discriminator ─────────────────────────────────────────────

export type NavItemProps =
  | ItemRowProps
  | GroupRowProps
  | SectionHeadingProps
  | WaterfallRowProps;

export function NavItem(props: NavItemProps) {
  if (props.type === 'group')     return <GroupRow {...props} />;
  if (props.type === 'section')   return <SectionHeading {...props} />;
  if (props.type === 'waterfall') return <WaterfallRow {...props} />;
  return <ItemRow {...props} />;
}
