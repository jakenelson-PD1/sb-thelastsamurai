import { useState } from 'react';
import { clsx } from 'clsx';
import { Avatar } from '../primitives/Avatar';
import { Badge } from '../primitives/Badge';
import { Button } from '../primitives/Button';
import { Timestamp } from '../primitives/Timestamp';
import { DotsHorizontalIcon } from '../primitives/icons/DotsHorizontalIcon';
import { CommentComposer } from './CommentComposer';
import { Tooltip } from '../overlay/Tooltip';

export interface CommentReply {
  id: string;
  authorName: string;
  authorInitials: string;
  authorColor?: string;
  authorVariant?: 'client' | 'firm';
  timestamp: Date | string;
  text: string;
  fileReference?: string;
  filePage?: string;
  onClick?: () => void;
  onMenuClick?: () => void;
}

export interface CommentCardProps {
  authorName: string;
  authorInitials: string;
  authorColor?: string;
  authorVariant?: 'client' | 'firm';
  timestamp: Date | string;
  fileReference?: string;
  filePage?: string;
  text: string;
  isUnread?: boolean;
  replies?: CommentReply[];
  onClick?: () => void;
  onReply?: (text: string) => void;
  onMenuClick?: () => void;
  /** Start with the reply composer open. Used for matrix/showcase rendering. */
  defaultReplyOpen?: boolean;
  /** Initial text inside the reply composer (only relevant when defaultReplyOpen). */
  defaultReplyText?: string;
  className?: string;
}

export interface CommentRowProps {
  authorName: string;
  authorInitials: string;
  authorColor?: string;
  authorVariant?: 'client' | 'firm';
  timestamp: Date | string;
  fileReference?: string;
  filePage?: string;
  text: string;
  isUnread?: boolean;
  onClick?: () => void;
  onMenuClick?: () => void;
}

export function CommentRow({
  authorName,
  authorInitials,
  authorColor,
  authorVariant = 'firm',
  timestamp,
  fileReference,
  filePage,
  text,
  isUnread,
  onClick,
  onMenuClick,
}: CommentRowProps) {
  return (
    <div
      className={clsx(
        // Mirrors the canonical CommentRow atom (Figma 1212:3): HORIZONTAL,
        // p-2, with a top-aligned Avatar and a 12px (gap-3) gap to the content
        // column. The content column stacks the header block and the body 8px
        // apart (gap-2).
        'group rounded-card p-2 flex items-start gap-3 transition-colors',
        authorVariant === 'client' ? 'bg-status-purple-surface' : '',
        onClick && authorVariant === 'client' && 'hover:bg-status-purple-surface-hover cursor-pointer',
        onClick && authorVariant !== 'client' && 'hover:bg-surface cursor-pointer',
      )}
      onClick={onClick}
    >
      <Avatar
        size="sm"
        initials={authorInitials}
        variant={authorVariant}
        style={authorColor ? { backgroundColor: authorColor } : undefined}
        className="shrink-0"
      />

      {/* ContentColumn — 8px between the header block and the body; clips long
          content like the canonical (overflow-clip). */}
      <div className="flex-1 min-w-0 flex flex-col gap-2 overflow-hidden">
        {/* Header — AuthorInfo (name+timestamp tightly stacked over the file
            reference) on the left; Unread badge + menu on the right.
            items-center per the canonical Header. */}
        <div className="flex items-center gap-2 w-full min-w-0">
          {/* AuthorInfo — name/timestamp row directly above the file-reference
              row (gap 0), matching the canonical. */}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-body-md font-semibold text-primary shrink-0">{authorName}</span>
              <Timestamp date={timestamp} className="text-label-md text-muted truncate" />
            </div>
            {fileReference && (
              <div className="flex items-center gap-2 w-full min-w-0">
                <span className="text-label-md text-muted truncate">{fileReference}</span>
                {filePage && (
                  <span className="text-label-md font-semibold text-muted shrink-0">{filePage}</span>
                )}
              </div>
            )}
          </div>

          {/* RightGroup — Unread badge + hover-revealed menu */}
          {(isUnread || onMenuClick) && (
            <div className="shrink-0 flex items-center gap-2">
              {isUnread && <Badge variant="brand">Unread</Badge>}
              {onMenuClick && (
                <div
                  className="overflow-hidden w-0 group-hover:w-7 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out"
                  onClick={e => e.stopPropagation()}
                >
                  <Tooltip content="More options">
                    <Button
                      variant="ghost"
                      size="xs"
                      iconOnly
                      aria-label="More options"
                      className="rounded-pill hover:!bg-recessed"
                      startIcon={<DotsHorizontalIcon size="sm" />}
                      onClick={onMenuClick}
                    />
                  </Tooltip>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Body */}
        <p className="text-body-sm text-secondary">{text}</p>
      </div>
    </div>
  );
}

export function CommentCard({
  authorName,
  authorInitials,
  authorColor,
  authorVariant,
  timestamp,
  fileReference,
  filePage,
  text,
  isUnread,
  replies,
  onClick,
  onReply,
  onMenuClick,
  defaultReplyOpen,
  defaultReplyText,
  className,
}: CommentCardProps) {
  const [isReplying, setIsReplying] = useState(defaultReplyOpen ?? false);

  return (
    <div className={clsx(
      // Canonical CommentCard (Figma 1214:17): bg-elevated, rounded-card, p-1,
      // gap-2, and a two-layer drop shadow == shadow-card. No border — the card
      // is defined purely by the shadow so it reads as a distinct surface on
      // bg-elevated/canvas.
      'bg-elevated rounded-card p-1 flex flex-col gap-2 shadow-card',
      className,
    )}>
      <CommentRow
        authorName={authorName}
        authorInitials={authorInitials}
        authorColor={authorColor}
        authorVariant={authorVariant}
        timestamp={timestamp}
        fileReference={fileReference}
        filePage={filePage}
        text={text}
        isUnread={isUnread}
        onClick={onClick}
        onMenuClick={onMenuClick}
      />
      {replies?.map(reply => (
        <CommentRow
          key={reply.id}
          authorName={reply.authorName}
          authorInitials={reply.authorInitials}
          authorColor={reply.authorColor}
          authorVariant={reply.authorVariant}
          timestamp={reply.timestamp}
          fileReference={reply.fileReference}
          filePage={reply.filePage}
          text={reply.text}
          onClick={reply.onClick}
          onMenuClick={reply.onMenuClick}
        />
      ))}

      {onReply && (
        isReplying ? (
          <CommentComposer
            autoFocus
            defaultValue={defaultReplyText}
            className="ml-10 mr-1 mb-1"
            onSubmit={(text) => {
              onReply(text);
              setIsReplying(false);
            }}
            onCancel={() => setIsReplying(false)}
          />
        ) : (
          // Canonical "Reply" affordance (Figma 1214:52): plain Body SM / fg-muted
          // text, indented pl-[50px] to align under the comment body. 50px is a
          // composed offset (card p-1 + row p-2 + avatar 32 + gap-3) with no
          // single scale token, so it's an arbitrary value matching the canonical.
          <button
            type="button"
            className="pl-[50px] pb-1 text-left text-body-sm text-muted hover:text-secondary transition-colors w-fit"
            onClick={() => setIsReplying(true)}
          >
            Reply
          </button>
        )
      )}
    </div>
  );
}
