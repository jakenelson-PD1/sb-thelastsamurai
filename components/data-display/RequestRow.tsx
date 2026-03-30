import { clsx } from 'clsx';
import { iconSize } from '../../tokens/iconSizes';
import { Avatar } from '../primitives/Avatar';
import { Badge } from '../primitives/Badge';
import { Tooltip } from '../overlay/Tooltip';
import { renderStatus } from './statusUtils';
import { PaperclipIcon } from '../primitives/icons/PaperclipIcon';
import { Flag02Icon } from '../primitives/icons/Flag02Icon';
import { MessageCircle01Icon } from '../primitives/icons/MessageCircle01Icon';
import { File02Icon } from '../primitives/icons/File02Icon';
import { Lock01Icon } from '../primitives/icons/Lock01Icon';

export type StatusIndicator = 'fulfilled' | 'returned' | 'accepted' | 'outstanding' | 'none';

export type MetaItem =
  | { type: 'comments';    count: number; unread?: boolean; dot?: 'unread' | 'attention'; onClick?: () => void }
  | { type: 'documents';   count: number; unread?: boolean; dot?: 'unread' | 'attention'; onClick?: () => void }
  | { type: 'flag';                                                                onClick?: () => void }
  | { type: 'assignee';    initials: string; color?: string; textColor?: string; locked?: boolean; onClick?: () => void }
  | { type: 'due-date';    date: string;                                           onClick?: () => void }
  | { type: 'e-signature' };

export interface RequestRowProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  attachmentLabel?: string;
  onAttachmentClick?: () => void;
  meta?: MetaItem[];
  selected?: boolean;
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
  return (
    <span
      className="absolute -top-1 -right-1 h-2 w-2 rounded-full ring-1 ring-canvas"
      style={{ backgroundColor: dot === 'unread' ? 'var(--color-dot-unread)' : 'var(--color-dot-attention)' }}
    />
  );
}

const metaButtonBase = 'relative z-10 inline-flex items-center justify-center py-1 transition-colors hover:bg-recessed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary';

function metaButton(onClick: (() => void) | undefined, className: string, children: React.ReactNode): JSX.Element {
  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      className={clsx(metaButtonBase, className)}
    >
      {children}
    </button>
  );
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
        'relative flex items-center gap-3 border-l-2 border-b border-b-line px-3 py-1 min-h-10',
        'select-none',
        onClick ? 'cursor-pointer' : '',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-action-primary',
        selected
          ? 'bg-row-selected-bg border-l-row-selected-border hover:bg-row-selected-bg'
          : 'bg-row-bg border-l-transparent hover:bg-row-hover-bg',
        className,
      )}
    >

      {/* Left zone — status icon + order number */}
      <div className="relative z-10 flex items-center gap-3 shrink-0">
        {statusTooltipText
          ? <Tooltip content={statusTooltipText}>{statusEl}</Tooltip>
          : statusEl
        }
        <span aria-hidden="true" className="text-body-sm font-bold text-fg-primary">{orderNumber}</span>
      </div>

      {/* Main zone */}
      <div className="relative z-10 flex-1 min-w-0 flex flex-col justify-center gap-0">
        {/* Row 1: title + optional attachment */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className="text-body-sm font-medium text-fg-primary truncate shrink min-w-0">
            {title}
          </span>
          {attachmentLabel && (
            <button
              type="button"
              className="flex items-center gap-1 text-label-sm text-fg-link shrink-0 underline hover:no-underline"
              onClick={(e) => { e.stopPropagation(); onAttachmentClick?.(); }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  e.preventDefault();
                  onAttachmentClick?.();
                }
              }}
            >
              <PaperclipIcon size={iconSize.sm} />
              {attachmentLabel}
            </button>
          )}
        </div>

        {/* Row 2: description (selected only) */}
        {selected && description && (
          <p className="text-label-sm text-fg-muted truncate">{description}</p>
        )}
      </div>

      {/* Right zone — 6 fixed columns, always in the same order
          E-Sig 88px · Assignee 32px · Due Date 80px · Comments 44px · Documents 44px · Flag 32px
          Total slot width: 320px + 12px left padding = 332px */}
      <div className="relative z-10 flex gap-0 items-center shrink-0 pl-3 ml-auto">

        {/* E-Signature — 88px */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 88 }}
          aria-hidden={!metaByType['e-signature'] ? true : undefined}
        >
          {metaByType['e-signature'] && (
            <Badge variant="cerulean">E-Signature</Badge>
          )}
        </div>

        {/* Assignee — 32px */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 32 }}
          aria-hidden={!metaByType['assignee'] ? true : undefined}
        >
          {metaByType['assignee'] && (() => {
            const item = metaByType['assignee']!;
            return (
              <Tooltip content={`Assignee: ${item.initials}`}>
                {metaButton(item.onClick, 'rounded-full px-1',
                  <span className="relative inline-flex">
                    <Avatar
                      size="xs"
                      initials={item.initials}
                      style={item.color ? { backgroundColor: item.color, color: item.textColor } : undefined}
                    />
                    {item.locked && (
                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-elevated">
                        <Lock01Icon size={iconSize.sm} className="text-fg-muted" />
                      </span>
                    )}
                  </span>
                )}
              </Tooltip>
            );
          })()}
        </div>

        {/* Due Date — 80px */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 80 }}
          aria-hidden={!metaByType['due-date'] ? true : undefined}
        >
          {metaByType['due-date'] && (() => {
            const item = metaByType['due-date']!;
            return (
              <Tooltip content="Due date">
                {metaButton(item.onClick,
                  'px-1 rounded-control text-label-md font-medium text-fg-secondary',
                  <>{item.date}</>
                )}
              </Tooltip>
            );
          })()}
        </div>

        {/* Comments — 44px */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 44 }}
          aria-hidden={!metaByType['comments'] ? true : undefined}
        >
          {metaByType['comments'] && (() => {
            const item = metaByType['comments']!;
            const displayCount = item.count > 99 ? '99+' : item.count;
            return (
              <Tooltip content={`${item.count} comment${item.count !== 1 ? 's' : ''}`}>
                {metaButton(item.onClick,
                  'gap-1 px-1 rounded-control text-label-md',
                  <span className="contents" style={item.unread ? { color: 'var(--color-meta-unread)' } : undefined}>
                    <span className="relative inline-flex">
                      <MessageCircle01Icon size={iconSize.sm} className={item.unread ? undefined : 'text-fg-muted'} />
                      {item.dot === 'unread' && statusDot('unread')}
                    </span>
                    <span className={item.unread ? undefined : 'text-fg-muted'}>{displayCount}</span>
                  </span>
                )}
              </Tooltip>
            );
          })()}
        </div>

        {/* Documents — 44px */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 44 }}
          aria-hidden={!metaByType['documents'] ? true : undefined}
        >
          {metaByType['documents'] && (() => {
            const item = metaByType['documents']!;
            const displayCount = item.count > 99 ? '99+' : item.count;
            return (
              <Tooltip content={`${item.count} document${item.count !== 1 ? 's' : ''}`}>
                {metaButton(item.onClick,
                  'gap-1 px-1 rounded-control text-label-md',
                  <span className="contents" style={item.unread ? { color: 'var(--color-meta-unread)' } : undefined}>
                    <span className="relative inline-flex">
                      <File02Icon size={iconSize.sm} className={item.unread ? undefined : 'text-fg-muted'} />
                      {statusDot(item.dot)}
                    </span>
                    <span className={item.unread ? undefined : 'text-fg-muted'}>{displayCount}</span>
                  </span>
                )}
              </Tooltip>
            );
          })()}
        </div>

        {/* Flag — 32px */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 32 }}
          aria-hidden={!metaByType['flag'] ? true : undefined}
        >
          {metaByType['flag'] && (() => {
            const item = metaByType['flag']!;
            return (
              <Tooltip content="High priority">
                {metaButton(item.onClick, 'rounded-control px-1 text-status-purple-fg',
                  <Flag02Icon size={iconSize.sm} />
                )}
              </Tooltip>
            );
          })()}
        </div>

      </div>
    </div>
  );
}
