import { useState } from 'react';
import { clsx } from 'clsx';
import { Dropdown } from '../overlay/Dropdown';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';
import { dotColorClass, type SidebarChipColor } from './SidebarStatusChip';

export interface SidebarFilterChipProps {
  label: string;
  color: SidebarChipColor;
  count?: number;
  active: boolean;
  onToggle: () => void;
  subMenu?: React.ReactNode;
  className?: string;
}

export function SidebarFilterChip({
  label, color, count, active, onToggle, subMenu, className,
}: SidebarFilterChipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 rounded-pill px-2 py-1 transition-colors',
        active
          ? 'bg-sidenav-surface-hover text-sidenav-fg-primary'
          : 'bg-transparent text-sidenav-fg-secondary hover:bg-sidenav-surface-hover/60',
        className,
      )}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className="inline-flex items-center gap-1.5 text-label-sm font-medium"
      >
        <span className={clsx('h-2 w-2 rounded-full shrink-0', dotColorClass[color])} />
        <span className="truncate">
          {label}
          {typeof count === 'number' && (
            <span className="text-sidenav-fg-muted"> · {count}</span>
          )}
        </span>
      </button>
      {subMenu && (
        <Dropdown
          open={open}
          onOpenChange={setOpen}
          align="left"
          width="auto"
          trigger={
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setOpen(true); }}
              className="p-0.5 text-sidenav-fg-muted hover:text-sidenav-fg-primary"
              aria-label={`${label} sub-menu`}
            >
              <ChevronDownIcon size={12} />
            </button>
          }
        >
          {subMenu}
        </Dropdown>
      )}
    </div>
  );
}
