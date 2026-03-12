import { clsx } from 'clsx';

export interface ListItem { id: string | number; primary: string; secondary?: string; }
export interface ListProps { items: ListItem[]; className?: string; }

export function List({ items, className }: ListProps) {
  return (
    <ul className={clsx('divide-y divide-neutral-100', className)}>
      {items.map((item) => (
        <li key={item.id} className="flex flex-col px-4 py-3">
          <span className="text-sm font-medium text-neutral-900">{item.primary}</span>
          {item.secondary && <span className="text-xs text-neutral-500">{item.secondary}</span>}
        </li>
      ))}
    </ul>
  );
}
