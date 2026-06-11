import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CreditCardRefreshIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CreditCardRefreshIcon({ size = 'md', className, ...props }: CreditCardRefreshIconProps) {
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
      <path d="M18.3333 8.33333H1.66666M9.16666 15.8333H15.6667C16.6001 15.8333 17.0668 15.8333 17.4233 15.6517C17.7369 15.4919 17.9919 15.2369 18.1517 14.9233C18.3333 14.5668 18.3333 14.1001 18.3333 13.1667V6.83333C18.3333 5.89992 18.3333 5.4332 18.1517 5.07668C17.9919 4.76308 17.7369 4.50812 17.4233 4.34832C17.0668 4.16667 16.6001 4.16667 15.6667 4.16667H14.1667M9.16666 15.8333L10.8333 17.5M9.16666 15.8333L10.8333 14.1667M5.83333 15.8333H4.33333C3.39991 15.8333 2.9332 15.8333 2.57668 15.6517C2.26307 15.4919 2.00811 15.2369 1.84832 14.9233C1.66666 14.5668 1.66666 14.1001 1.66666 13.1667V6.83333C1.66666 5.89992 1.66666 5.4332 1.84832 5.07668C2.00811 4.76307 2.26308 4.50811 2.57668 4.34832C2.9332 4.16667 3.39991 4.16667 4.33333 4.16667H10.8333M10.8333 4.16667L9.16666 5.83333M10.8333 4.16667L9.16666 2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
