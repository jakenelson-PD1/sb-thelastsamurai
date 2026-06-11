import { clsx } from 'clsx';

export interface CountBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function CountBadge({ children, className }: CountBadgeProps) {
  return (
    <span className={clsx(
      'inline-flex shrink-0 rounded-control bg-surface p-[2px] text-label-sm text-muted tabular-nums',
      className,
    )}>
      {children}
    </span>
  );
}
