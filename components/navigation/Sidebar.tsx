import { clsx } from 'clsx';

export interface SidebarItem { label: string; href: string; active?: boolean; }
export interface SidebarProps { items: SidebarItem[]; className?: string; }

export function Sidebar({ items, className }: SidebarProps) {
  return (
    <nav className={clsx('flex flex-col gap-1 w-56', className)}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={clsx(
            'rounded-lg py-2 text-sm font-medium transition-colors',
            item.active
              ? 'border-l-2 border-action-primary bg-surface pl-[calc(0.75rem-2px)] pr-3 text-action-primary'
              : 'px-3 text-fg-secondary hover:bg-surface',
          )}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
