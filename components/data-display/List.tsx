import { clsx } from 'clsx';

export interface ListItem { id: string | number; primary: string; secondary?: string; }
export interface ListProps { items: ListItem[]; className?: string; }

export function List({ items, className }: ListProps) {
  return (
    <ul className={clsx('divide-y divide-line', className)}>
      {items.map((item) => (
        <li key={item.id} className="flex flex-col px-4 py-3">
          <span className="text-body-md font-medium text-primary">{item.primary}</span>
          {item.secondary && (
            <span className="text-label-md text-muted">{item.secondary}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
