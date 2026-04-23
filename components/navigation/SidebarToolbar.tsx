import { clsx } from 'clsx';

export interface SidebarToolbarProps {
  className?: string;
  children: React.ReactNode;
}

export function SidebarToolbar({ className, children }: SidebarToolbarProps) {
  return (
    <div className={clsx(
      'flex flex-wrap gap-2 px-3 py-2 border-b border-sidenav-border',
      className,
    )}>
      {children}
    </div>
  );
}
