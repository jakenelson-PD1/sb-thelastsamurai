import { clsx } from 'clsx';

export interface ReceiptIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ReceiptIcon({ size = 20, className, ...props }: ReceiptIconProps) {
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
      <path d="M3.33334 6.5C3.33334 5.09987 3.33334 4.3998 3.60582 3.86503C3.8455 3.39462 4.22795 3.01217 4.69836 2.77248C5.23314 2.5 5.9332 2.5 7.33334 2.5H12.6667C14.0668 2.5 14.7668 2.5 15.3017 2.77248C15.7721 3.01217 16.1545 3.39462 16.3942 3.86503C16.6667 4.3998 16.6667 5.09987 16.6667 6.5V17.5L14.375 15.8333L12.2917 17.5L10 15.8333L7.70834 17.5L5.625 15.8333L3.33334 17.5V6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
