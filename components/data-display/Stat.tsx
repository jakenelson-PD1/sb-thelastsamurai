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
      : 'text-muted';

  return (
    <div className={clsx('flex flex-col gap-1', className)} {...props}>
      <p className="text-label-md font-medium uppercase tracking-wide text-muted">{label}</p>
      <p className="text-display-lg font-bold text-primary">{value}</p>
      {change && <p className={clsx('text-body-md', changeColor)}>{change}</p>}
    </div>
  );
}
