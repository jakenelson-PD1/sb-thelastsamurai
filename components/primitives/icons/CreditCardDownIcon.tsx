import { clsx } from 'clsx';

export interface CreditCardDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CreditCardDownIcon({ size = 20, className, ...props }: CreditCardDownIconProps) {
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
      <path d="M13.3333 14.9998L15.8333 17.4998M15.8333 17.4998L18.3333 14.9998M15.8333 17.4998V12.4998M18.3333 8.33317H1.66666M18.3333 9.99984V6.83317C18.3333 5.89975 18.3333 5.43304 18.1517 5.07652C17.9919 4.76292 17.7369 4.50795 17.4233 4.34816C17.0668 4.1665 16.6001 4.1665 15.6667 4.1665H4.33332C3.39991 4.1665 2.93319 4.1665 2.57667 4.34816C2.26307 4.50795 2.0081 4.76291 1.84831 5.07652C1.66666 5.43304 1.66666 5.89975 1.66666 6.83317V13.1665C1.66666 14.0999 1.66666 14.5667 1.84831 14.9232C2.0081 15.2368 2.26306 15.4918 2.57667 15.6515C2.93319 15.8332 3.39991 15.8332 4.33332 15.8332H9.99999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
