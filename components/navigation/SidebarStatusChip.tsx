import { useState } from 'react';
import { clsx } from 'clsx';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';

export type SidebarChipColor = 'brand' | 'yellow' | 'green' | 'red' | 'neutral';

export const dotColorClass: Record<SidebarChipColor, string> = {
  brand:   'bg-action-primary',
  yellow:  'bg-status-warning',
  green:   'bg-status-success',
  red:     'bg-status-error',
  neutral: 'bg-fg-muted',
};

export interface SidebarStatusChipOption {
  value: string;
  label: string;
  color: SidebarChipColor;
}

export interface SidebarStatusChipProps {
  value: string;
  options: SidebarStatusChipOption[];
  onChange: (value: string) => void;
  className?: string;
}

export function SidebarStatusChip({ value, options, onChange, className }: SidebarStatusChipProps) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.value === value) ?? options[0];
  if (!current) return null;

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      align="left"
      width="auto"
      trigger={
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
          className={clsx(
            'inline-flex items-center gap-1.5 rounded-pill px-2 py-0.5',
            'text-label-sm font-medium text-sidenav-fg-primary',
            'bg-sidenav-surface-hover hover:bg-sidenav-surface-elevated transition-colors',
            className,
          )}
        >
          <span className={clsx('h-2 w-2 rounded-full shrink-0', dotColorClass[current.color])} />
          <span className="truncate">{current.label}</span>
          <ChevronDownIcon size={12} className="text-sidenav-fg-muted shrink-0" />
        </button>
      }
    >
      <ActionMenu
        size="sm"
        groups={[{
          items: options.map((opt) => ({
            label: opt.label,
            icon: <span className={clsx('h-2 w-2 rounded-full', dotColorClass[opt.color])} />,
            selected: opt.value === value,
            onClick: () => { onChange(opt.value); setOpen(false); },
          })),
        }]}
      />
    </Dropdown>
  );
}
