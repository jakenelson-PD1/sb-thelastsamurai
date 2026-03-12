import { clsx } from 'clsx';

export interface Expand02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Expand02Icon({ size = 20, className, ...props }: Expand02IconProps) {
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
      <path d="M2.5 17.5L17.5 2.5M2.5 17.5H7.5M2.5 17.5V12.5M17.5 2.5H12.5M17.5 2.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
