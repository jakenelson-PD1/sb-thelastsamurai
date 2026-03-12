import { clsx } from 'clsx';

export interface Hash02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Hash02Icon({ size = 20, className, ...props }: Hash02IconProps) {
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
      <path d="M7.91667 2.5L5.41667 17.5M14.5833 2.5L12.0833 17.5M17.0833 6.66667H2.91668M16.25 13.3333H2.08334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
