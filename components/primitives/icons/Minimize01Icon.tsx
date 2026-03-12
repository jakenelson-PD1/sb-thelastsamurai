import { clsx } from 'clsx';

export interface Minimize01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Minimize01Icon({ size = 20, className, ...props }: Minimize01IconProps) {
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
      <path d="M3.33333 11.6667H8.33333M8.33333 11.6667V16.6667M8.33333 11.6667L2.5 17.5M16.6667 8.33333H11.6667M11.6667 8.33333V3.33333M11.6667 8.33333L17.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
