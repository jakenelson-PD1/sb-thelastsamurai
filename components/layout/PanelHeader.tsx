import { clsx } from 'clsx';

export interface PanelHeaderProps {
  /** Primary panel title */
  title: string;
  /** Optional subtitle / description beneath the title */
  subtitle?: string;
  /** Slot for action buttons / icons on the trailing (right) side */
  actions?: React.ReactNode;
  /** Show a bottom border. Default: true */
  border?: boolean;
  /** Padding density */
  size?: 'compact' | 'default';
  className?: string;
}

const paddingMap = {
  compact: 'px-panel-compact py-2',
  default: 'px-panel py-3',
} as const;

/**
 * Standardized panel title bar.
 * Provides consistent heading + optional actions slot across all panels.
 *
 * @example
 * <PanelHeader title="Documents" actions={<Button size="xs">Add</Button>} />
 * <PanelHeader title="Notes" subtitle="3 items" size="compact" />
 */
export function PanelHeader({ title, subtitle, actions, border = true, size = 'default', className }: PanelHeaderProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-between shrink-0 bg-elevated',
        paddingMap[size],
        border && 'border-b border-line',
        className,
      )}
    >
      <div className="flex flex-col min-w-0">
        <span className="text-body-sm font-semibold text-heading truncate">{title}</span>
        {subtitle && (
          <span className="text-label-sm text-muted">{subtitle}</span>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-1 shrink-0 ml-3">
          {actions}
        </div>
      )}
    </div>
  );
}
