import { clsx } from 'clsx';

export interface ReceiptCheckIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ReceiptCheckIcon({ size = 20, className, ...props }: ReceiptCheckIconProps) {
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
      <path d="M7.49999 8.75L9.16666 10.4167L12.9167 6.66667M16.6667 17.5V6.5C16.6667 5.09987 16.6667 4.3998 16.3942 3.86503C16.1545 3.39462 15.7721 3.01217 15.3017 2.77248C14.7668 2.5 14.0668 2.5 12.6667 2.5H7.33333C5.93319 2.5 5.23313 2.5 4.69835 2.77248C4.22794 3.01217 3.8455 3.39462 3.60581 3.86503C3.33333 4.3998 3.33333 5.09987 3.33333 6.5V17.5L5.62499 15.8333L7.70833 17.5L9.99999 15.8333L12.2917 17.5L14.375 15.8333L16.6667 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
