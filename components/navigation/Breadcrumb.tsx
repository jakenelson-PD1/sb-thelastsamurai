import { clsx } from 'clsx';

export interface BreadcrumbItem { label: string; href?: string; }
export interface BreadcrumbProps { items: BreadcrumbItem[]; className?: string; }

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={clsx('flex items-center gap-1 text-sm', className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-neutral-400">/</span>}
          {item.href ? (
            <a href={item.href} className="text-brand-600 hover:underline">{item.label}</a>
          ) : (
            <span className="text-neutral-500" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
