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
        className="rounded-card px-3 py-1.5 text-body-md font-medium text-secondary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:opacity-40 disabled:pointer-events-none"
      >
        ‹ Prev
      </button>
      <span className="px-3 py-1.5 text-body-md text-secondary">
        {page} / {total}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
        className="rounded-card px-3 py-1.5 text-body-md font-medium text-secondary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:opacity-40 disabled:pointer-events-none"
      >
        Next ›
      </button>
    </nav>
  );
}
