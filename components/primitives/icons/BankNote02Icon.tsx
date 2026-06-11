import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BankNote02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BankNote02Icon({ size = 'md', className, ...props }: BankNote02IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M4.99999 8.33317V11.6665M15 8.33317V11.6665M1.66666 6.83317V13.1665C1.66666 14.0999 1.66666 14.5667 1.84831 14.9232C2.0081 15.2368 2.26306 15.4918 2.57667 15.6515C2.93319 15.8332 3.3999 15.8332 4.33332 15.8332H15.6667C16.6001 15.8332 17.0668 15.8332 17.4233 15.6515C17.7369 15.4918 17.9919 15.2368 18.1517 14.9232C18.3333 14.5667 18.3333 14.0999 18.3333 13.1665V6.83317C18.3333 5.89975 18.3333 5.43304 18.1517 5.07652C17.9919 4.76292 17.7369 4.50795 17.4233 4.34816C17.0668 4.1665 16.6001 4.1665 15.6667 4.1665H4.33332C3.39991 4.1665 2.93319 4.1665 2.57667 4.34816C2.26307 4.50795 2.0081 4.76291 1.84831 5.07652C1.66666 5.43304 1.66666 5.89975 1.66666 6.83317ZM12.0833 9.99984C12.0833 11.1504 11.1506 12.0832 9.99999 12.0832C8.84941 12.0832 7.91666 11.1504 7.91666 9.99984C7.91666 8.84925 8.84941 7.9165 9.99999 7.9165C11.1506 7.9165 12.0833 8.84925 12.0833 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
