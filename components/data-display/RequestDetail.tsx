import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import { RequestDetailActionBar } from './RequestDetailActionBar';
import { RequestDetailHeader } from './RequestDetailHeader';
import { RequestDetailAssignments } from './RequestDetailAssignments';
import { FileDropZone } from './FileDropZone';
import { ClientFilesSection } from './ClientFilesSection';
import { ActivitySection } from './ActivitySection';
import type { StatusIndicator } from './RequestRow';
import type { ClientFile } from './ClientFilesSection';
import type { CommentThread, HistoryItem } from './ActivitySection';
import type { Assignee } from './RequestDetailAssignments';

export interface RequestDetailProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  createdBy?: string;
  dueDate?: string;
  priority?: 'high' | 'medium' | 'low' | null;
  clientAssignees?: Assignee[];
  firmAssignees?: Assignee[];
  files?: ClientFile[];
  comments?: CommentThread[];
  commentCount?: number;
  historyItems?: HistoryItem[];
  onChangeState?: (state: StatusIndicator) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onMore?: () => void;
  onAddAssignee?: () => void;
  onFilesDropped?: (files: File[]) => void;
  onBrowse?: () => void;
  onESignatureClick?: () => void;
  onDownloadFiles?: (ids: string[]) => void;
  onDeleteFiles?: (ids: string[]) => void;
  onImportFiles?: () => void;
  onPreviewFile?: (id: string) => void;
  onComment?: (text: string) => void;
  onReply?: (threadId: string, text: string) => void;
  onCommentClick?: (commentId: string) => void;
  onCommentMenuClick?: (commentId: string) => void;
  className?: string;
}

export function RequestDetail({
  orderNumber,
  title,
  description,
  status: initialStatus,
  createdBy,
  dueDate,
  priority,
  clientAssignees = [],
  firmAssignees = [],
  files = [],
  comments = [],
  commentCount,
  historyItems = [],
  onChangeState,
  onEdit,
  onDelete,
  onMore,
  onAddAssignee,
  onFilesDropped,
  onBrowse,
  onESignatureClick,
  onDownloadFiles,
  onDeleteFiles,
  onImportFiles,
  onPreviewFile,
  onComment,
  onReply,
  onCommentClick,
  onCommentMenuClick,
  className,
}: RequestDetailProps) {
  const [status, setStatus] = useState<StatusIndicator | undefined>(initialStatus);

  // Keep internal status in sync when the selected request changes from outside
  useEffect(() => { setStatus(initialStatus); }, [initialStatus]);

  const handleChangeState = (state: StatusIndicator) => {
    setStatus(state);
    onChangeState?.(state);
  };

  return (
    <div className={clsx('flex flex-col min-h-full bg-elevated w-full', className)}>
      {/* Action bar — sticky, must sit above the accordion section headers
          (Assignments / Client attached files / Activity), which are sticky
          at top-12 with z-20. Bumped to z-30 so those headers slide BEHIND it
          as they scroll up. */}
      <div className="sticky top-0 z-30 bg-elevated">
        <RequestDetailActionBar
          currentState={status}
          onChangeState={handleChangeState}
          onEdit={onEdit}
          onDelete={onDelete}
          onMore={onMore}
        />
      </div>

      <RequestDetailHeader
        orderNumber={orderNumber}
        title={title}
        description={description}
        status={status}
        createdBy={createdBy}
        dueDate={dueDate}
        priority={priority}
      />
      <RequestDetailAssignments
        clientAssignees={clientAssignees}
        firmAssignees={firmAssignees}
        onAddAssignee={onAddAssignee}
      />
      <FileDropZone
        onFilesDropped={onFilesDropped}
        onBrowse={onBrowse}
        onESignatureClick={onESignatureClick}
      />
      <ClientFilesSection
        files={files}
        onDownload={onDownloadFiles}
        onDelete={onDeleteFiles}
        onImport={onImportFiles}
        onPreview={onPreviewFile}
      />
      <ActivitySection
        comments={comments}
        commentCount={commentCount}
        historyItems={historyItems}
        onComment={onComment}
        onReply={onReply}
        onCommentClick={onCommentClick}
        onCommentMenuClick={onCommentMenuClick}
      />
    </div>
  );
}
