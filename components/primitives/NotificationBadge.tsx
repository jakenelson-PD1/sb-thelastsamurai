import { clsx } from 'clsx';

export interface NotificationBadgeProps {
  count: number;
  max?: number;
  className?: string;
}

/**
 * Numbered notification badge — same shape as CountBadge, red notification treatment.
 * Renders nothing when count is 0.
 */
export function NotificationBadge({ count, max = 99, className }: NotificationBadgeProps) {
  if (count <= 0) return null;

  const label = count > max ? `${max}+` : String(count);

  return (
    <span
      aria-label={`${count} notification${count !== 1 ? 's' : ''}`}
      className={clsx(
        'inline-flex shrink-0 rounded-control bg-notification p-[2px] text-label-sm text-on-accent tabular-nums',
        className,
      )}
    >
      {label}
    </span>
  );
}
