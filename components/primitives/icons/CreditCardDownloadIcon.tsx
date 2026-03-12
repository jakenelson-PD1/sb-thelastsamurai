import { clsx } from 'clsx';

export interface CreditCardDownloadIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CreditCardDownloadIcon({ size = 20, className, ...props }: CreditCardDownloadIconProps) {
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
      <path d="M7.49999 14.1668L9.99999 16.6668M9.99999 16.6668L12.5 14.1668M9.99999 16.6668V10.8335M18.3333 7.50016H1.66666M4.58332 15.0002H4.33332C3.39991 15.0002 2.93319 15.0002 2.57667 14.8185C2.26306 14.6587 2.0081 14.4037 1.84831 14.0902C1.66666 13.7337 1.66666 13.2669 1.66666 12.3335V6.00016C1.66666 5.06675 1.66666 4.60003 1.84831 4.24351C2.0081 3.9299 2.26307 3.67494 2.57667 3.51515C2.93319 3.3335 3.39991 3.3335 4.33332 3.3335H15.6667C16.6001 3.3335 17.0668 3.3335 17.4233 3.51515C17.7369 3.67495 17.9919 3.92991 18.1517 4.24351C18.3333 4.60003 18.3333 5.06675 18.3333 6.00016V12.3335C18.3333 13.2669 18.3333 13.7337 18.1517 14.0902C17.9919 14.4037 17.7369 14.6587 17.4233 14.8185C17.0668 15.0002 16.6001 15.0002 15.6667 15.0002H15.4167" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
