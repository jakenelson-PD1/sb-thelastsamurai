import { clsx } from 'clsx';

export interface Upload02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Upload02Icon({ size = 20, className, ...props }: Upload02IconProps) {
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
      <path d="M17.5 2.5H2.5M15 10.8333L10 5.83333M10 5.83333L5 10.8333M10 5.83333V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
