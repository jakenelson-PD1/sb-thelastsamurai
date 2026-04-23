import { clsx } from 'clsx';

export interface SidebarRowProps {
  title: string;
  onSelect?: () => void;
  active?: boolean;
  disabled?: boolean;
  leading?: React.ReactNode;
  index?: number;
  subtitle?: string;
  trailing?: React.ReactNode;
  hoverActions?: React.ReactNode;
  overflowMenu?: React.ReactNode;
  className?: string;
}

export function SidebarRow({
  title,
  onSelect,
  active,
  disabled,
  leading,
  index,
  subtitle,
  trailing,
  hoverActions,
  overflowMenu,
  className,
}: SidebarRowProps) {
  const handleActivate = () => {
    if (!disabled) onSelect?.();
  };
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      aria-current={active ? 'page' : undefined}
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleActivate();
        }
      }}
      className={clsx(
        'group flex flex-col gap-0.5 rounded-control py-2 pr-3 cursor-pointer transition-colors motion-reduce:transition-none',
        active
          ? 'bg-sidenav-surface-elevated border-l-2 border-action-primary pl-[calc(0.75rem-2px)]'
          : 'pl-3 hover:bg-sidenav-surface-hover',
        disabled && 'opacity-40 pointer-events-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {leading && (
          <span className="shrink-0" onClick={stop}>
            {leading}
          </span>
        )}
        {typeof index === 'number' && (
          <span className="shrink-0 w-5 text-right text-label-sm text-sidenav-fg-muted tabular-nums">
            {index}
          </span>
        )}
        <span
          className={clsx(
            'flex-1 min-w-0 truncate text-body-sm font-medium',
            active
              ? 'text-sidenav-fg-primary'
              : 'text-sidenav-fg-secondary group-hover:text-sidenav-fg-primary',
          )}
        >
          {title}
        </span>
        {hoverActions && (
          <span
            className="flex items-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity motion-reduce:transition-none"
            onClick={stop}
          >
            {hoverActions}
          </span>
        )}
        {trailing && <span className="shrink-0">{trailing}</span>}
        {overflowMenu && (
          <span className="shrink-0" onClick={stop}>
            {overflowMenu}
          </span>
        )}
      </div>
      {subtitle && (
        <div className="pl-9 text-label-sm text-sidenav-fg-muted truncate">
          {subtitle}
        </div>
      )}
    </div>
  );
}
