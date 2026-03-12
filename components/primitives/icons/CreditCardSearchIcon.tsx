import { clsx } from 'clsx';

export interface CreditCardSearchIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CreditCardSearchIcon({ size = 20, className, ...props }: CreditCardSearchIconProps) {
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
      <path d="M18.3333 18.3332L17.0833 17.0832M18.3333 8.33317H1.66667M18.3333 9.99984V6.83317C18.3333 5.89975 18.3333 5.43304 18.1517 5.07652C17.9919 4.76292 17.7369 4.50795 17.4233 4.34816C17.0668 4.1665 16.6001 4.1665 15.6667 4.1665H4.33334C3.39992 4.1665 2.93321 4.1665 2.57669 4.34816C2.26309 4.50795 2.00811 4.76291 1.84833 5.07652C1.66667 5.43304 1.66667 5.89975 1.66667 6.83317V13.1665C1.66667 14.0999 1.66667 14.5667 1.84833 14.9232C2.00811 15.2368 2.26308 15.4918 2.57669 15.6515C2.93321 15.8332 3.39992 15.8332 4.33334 15.8332H8.75M17.9167 14.9998C17.9167 16.6107 16.6108 17.9165 15 17.9165C13.3892 17.9165 12.0833 16.6107 12.0833 14.9998C12.0833 13.389 13.3892 12.0832 15 12.0832C16.6108 12.0832 17.9167 13.389 17.9167 14.9998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
