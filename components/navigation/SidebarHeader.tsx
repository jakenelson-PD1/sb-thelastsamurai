import { clsx } from 'clsx';
import { ChevronLeftIcon } from '../primitives/icons/ChevronLeftIcon';

export interface SidebarHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  backHref?: string;
  onBack?: () => void;
  actions?: React.ReactNode;
  className?: string;
}

export function SidebarHeader({
  title,
  subtitle,
  icon,
  backHref,
  onBack,
  actions,
  className,
}: SidebarHeaderProps) {
  const showBack = !!onBack || !!backHref;

  return (
    <div
      className={clsx(
        'flex items-center gap-2 px-3 py-3 border-b border-sidenav-border',
        className,
      )}
    >
      {showBack &&
        (onBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label="Back"
            className="inline-flex items-center justify-center p-1.5 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
          >
            <ChevronLeftIcon size={16} />
          </button>
        ) : (
          <a
            href={backHref}
            aria-label="Back"
            className="inline-flex items-center justify-center p-1.5 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
          >
            <ChevronLeftIcon size={16} />
          </a>
        ))}
      {icon && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-card bg-sidenav-surface-hover text-sidenav-fg-secondary">
          {icon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-body-md font-semibold text-sidenav-fg-primary truncate">
          {title}
        </div>
        {subtitle && (
          <div className="text-label-sm text-sidenav-fg-muted truncate">
            {subtitle}
          </div>
        )}
      </div>
      {actions && <div className="flex items-center gap-1 shrink-0">{actions}</div>}
    </div>
  );
}
