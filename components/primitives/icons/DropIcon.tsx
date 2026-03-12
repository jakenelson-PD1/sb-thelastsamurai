import { clsx } from 'clsx';

export interface DropIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DropIcon({ size = 20, className, ...props }: DropIconProps) {
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
      <path d="M16.6667 11.6667C16.6667 15.3487 13.6819 18.3334 10 18.3334C6.31811 18.3334 3.33334 15.3487 3.33334 11.6667C3.33334 10.7827 3.50544 9.93875 3.81794 9.16675C4.80692 6.72356 10 1.66675 10 1.66675C10 1.66675 15.1931 6.72356 16.1821 9.16675C16.4946 9.93875 16.6667 10.7827 16.6667 11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
