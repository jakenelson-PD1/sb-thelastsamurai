import { clsx } from 'clsx';

export interface CurrencyEuroIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyEuroIcon({ size = 20, className, ...props }: CurrencyEuroIconProps) {
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
      <path d="M15.8333 4.59903C14.598 3.54961 12.9979 2.9165 11.25 2.9165C7.33798 2.9165 4.16667 6.08782 4.16667 9.99984C4.16667 13.9118 7.33798 17.0832 11.25 17.0832C12.9979 17.0832 14.598 16.4501 15.8333 15.4007M2.5 11.6665H10.8333M2.5 8.33317H10.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
