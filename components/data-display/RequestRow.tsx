import { clsx } from 'clsx';
import { Avatar } from '../primitives/Avatar';
import { ActivityIcon } from '../primitives/icons/ActivityIcon';
import { AlertTriangleIcon } from '../primitives/icons/AlertTriangleIcon';
import { CheckIcon } from '../primitives/icons/CheckIcon';
import { XIcon } from '../primitives/icons/XIcon';
import { PaperclipIcon } from '../primitives/icons/PaperclipIcon';
import { Flag02Icon } from '../primitives/icons/Flag02Icon';
import { MessageCircle01Icon } from '../primitives/icons/MessageCircle01Icon';
import { File02Icon } from '../primitives/icons/File02Icon';
import { Lock01Icon } from '../primitives/icons/Lock01Icon';

export type StatusIndicator = 'warning' | 'in-progress' | 'rejected' | 'complete' | 'none';

export type MetaItem =
  | { type: 'comments';    count: number }
  | { type: 'documents';   count: number }
  | { type: 'flag' }
  | { type: 'assignee';    initials: string; color?: string; locked?: boolean }
  | { type: 'due-date';    date: string }
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

// Icons omit aria-label so their internal logic sets aria-hidden="true" automatically.
function renderStatus(status: StatusIndicator) {
  if (status === 'warning')     return <AlertTriangleIcon size={16} className="text-status-warning" />;
  if (status === 'in-progress') return <ActivityIcon      size={16} className="text-action-primary" />;
  if (status === 'rejected')    return <XIcon             size={16} className="text-status-error" />;
  if (status === 'complete')    return <CheckIcon         size={16} className="text-status-success" />;
  return <span aria-hidden="true" className="inline-block h-4 w-4" />;
}

// Icons omit aria-label so the icon component's internal logic sets aria-hidden="true".
function renderMetaItem(item: MetaItem): JSX.Element {
  switch (item.type) {
    case 'comments':
      return (
        <span key="comments" className={clsx('flex items-center gap-1 text-label-md text-fg-muted', item.count === 0 && 'opacity-40')}>
          <MessageCircle01Icon size={16} />
          {item.count}
        </span>
      );

    case 'documents':
      return (
        <span key="documents" className={clsx('flex items-center gap-1 text-label-md text-fg-muted', item.count === 0 && 'opacity-40')}>
          <File02Icon size={16} />
          {item.count}
        </span>
      );

    case 'flag':
      return (
        <span key="flag" className="flex h-6 w-6 items-center justify-center rounded-pill bg-purple-50 text-purple-500">
          <Flag02Icon size={14} />
        </span>
      );

    case 'assignee': {
      const avatar = (
        <Avatar
          size="xs"
          initials={item.initials}
          style={item.color ? { backgroundColor: item.color } : undefined}
        />
      );
      return item.locked ? (
        <span key="assignee" className="relative inline-flex">
          {avatar}
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-pill bg-elevated">
            <Lock01Icon size={10} className="text-fg-muted" />
          </span>
        </span>
      ) : (
        <span key="assignee">{avatar}</span>
      );
    }

    case 'due-date':
      return (
        <span key="due-date" className="text-body-md text-fg-primary">
          {item.date}
        </span>
      );

    case 'e-signature':
      return (
        <span key="e-signature" className="rounded-pill border border-line bg-surface px-2 py-0.5 text-label-md text-fg-secondary">
          E-Signature
        </span>
      );
  }
}

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
  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Enter') onClick?.();
        if (e.key === ' ') { e.preventDefault(); onClick?.(); }
      }}
      className={clsx(
        'flex items-center border-l-2 px-4 py-2 min-h-[56px]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary rounded-control',
        'cursor-pointer select-none',
        selected
          ? 'bg-status-info-surface border-action-primary hover:bg-status-info-surface'
          : 'bg-canvas border-transparent hover:bg-surface',
        className,
      )}
    >
      {/* Left zone */}
      <div className="flex items-center gap-2 w-14 shrink-0">
        {renderStatus(status)}
        <span aria-hidden="true" className="text-label-md text-fg-muted font-normal">{orderNumber}</span>
      </div>

      {/* Main zone */}
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
        {/* Row 1: title + optional attachment */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-body-md font-medium text-fg-primary truncate flex-1 min-w-0">
            {title}
          </span>
          {attachmentLabel && (
            <button
              type="button"
              className="flex items-center gap-1 text-body-md text-action-primary shrink-0 hover:underline"
              onClick={(e) => { e.stopPropagation(); onAttachmentClick?.(); }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  e.preventDefault();
                  onAttachmentClick?.();
                }
              }}
            >
              <PaperclipIcon size={14} />
              {attachmentLabel}
            </button>
          )}
        </div>

        {/* Row 2: description (selected only) */}
        {selected && description && (
          <p className="text-body-md text-fg-secondary">{description}</p>
        )}
      </div>

      {/* Right zone */}
      <div className="flex items-center gap-3 shrink-0 pl-4">
        {meta.map(renderMetaItem)}
      </div>
    </div>
  );
}
