import { clsx } from 'clsx';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export function Stat({ label, value, change, changeType = 'neutral', className, ...props }: StatProps) {
  const changeColor = changeType === 'positive' ? 'text-green-600' : changeType === 'negative' ? 'text-red-600' : 'text-neutral-500';
  return (
    <div className={clsx('flex flex-col gap-1', className)} {...props}>
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{label}</p>
      <p className="text-3xl font-bold text-neutral-900">{value}</p>
      {change && <p className={clsx('text-sm', changeColor)}>{change}</p>}
    </div>
  );
}
