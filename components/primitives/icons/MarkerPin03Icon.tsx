import { clsx } from 'clsx';

export interface MarkerPin03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MarkerPin03Icon({ size = 20, className, ...props }: MarkerPin03IconProps) {
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
      <path d="M10 18.3337C10.8333 14.167 16.6667 13.6822 16.6667 8.33366C16.6667 4.65176 13.6819 1.66699 10 1.66699C6.31811 1.66699 3.33334 4.65176 3.33334 8.33366C3.33334 13.6822 9.16668 14.167 10 18.3337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10.834C11.3807 10.834 12.5 9.71473 12.5 8.33398C12.5 6.95328 11.3807 5.83398 10 5.83398C8.61925 5.83398 7.5 6.95328 7.5 8.33398C7.5 9.71473 8.61925 10.834 10 10.834Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
