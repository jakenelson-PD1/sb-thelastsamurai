import { clsx } from 'clsx';

export interface ActionMenuItem {
  icon?: React.ReactNode;
  label: string;
  shortcut?: string;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
}

export interface ActionMenuGroup {
  items: ActionMenuItem[];
}

export interface ActionMenuProps {
  groups: ActionMenuGroup[];
  className?: string;
}

export function ActionMenu({ groups, className }: ActionMenuProps) {
  return (
    <div
      role="menu"
      className={clsx(
        'min-w-48 rounded-lg border border-line bg-elevated py-1 shadow-card',
        className,
      )}
    >
      {groups.map((group, gi) => (
        <div key={gi}>
          {gi > 0 && <div role="separator" className="my-1 border-t border-line" />}
          {group.items.map((item, ii) => (
            <button
              key={ii}
              role="menuitem"
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={clsx(
                'flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors',
                'focus-visible:outline-none focus-visible:bg-surface',
                item.danger
                  ? 'text-status-error-fg hover:bg-status-error-surface'
                  : 'text-fg-primary hover:bg-surface',
                item.disabled && 'cursor-not-allowed opacity-40',
              )}
            >
              {item.icon && (
                <span className="flex-shrink-0 text-fg-muted">{item.icon}</span>
              )}
              <span className="flex-1 text-left">{item.label}</span>
              {item.shortcut && (
                <span className="text-xs text-fg-muted">{item.shortcut}</span>
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
