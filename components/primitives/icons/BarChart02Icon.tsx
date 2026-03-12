import { clsx } from 'clsx';

export interface BarChart02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarChart02Icon({ size = 20, className, ...props }: BarChart02IconProps) {
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
      <path d="M15 16.6668V3.3335M5 16.6668V13.3335M10 16.6668V8.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
