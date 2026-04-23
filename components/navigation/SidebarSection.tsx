import { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';

export interface SidebarSectionProps {
  title: string;
  count?: number;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
}

export function SidebarSection({
  title,
  count,
  icon,
  actions,
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  className,
  children,
}: SidebarSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const toggle = () => {
    const next = !open;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div className={className}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        className="group flex items-center gap-1.5 px-3 py-1.5 cursor-pointer rounded-control hover:bg-sidenav-surface-hover"
      >
        <ChevronDownIcon
          size={14}
          className={clsx(
            'text-sidenav-fg-muted shrink-0 transition-transform',
            !open && '-rotate-90',
          )}
        />
        {icon && <span className="shrink-0 text-sidenav-fg-secondary">{icon}</span>}
        <span className="flex-1 text-label-md font-semibold text-sidenav-fg-secondary truncate">
          {title}
        </span>
        {typeof count === 'number' && (
          <span className="text-label-sm text-sidenav-fg-muted shrink-0">{count}</span>
        )}
        {actions && (
          <span
            className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {actions}
          </span>
        )}
      </div>
      <div
        className={clsx(
          'grid transition-[grid-template-rows] duration-200 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
