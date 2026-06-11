import { useState } from 'react';
import { clsx } from 'clsx';
import { Button } from '../primitives/Button';
import { DotsHorizontalIcon } from '../primitives/icons/DotsHorizontalIcon';
import { Edit02Icon } from '../primitives/icons/Edit02Icon';
import { Trash03Icon } from '../primitives/icons/Trash03Icon';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { Tooltip } from '../overlay/Tooltip';
import type { StatusIndicator } from './RequestRow';
import { renderStatus } from './statusUtils';

export interface RequestDetailActionBarProps {
  currentState?: StatusIndicator;
  onChangeState?: (state: StatusIndicator) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onMore?: () => void;
  className?: string;
}

const stateItems: { label: string; value: StatusIndicator }[] = [
  { label: 'Mark as outstanding', value: 'outstanding' },
  { label: 'Mark as accepted',    value: 'accepted' },
  { label: 'Mark as returned',    value: 'returned' },
  { label: 'Mark as fulfilled',   value: 'fulfilled' },
];

export function RequestDetailActionBar({
  currentState,
  onChangeState,
  onEdit,
  onDelete,
  onMore,
  className,
}: RequestDetailActionBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={clsx(
        'flex h-12 items-center justify-between border border-line bg-elevated px-4',
        className,
      )}
    >
      <Dropdown
        width="auto"
        open={dropdownOpen}
        onOpenChange={setDropdownOpen}
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={
              <ChevronDownIcon
                size="sm"
                className={clsx('transition-transform duration-200', dropdownOpen && 'rotate-180')}
              />
            }
          >
            Change request state
          </Button>
        }
      >
        <ActionMenu
          groups={[{
            items: stateItems.map((s) => ({
              icon: renderStatus(s.value, false, 'md'),
              label: s.label,
              selected: s.value === currentState,
              onClick: () => onChangeState?.(s.value),
            })),
          }]}
        />
      </Dropdown>

      <div className="flex items-center gap-1">
        <Tooltip content="More options">
          <Button
            variant="ghost"
            size="md"
            iconOnly
            startIcon={<DotsHorizontalIcon size="md" />}
            onClick={onMore}
            aria-label="More options"
            className="rounded-pill"
          />
        </Tooltip>
        <Tooltip content="Edit">
          <Button
            variant="ghost"
            size="md"
            iconOnly
            startIcon={<Edit02Icon size="md" />}
            onClick={onEdit}
            aria-label="Edit"
            className="rounded-pill"
          />
        </Tooltip>
        <Tooltip content="Delete">
          <Button
            variant="ghost"
            size="md"
            iconOnly
            startIcon={<Trash03Icon size="md" />}
            onClick={onDelete}
            aria-label="Delete"
            className="rounded-pill"
          />
        </Tooltip>
      </div>
    </div>
  );
}
