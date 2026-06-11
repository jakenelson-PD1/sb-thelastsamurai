import { clsx } from 'clsx';
import { NavItem } from './NavItem';
import type { IconSizeProp } from '../primitives/icons/_iconSize';

export interface TopNavItem {
  id: string;
  label: string;
  /** Icon component — receives size + className props */
  icon?: React.ComponentType<{ size?: IconSizeProp; className?: string }>;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export interface TopNavProps {
  /** Logo / wordmark — rendered on the left */
  logo?: React.ReactNode;
  /** Primary navigation items */
  items?: TopNavItem[];
  /** Right-side slot — user avatar, notifications, etc. */
  rightSlot?: React.ReactNode;
  className?: string;
}

export function TopNav({ logo, items = [], rightSlot, className }: TopNavProps) {
  return (
    <header
      className={clsx(
        'flex h-15 shrink-0 items-center justify-between px-8 bg-header-bg',
        className,
      )}
    >
      {/* Logo — left */}
      <div className="flex shrink-0 items-center">
        {logo}
      </div>

      {/* Nav items — right */}
      {items.length > 0 && (
        <nav className="flex items-center gap-1" aria-label="Primary navigation">
          {items.map((item) =>
            item.icon ? (
              <NavItem
                key={item.id}
                tone="topnav"
                icon={item.icon}
                title={item.label}
                active={item.active}
                href={item.href}
                onSelect={item.onClick}
              />
            ) : null,
          )}
        </nav>
      )}

      {/* Right slot — only rendered when provided */}
      {rightSlot && (
        <div className="flex shrink-0 items-center gap-3">
          {rightSlot}
        </div>
      )}
    </header>
  );
}
