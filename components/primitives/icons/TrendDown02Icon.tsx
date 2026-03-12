import { clsx } from 'clsx';

export interface TrendDown02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function TrendDown02Icon({ size = 20, className, ...props }: TrendDown02IconProps) {
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
      <path d="M5.83331 5.8335L14.1666 14.1668M14.1666 14.1668V5.8335M14.1666 14.1668H5.83331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
