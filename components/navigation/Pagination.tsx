import { clsx } from 'clsx';

export interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Pagination({ page, total, onChange, className }: PaginationProps) {
  return (
    <nav aria-label="Pagination" className={clsx('flex items-center gap-1', className)}>
      <button
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="rounded px-3 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 disabled:opacity-40"
      >
        ‹ Prev
      </button>
      <span className="px-3 py-1.5 text-sm text-neutral-600">
        {page} / {total}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
        className="rounded px-3 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 disabled:opacity-40"
      >
        Next ›
      </button>
    </nav>
  );
}
