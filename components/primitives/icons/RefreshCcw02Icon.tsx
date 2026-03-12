import { clsx } from 'clsx';

export interface RefreshCcw02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCcw02Icon({ size = 20, className, ...props }: RefreshCcw02IconProps) {
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
      <path d="M1.66669 8.33333C1.66669 8.33333 1.76779 7.62563 4.69672 4.6967C7.62565 1.76777 12.3744 1.76777 15.3034 4.6967C16.341 5.73443 17.0111 7.0006 17.3135 8.33333M1.66669 8.33333V3.33333M1.66669 8.33333H6.66669M18.3334 11.6667C18.3334 11.6667 18.2323 12.3743 15.3034 15.3033C12.3744 18.2323 7.62565 18.2323 4.69672 15.3033C3.65899 14.2656 2.98893 12.9994 2.68655 11.6667M18.3334 11.6667V16.6667M18.3334 11.6667H13.3334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
