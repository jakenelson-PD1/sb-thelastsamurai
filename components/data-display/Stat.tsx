import { clsx } from 'clsx';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export function Stat({
  label,
  value,
  change,
  changeType = 'neutral',
  className,
  ...props
}: StatProps) {
  const changeColor =
    changeType === 'positive'
      ? 'text-status-success-fg'
      : changeType === 'negative'
      ? 'text-status-error-fg'
      : 'text-fg-muted';

  return (
    <div className={clsx('flex flex-col gap-1', className)} {...props}>
      <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">{label}</p>
      <p className="text-3xl font-bold text-fg-primary">{value}</p>
      {change && <p className={clsx('text-sm', changeColor)}>{change}</p>}
    </div>
  );
}
