import { clsx } from 'clsx';
import { useState } from 'react';
import { Avatar } from '../primitives/Avatar';
import { Button } from '../primitives/Button';
import { AccordionItem } from './Accordion';

export interface Assignee {
  initials: string;
  name: string;
  email: string;
  type: 'client' | 'firm';
}

export interface RequestDetailAssignmentsProps {
  clientAssignees?: Assignee[];
  firmAssignees?: Assignee[];
  onAddAssignee?: (assignee: Assignee) => void;
  /** Whether the Assignments accordion starts expanded. Defaults to open
   *  (matches Figma's canonical `State=open`). */
  defaultOpen?: boolean;
  className?: string;
}

function AssigneeRow({
  assignee,
  onAdd,
}: {
  assignee: Assignee;
  onAdd?: (assignee: Assignee) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-3 px-4 py-2 hover:bg-surface transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar first, then name/email — matches Figma's row layout (sm avatar). */}
      <Avatar size="sm" initials={assignee.initials} variant={assignee.type} />
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-body-md text-primary truncate">{assignee.name}</span>
        <span className="text-label-sm text-muted truncate">{assignee.email}</span>
      </div>
      {/* Add button appears on hover at the row end — doesn't shift the avatar. */}
      {hovered && onAdd && (
        <Button
          variant="ghost"
          size="xs"
          className="shrink-0 text-label-sm"
          onClick={() => onAdd(assignee)}
        >
          Add
        </Button>
      )}
    </div>
  );
}

export function RequestDetailAssignments({
  clientAssignees = [],
  firmAssignees = [],
  onAddAssignee,
  defaultOpen = true,
  className,
}: RequestDetailAssignmentsProps) {
  const allAssignees = [...clientAssignees, ...firmAssignees];

  const avatarStack = (
    <div className="flex items-center gap-1">
      {allAssignees.map((a, i) => (
        <Avatar key={i} size="xs" initials={a.initials} variant={a.type} />
      ))}
    </div>
  );

  return (
    <div className={clsx(className)}>
      <AccordionItem
        title="Assignments"
        size="md"
        extra={avatarStack}
        defaultOpen={defaultOpen}
      >
        <div className="grid grid-cols-2 border-b border-line">
          {/* Client Available column */}
          <div className="border-r border-line">
            <div className="px-4 py-2 bg-elevated border-b border-line">
              <span className="text-body-sm font-medium text-primary">Client Available</span>
            </div>
            {clientAssignees.map((a, i) => (
              <AssigneeRow key={i} assignee={a} onAdd={onAddAssignee} />
            ))}
          </div>

          {/* Firm available column */}
          <div>
            <div className="px-4 py-2 bg-elevated border-b border-line">
              <span className="text-body-sm font-medium text-primary">Firm available</span>
            </div>
            {firmAssignees.map((a, i) => (
              <AssigneeRow key={i} assignee={a} onAdd={onAddAssignee} />
            ))}
          </div>
        </div>
      </AccordionItem>
    </div>
  );
}
