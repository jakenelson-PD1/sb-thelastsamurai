import { clsx } from 'clsx';

export interface MarkerPin01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MarkerPin01Icon({ size = 20, className, ...props }: MarkerPin01IconProps) {
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
      <path d="M10 10.834C11.3807 10.834 12.5 9.71473 12.5 8.33398C12.5 6.95328 11.3807 5.83398 10 5.83398C8.61925 5.83398 7.5 6.95328 7.5 8.33398C7.5 9.71473 8.61925 10.834 10 10.834Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18.3337C13.3333 15.0003 16.6667 12.0156 16.6667 8.33366C16.6667 4.65176 13.6819 1.66699 10 1.66699C6.3181 1.66699 3.33334 4.65176 3.33334 8.33366C3.33334 12.0156 6.66667 15.0003 10 18.3337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
