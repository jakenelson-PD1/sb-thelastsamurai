import { clsx } from 'clsx';
import { useState } from 'react';
import { Avatar } from '../primitives/Avatar';
import { Timestamp } from '../primitives/Timestamp';
import { Tabs } from '../navigation/Tabs';
import { CountBadge } from '../primitives/CountBadge';
import { AccordionItem } from './Accordion';
import { CommentCard } from './CommentCard';
import type { CommentReply } from './CommentCard';
import { CommentComposer } from './CommentComposer';

export interface CommentItem {
  id: string;
  authorName: string;
  authorInitials: string;
  authorColor?: string;
  authorVariant?: 'client' | 'firm';
  timestamp: Date | string;
  text: string;
  fileReference?: string;
  filePage?: string;
  isUnread?: boolean;
}

export interface CommentThread {
  id: string;
  items: CommentItem[];
}

export interface HistoryItem {
  id: string;
  actorName: string;
  actorInitials: string;
  action: string;
  timestamp: Date | string;
}

export interface ActivitySectionProps {
  comments?: CommentThread[];
  commentCount?: number;
  historyItems?: HistoryItem[];
  onComment?: (text: string) => void;
  onReply?: (threadId: string, text: string) => void;
  onCommentClick?: (commentId: string) => void;
  onCommentMenuClick?: (commentId: string) => void;
  className?: string;
}

export function ActivitySection({
  comments = [],
  commentCount,
  historyItems = [],
  onComment,
  onReply,
  onCommentClick,
  onCommentMenuClick,
  className,
}: ActivitySectionProps) {
  const [activeTab, setActiveTab] = useState('comments');

  const tabs = [
    {
      label: commentCount != null
        ? <span className="flex items-center gap-2">Comments <CountBadge>{commentCount}</CountBadge></span>
        : 'Comments',
      value: 'comments',
    },
    {
      label: historyItems.length > 0
        ? <span className="flex items-center gap-2">Request History <CountBadge>{historyItems.length}</CountBadge></span>
        : 'Request History',
      value: 'history',
    },
  ];

  return (
    // Collapsible "Activity" section — canonical AccordionItem header (Body SM
    // Medium title + chevron, bg-recessed) is the OUTER wrapper. Inside, the
    // Comments / Request History tabs sit ABOVE the request-level composer,
    // followed by the comment cards. Mirrors the ClientFilesSection /
    // RequestDetailAssignments section pattern on the Request Detail page.
    <AccordionItem
      title="Activity"
      size="md"
      defaultOpen
      sticky
      stickyTop="top-12"
      className={clsx(className)}
    >
      {/* Tabs — inset 24px to align with content, 16px below section header */}
      <div className="px-6 mt-4">
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      {/* Tab content — 24px below tabs, 24px between composer and first card */}
      <div className="px-6 pt-6 pb-3 flex flex-col gap-4">
        {activeTab === 'comments' && (
          <>
            {/* Request-level comment composer at top */}
            <CommentComposer
              placeholder="Leave a request-level comment here…"
              onSubmit={onComment}
            />
            {/* Gap-separated cards (matches Figma CommentsStack — no bordered
                wrapper). 12px between cards. */}
            <div className="flex flex-col gap-3">
            {comments.map((thread) => {
              const [root, ...rest] = thread.items;
              const replies: CommentReply[] = rest.map((item) => ({
                id: item.id,
                authorName: item.authorName,
                authorInitials: item.authorInitials,
                authorColor: item.authorColor,
                authorVariant: item.authorVariant,
                timestamp: item.timestamp,
                text: item.text,
                fileReference: item.fileReference,
                filePage: item.filePage,
                onClick: onCommentClick ? () => onCommentClick(item.id) : undefined,
                onMenuClick: onCommentMenuClick ? () => onCommentMenuClick(item.id) : undefined,
              }));
              return (
                <CommentCard
                  key={thread.id}
                  authorName={root.authorName}
                  authorInitials={root.authorInitials}
                  authorColor={root.authorColor}
                  authorVariant={root.authorVariant}
                  timestamp={root.timestamp}
                  fileReference={root.fileReference}
                  filePage={root.filePage}
                  text={root.text}
                  isUnread={root.isUnread}
                  replies={replies.length > 0 ? replies : undefined}
                  onClick={onCommentClick ? () => onCommentClick(root.id) : undefined}
                  onMenuClick={onCommentMenuClick ? () => onCommentMenuClick(root.id) : undefined}
                  onReply={onReply ? (text) => onReply(thread.id, text) : undefined}
                />
              );
            })}
            </div>
          </>
        )}

        {activeTab === 'history' && (
          <>
            {historyItems.map((h) => (
              <div key={h.id} className="flex items-center gap-3 py-2">
                <Avatar size="xs" initials={h.actorInitials} className="shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-body-sm font-medium text-primary">{h.actorName}</span>
                  <span className="text-body-sm text-secondary"> {h.action}</span>
                </div>
                <Timestamp date={h.timestamp} className="text-label-sm text-muted shrink-0" />
              </div>
            ))}
          </>
        )}
      </div>
    </AccordionItem>
  );
}
