import { clsx } from 'clsx';

export interface SwitchHorizontal02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SwitchHorizontal02Icon({ size = 20, className, ...props }: SwitchHorizontal02IconProps) {
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
      <path d="M3.33333 14.1667H16.6667M16.6667 14.1667L13.3333 10.8333M16.6667 14.1667L13.3333 17.5M16.6667 5.83333H3.33333M3.33333 5.83333L6.66666 2.5M3.33333 5.83333L6.66666 9.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
