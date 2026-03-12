import { clsx } from 'clsx';

export interface CreditCard01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CreditCard01Icon({ size = 20, className, ...props }: CreditCard01IconProps) {
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
      <path d="M18.3334 8.33317H1.66669M1.66669 6.83317V13.1665C1.66669 14.0999 1.66669 14.5667 1.84835 14.9232C2.00813 15.2368 2.2631 15.4918 2.5767 15.6515C2.93322 15.8332 3.39993 15.8332 4.33335 15.8332H15.6667C16.6001 15.8332 17.0669 15.8332 17.4234 15.6515C17.7369 15.4918 17.9919 15.2368 18.1517 14.9232C18.3334 14.5667 18.3334 14.0999 18.3334 13.1665V6.83317C18.3334 5.89975 18.3334 5.43304 18.1517 5.07652C17.9919 4.76292 17.7369 4.50795 17.4234 4.34816C17.0669 4.1665 16.6001 4.1665 15.6667 4.1665H4.33335C3.39994 4.1665 2.93322 4.1665 2.5767 4.34816C2.2631 4.50795 2.00813 4.76291 1.84835 5.07652C1.66669 5.43304 1.66669 5.89975 1.66669 6.83317Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
