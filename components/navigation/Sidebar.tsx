import { clsx } from 'clsx';

export interface SidebarProps {
  theme?: 'dark' | 'light';
  width?: number | string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

export function Sidebar({
  theme = 'dark', width = 320, ariaLabel = 'Sidebar', className, children,
}: SidebarProps) {
  return (
    <nav
      role="navigation"
      aria-label={ariaLabel}
      data-theme={theme}
      className={clsx('flex flex-col h-full bg-sidenav-surface overflow-hidden', className)}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
    >
      {children}
    </nav>
  );
}
