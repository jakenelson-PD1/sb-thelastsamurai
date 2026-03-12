import { clsx } from 'clsx';

export interface ArrowDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowDownIcon({ size = 20, className, ...props }: ArrowDownIconProps) {
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
      <path d="M10 4.16663V15.8333M10 15.8333L15.8334 9.99996M10 15.8333L4.16669 9.99996" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
