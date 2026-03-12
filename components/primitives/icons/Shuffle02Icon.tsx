import { clsx } from 'clsx';

export interface Shuffle02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Shuffle02Icon({ size = 20, className, ...props }: Shuffle02IconProps) {
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
      <path d="M17.5 13.3333V17.5M17.5 17.5H13.3333M17.5 17.5L12.5 12.5M2.5 2.5L7.5 7.5M13.3333 2.5H17.5M17.5 2.5V6.66667M17.5 2.5L2.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
