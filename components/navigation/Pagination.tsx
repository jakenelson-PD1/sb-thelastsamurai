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
        className="rounded-lg px-3 py-1.5 text-sm font-medium text-fg-secondary hover:bg-surface disabled:opacity-40"
      >
        ‹ Prev
      </button>
      <span className="px-3 py-1.5 text-sm text-fg-secondary">
        {page} / {total}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
        className="rounded-lg px-3 py-1.5 text-sm font-medium text-fg-secondary hover:bg-surface disabled:opacity-40"
      >
        Next ›
      </button>
    </nav>
  );
}
