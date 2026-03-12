import { clsx } from 'clsx';

export interface Wind02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Wind02Icon({ size = 20, className, ...props }: Wind02IconProps) {
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
      <path d="M7.9244 3.88857C8.22957 3.54759 8.67307 3.33301 9.16666 3.33301C10.0872 3.33301 10.8333 4.0792 10.8333 4.99967C10.8333 5.92015 10.0872 6.66634 9.16666 6.66634H1.66667M10.4244 16.1108C10.7296 16.4518 11.1731 16.6663 11.6667 16.6663C12.5872 16.6663 13.3333 15.9202 13.3333 14.9997C13.3333 14.0792 12.5872 13.333 11.6667 13.333H1.66667M13.9699 5.83301C14.4277 5.32155 15.0929 4.99967 15.8333 4.99967C17.2141 4.99967 18.3333 6.11897 18.3333 7.49967C18.3333 8.88042 17.2141 9.99967 15.8333 9.99967H1.66666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
