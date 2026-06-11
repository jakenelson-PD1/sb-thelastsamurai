import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CreditCard02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CreditCard02Icon({ size = 'md', className, ...props }: CreditCard02IconProps) {
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
      <path d="M18.3333 8.33317H1.66666M9.16666 11.6665H5M1.66666 6.83317V13.1665C1.66666 14.0999 1.66666 14.5667 1.84832 14.9232C2.00811 15.2368 2.26307 15.4918 2.57668 15.6515C2.9332 15.8332 3.39991 15.8332 4.33333 15.8332H15.6667C16.6001 15.8332 17.0668 15.8332 17.4233 15.6515C17.7369 15.4918 17.9919 15.2368 18.1517 14.9232C18.3333 14.5667 18.3333 14.0999 18.3333 13.1665V6.83317C18.3333 5.89975 18.3333 5.43304 18.1517 5.07652C17.9919 4.76292 17.7369 4.50795 17.4233 4.34816C17.0668 4.1665 16.6001 4.1665 15.6667 4.1665H4.33333C3.39991 4.1665 2.9332 4.1665 2.57668 4.34816C2.26308 4.50795 2.00811 4.76291 1.84832 5.07652C1.66666 5.43304 1.66666 5.89975 1.66666 6.83317Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
