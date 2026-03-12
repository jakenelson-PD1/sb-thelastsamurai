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
            'rounded px-3 py-2 text-sm font-medium transition-colors',
            item.active
              ? 'bg-brand-50 text-brand-700'
              : 'text-neutral-600 hover:bg-neutral-100',
          )}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
