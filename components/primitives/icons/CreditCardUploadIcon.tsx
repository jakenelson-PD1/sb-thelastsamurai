import { clsx } from 'clsx';

export interface CreditCardUploadIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CreditCardUploadIcon({ size = 20, className, ...props }: CreditCardUploadIconProps) {
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
      <path d="M7.50002 13.3335L10 10.8335M10 10.8335L12.5 13.3335M10 10.8335V16.6668M18.3334 7.50016H1.66669M4.58335 15.0002H4.33335C3.39994 15.0002 2.93322 15.0002 2.5767 14.8185C2.2631 14.6587 2.00813 14.4037 1.84835 14.0902C1.66669 13.7337 1.66669 13.2669 1.66669 12.3335V6.00016C1.66669 5.06675 1.66669 4.60003 1.84835 4.24351C2.00813 3.9299 2.2631 3.67494 2.5767 3.51515C2.93322 3.3335 3.39994 3.3335 4.33335 3.3335H15.6667C16.6001 3.3335 17.0669 3.3335 17.4234 3.51515C17.7369 3.67495 17.9919 3.92991 18.1517 4.24351C18.3334 4.60003 18.3334 5.06675 18.3334 6.00016V12.3335C18.3334 13.2669 18.3334 13.7337 18.1517 14.0902C17.9919 14.4037 17.7369 14.6587 17.4234 14.8185C17.0669 15.0002 16.6001 15.0002 15.6667 15.0002H15.4167" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
