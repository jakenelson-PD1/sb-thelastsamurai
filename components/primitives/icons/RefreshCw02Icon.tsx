import { clsx } from 'clsx';

export interface RefreshCw02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCw02Icon({ size = 20, className, ...props }: RefreshCw02IconProps) {
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
      <path d="M1.66666 11.6667C1.66666 11.6667 1.76776 12.3743 4.69669 15.3033C7.62562 18.2323 12.3743 18.2323 15.3033 15.3033C16.341 14.2656 17.0111 12.9994 17.3135 11.6667M1.66666 11.6667V16.6667M1.66666 11.6667H6.66666M18.3333 8.33333C18.3333 8.33333 18.2322 7.62563 15.3033 4.6967C12.3743 1.76777 7.62562 1.76777 4.69669 4.6967C3.65896 5.73443 2.9889 7.0006 2.68651 8.33333M18.3333 8.33333V3.33333M18.3333 8.33333H13.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
