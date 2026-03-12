import { clsx } from 'clsx';

export interface Column<T> { key: keyof T; header: string; }
export interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export function Table<T extends Record<string, unknown>>({ columns, data, className }: TableProps<T>) {
  return (
    <div className={clsx('w-full overflow-x-auto', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-200">
            {columns.map((col) => (
              <th key={String(col.key)} className="px-4 py-3 text-left font-medium text-neutral-600">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3 text-neutral-800">
                  {String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
