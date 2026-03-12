import { clsx } from 'clsx';

export interface TrendUp02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function TrendUp02Icon({ size = 20, className, ...props }: TrendUp02IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M5.83334 14.1668L14.1667 5.8335M14.1667 5.8335H5.83334M14.1667 5.8335V14.1668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
