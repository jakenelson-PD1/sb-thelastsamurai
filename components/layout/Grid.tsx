import { clsx } from 'clsx';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 2 | 4 | 6 | 8;
}

const colsMap = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4', 6: 'grid-cols-6', 12: 'grid-cols-12' } as const;
const gapMap  = { 2: 'gap-2', 4: 'gap-4', 6: 'gap-6', 8: 'gap-8' } as const;

export function Grid({ cols = 1, gap = 4, className, children, ...props }: GridProps) {
  return (
    <div className={clsx('grid', colsMap[cols], gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
}
