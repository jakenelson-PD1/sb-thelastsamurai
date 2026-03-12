import { clsx } from 'clsx';

export interface CreditCardCheckIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CreditCardCheckIcon({ size = 20, className, ...props }: CreditCardCheckIconProps) {
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
      <path d="M13.3333 14.9998L15 16.6665L18.3333 13.3332M18.3333 8.33317H1.66667M18.3333 9.99984V6.83317C18.3333 5.89975 18.3333 5.43304 18.1517 5.07652C17.9919 4.76292 17.7369 4.50795 17.4233 4.34816C17.0668 4.1665 16.6001 4.1665 15.6667 4.1665H4.33334C3.39992 4.1665 2.93321 4.1665 2.57669 4.34816C2.26309 4.50795 2.00811 4.76291 1.84833 5.07652C1.66667 5.43304 1.66667 5.89975 1.66667 6.83317V13.1665C1.66667 14.0999 1.66667 14.5667 1.84833 14.9232C2.00811 15.2368 2.26308 15.4918 2.57669 15.6515C2.93321 15.8332 3.39992 15.8332 4.33334 15.8332H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
