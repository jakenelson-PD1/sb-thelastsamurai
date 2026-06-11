import { clsx } from 'clsx';
import { Badge } from '../primitives/Badge';
import { HighPriorityFlag } from '../primitives/HighPriorityFlag';
import { renderStatus } from './statusUtils';
import type { StatusIndicator } from './RequestRow';

export interface RequestDetailHeaderProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  createdBy?: string;
  dueDate?: string;
  priority?: 'high' | 'medium' | 'low' | null;
  className?: string;
}


export function RequestDetailHeader({
  orderNumber,
  title,
  description,
  status,
  createdBy,
  dueDate,
  priority,
  className,
}: RequestDetailHeaderProps) {
  return (
    <div className={clsx('flex gap-4 bg-elevated px-6 py-4', className)}>
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex min-w-0 items-center gap-2">
          {renderStatus(status)}
          <span className="shrink-0 text-body-md font-semibold text-muted">#{orderNumber}</span>
          <h2 className="min-w-0 truncate text-body-md font-semibold text-primary">{title}</h2>
          {priority === 'high' && <HighPriorityFlag className="shrink-0" />}
        </div>
        {description && (
          <p className="text-body-sm text-secondary">{description}</p>
        )}
      </div>

      {/* Right column */}
      <div className="shrink-0 flex flex-col gap-3 ml-auto">
        {createdBy !== undefined && (
          <div className="flex flex-col gap-0">
            {/* Label MD Bold (12px Semibold) — matches Figma. `text-label-sm
                font-bold` was an invalid Type Scale combo (no 11px Bold style). */}
            <span className="text-label-md font-semibold text-muted">Created by</span>
            <span className="text-label-sm text-primary">{createdBy}</span>
          </div>
        )}
        {dueDate !== undefined && (
          <div className="flex flex-col gap-1">
            <span className="text-label-md font-semibold text-muted">Due date</span>
            <Badge variant="pink">{dueDate}</Badge>
          </div>
        )}
      </div>
    </div>
  );
}
