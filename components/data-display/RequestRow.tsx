import { clsx } from 'clsx';
import { Avatar } from '../primitives/Avatar';
import { Badge } from '../primitives/Badge';
import { Button } from '../primitives/Button';
import { Checkbox } from '../forms/Checkbox';
import { StatusDot } from '../primitives/StatusDot';
import { Timestamp } from '../primitives/Timestamp';
import { HighPriorityFlag } from '../primitives/HighPriorityFlag';
import { Tooltip } from '../overlay/Tooltip';
import { renderStatus } from './statusUtils';
import { PaperclipIcon } from '../primitives/icons/PaperclipIcon';
import { MessageCircle01Icon } from '../primitives/icons/MessageCircle01Icon';
import { File02Icon } from '../primitives/icons/File02Icon';

export type StatusIndicator = 'fulfilled' | 'returned' | 'accepted' | 'outstanding' | 'none';

export type MetaItem =
  // `dot` drives the read-state styling: present (unread/attention) → dark icon
  // + count; absent (read) → muted. Same pattern as FileRow.
  | { type: 'comments';    count: number; dot?: 'unread' | 'attention'; onClick?: () => void }
  | { type: 'documents';   count: number; dot?: 'unread' | 'attention'; onClick?: () => void }
  | { type: 'flag';                                                                onClick?: () => void }
  | { type: 'assignee';    initials: string; color?: string; textColor?: string; onClick?: () => void }
  | { type: 'due-date';    date: string;                                           onClick?: () => void }
  | { type: 'e-signature'; onClick?: () => void };

export interface RequestRowProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  attachmentLabel?: string;
  onAttachmentClick?: () => void;
  meta?: MetaItem[];
  selected?: boolean;
  /**
   * Whether the row is "checked" for bulk operations. Independent from
   * `selected` (which controls expansion/highlight). Clicking the checkbox
   * toggles only this state — the row's expansion is untouched.
   */
  checked?: boolean;
  /** Called when the row checkbox is toggled. */
  onCheckedChange?: (checked: boolean) => void;
  /** Force the hover background for static showcase rendering (Matrix stories). */
  forceHover?: boolean;
  onClick?: () => void;
  className?: string;
}

const STATUS_TOOLTIP: Record<StatusIndicator, string> = {
  fulfilled:   'Awaiting review',
  returned:    'Returned',
  accepted:    'Accepted',
  outstanding: 'Outstanding',
  none:        '',
};

function statusDot(dot?: 'unread' | 'attention') {
  if (!dot) return null;
  // Canonical StatusDot — overlaps the meta icon's top-right with a canvas halo.
  return <StatusDot variant={dot} className="absolute -top-1 -right-1 ring-1 ring-canvas" />;
}

// Common wrapper for meta-button click handlers: stop event propagation so
// clicks on individual meta controls don't fall through to the row-level
// selection handler.
function withStopPropagation(onClick?: () => void) {
  return (e: React.MouseEvent) => { e.stopPropagation(); onClick?.(); };
}

// Lookup type: each MetaItem type maps to its specific variant
type MetaByType = { [K in MetaItem['type']]?: Extract<MetaItem, { type: K }> };

export function RequestRow({
  orderNumber,
  title,
  description,
  status = 'none',
  attachmentLabel,
  onAttachmentClick,
  meta = [],
  selected = false,
  checked = false,
  onCheckedChange,
  forceHover = false,
  onClick,
  className,
}: RequestRowProps) {
  const statusEl = renderStatus(status, true) as React.ReactElement;
  const statusTooltipText = STATUS_TOOLTIP[status];

  // Build fixed-column lookup — O(n) where n ≤ 6
  const metaByType = meta.reduce<MetaByType>((acc, item) => {
    (acc as Record<string, MetaItem>)[item.type] = item;
    return acc;
  }, {});

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick?.();
        if (e.key === ' ') { e.preventDefault(); onClick?.(); }
      }}
      className={clsx(
        'relative flex items-center gap-3 border-l-2 border-b border-b-line pl-3 pr-2 py-1',
        // Figma fixes row height per state: 40 for Default/Hover, 50 for Selected.
        selected ? 'min-h-[50px]' : 'min-h-10',
        'select-none',
        onClick ? 'cursor-pointer' : '',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-action-primary',
        selected
          ? 'bg-row-selected border-l-action-primary hover:bg-row-selected'
          : forceHover
            ? 'bg-surface border-l-transparent'
            : 'bg-elevated border-l-transparent hover:bg-surface',
        className,
      )}
    >

      {/* Left zone — checkbox + status icon + order number.
          The checkbox is for bulk-selection across many rows. It's independent
          from `selected` (which expands the row). Click is stopped from
          bubbling so toggling the checkbox doesn't also toggle row expansion. */}
      <div className="relative z-10 flex items-center gap-3 shrink-0">
        <span
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            // Space normally toggles row selection — let the checkbox itself
            // handle Space when focus is inside its input.
            if (e.key === ' ') e.stopPropagation();
          }}
          className="inline-flex"
        >
          <Checkbox
            checked={checked}
            onChange={(e) => onCheckedChange?.(e.target.checked)}
            aria-label={`Select request ${orderNumber}`}
          />
        </span>
        {statusTooltipText
          ? <Tooltip content={statusTooltipText}>{statusEl}</Tooltip>
          : statusEl
        }
        <span aria-hidden="true" className="text-body-sm font-bold text-primary">{orderNumber}</span>
      </div>

      {/* Main zone */}
      <div className="relative z-10 flex-1 min-w-0 flex flex-col justify-center gap-0">
        {/* Row 1: title + optional attachment */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className="text-body-sm font-medium text-primary truncate shrink min-w-0">
            {title}
          </span>
          {attachmentLabel && (
            <button
              type="button"
              className="flex items-center gap-1 text-label-sm text-link shrink-0 underline hover:no-underline"
              onClick={(e) => { e.stopPropagation(); onAttachmentClick?.(); }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  e.preventDefault();
                  onAttachmentClick?.();
                }
              }}
            >
              <PaperclipIcon size="sm" />
              {attachmentLabel}
            </button>
          )}
        </div>

        {/* Row 2: description (selected only) */}
        {selected && description && (
          <p className="text-label-sm text-muted truncate">{description}</p>
        )}
      </div>

      {/* Right zone — fixed-column grid sized exactly to each attribute's
          max content width so visible spacing equals the column gap. Every
          attribute keeps its dedicated slot. 8px between columns.
          Order: E-Sig → Assignee → Due Date → [Comments + Documents] → Flag.
          Comments and Documents share a single grid cell with 0px between
          them — they read as a paired meta unit. */}
      <div className="relative z-10 grid grid-cols-[88px_32px_76px_82px_24px] gap-2 items-center shrink-0 pl-3">

        {/* Col 1 — E-Signature (bare Badge — matches Figma. The Button wrapper
            added no visual, only a click affordance, so it's dropped: this is a
            display-only status pill.) */}
        <div className="flex items-center justify-end">
          {metaByType['e-signature'] && (
            <Tooltip content="E-signature required">
              <Badge variant="cerulean" className="relative z-10">E-Signature</Badge>
            </Tooltip>
          )}
        </div>

        {/* Col 2 — Assignee (bare Avatar — matches Figma; no Button wrapper.
            Display-only; the row itself handles selection clicks.) */}
        <div className="flex items-center justify-end">
          {metaByType['assignee'] && (() => {
            const item = metaByType['assignee']!;
            return (
              <Tooltip content={`Assignee: ${item.initials}`}>
                <span className="relative z-10 inline-flex">
                  <Avatar
                    size="xs"
                    initials={item.initials}
                    style={item.color ? { backgroundColor: item.color, color: item.textColor } : undefined}
                  />
                </span>
              </Tooltip>
            );
          })()}
        </div>

        {/* Col 3 — Due Date (canonical Timestamp, matches Figma's Timestamp
            instance). Body MD / fg-secondary. Wrapped in a clickable span only
            when an onClick is supplied so the affordance is preserved without
            re-introducing a Button. */}
        <div className="flex items-center justify-end">
          {metaByType['due-date'] && (() => {
            const item = metaByType['due-date']!;
            const ts = (
              <Timestamp
                date={item.date}
                format="date"
                className="relative z-10 text-body-md text-secondary"
              />
            );
            return (
              <Tooltip content="Due date">
                {item.onClick ? (
                  <span
                    role="button"
                    tabIndex={0}
                    className="relative z-10 inline-flex cursor-pointer"
                    onClick={withStopPropagation(item.onClick)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.stopPropagation();
                        e.preventDefault();
                        item.onClick?.();
                      }
                    }}
                  >
                    {ts}
                  </span>
                ) : ts}
              </Tooltip>
            );
          })()}
        </div>

        {/* Col 4 — Comments + Documents (paired, 0px between). Each lives in
            its own 41px sub-slot so an attribute's position is stable even
            when its partner is missing. */}
        <div className="grid grid-cols-[41px_41px] items-center">
          <div className="flex items-center">
          {metaByType['comments'] && (() => {
            const item = metaByType['comments']!;
            const displayCount = item.count > 99 ? '99+' : item.count;
            return (
              <Tooltip content={`${item.count} comment${item.count !== 1 ? 's' : ''}`}>
                <Button
                  variant="ghost"
                  size="xxs"
                  // `!` overrides the ghost variant's default text-secondary so
                  // the dot's read-state color actually wins (icon + count).
                  className={clsx('relative z-10 w-[41px]', item.dot ? '!text-primary' : '!text-muted')}
                  onClick={withStopPropagation(item.onClick)}
                  startIcon={
                    <span className="relative inline-flex">
                      <MessageCircle01Icon size="sm" />
                      {item.dot === 'unread' && statusDot('unread')}
                    </span>
                  }
                >
                  {displayCount}
                </Button>
              </Tooltip>
            );
          })()}
          </div>
          <div className="flex items-center">
          {metaByType['documents'] && (() => {
            const item = metaByType['documents']!;
            const displayCount = item.count > 99 ? '99+' : item.count;
            return (
              <Tooltip content={`${item.count} document${item.count !== 1 ? 's' : ''}`}>
                <Button
                  variant="ghost"
                  size="xxs"
                  className={clsx('relative z-10 w-[41px]', item.dot ? '!text-primary' : '!text-muted')}
                  onClick={withStopPropagation(item.onClick)}
                  startIcon={
                    <span className="relative inline-flex">
                      <File02Icon size="sm" />
                      {statusDot(item.dot)}
                    </span>
                  }
                >
                  {displayCount}
                </Button>
              </Tooltip>
            );
          })()}
          </div>
        </div>

        {/* Col 5 — Flag (canonical HighPriorityFlag — filled purple pill). */}
        <div className="flex items-center justify-end">
          {metaByType['flag'] && (() => {
            const item = metaByType['flag']!;
            return (
              <HighPriorityFlag
                className="relative z-10"
                onClick={withStopPropagation(item.onClick)}
              />
            );
          })()}
        </div>

      </div>
    </div>
  );
}
