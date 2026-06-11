import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BrowserIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BrowserIcon({ size = 'md', className, ...props }: BrowserIconProps) {
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
      <path d="M18.3334 7.5H1.66669M1.66669 6.5V13.5C1.66669 14.9002 1.66669 15.6002 1.93917 16.135C2.17885 16.6054 2.5613 16.9878 3.03171 17.2275C3.56649 17.5 4.26655 17.5 5.66669 17.5H14.3334C15.7335 17.5 16.4335 17.5 16.9684 17.2275C17.4388 16.9878 17.8212 16.6054 18.0609 16.135C18.3334 15.6002 18.3334 14.9002 18.3334 13.5V6.5C18.3334 5.09987 18.3334 4.39981 18.0609 3.86503C17.8212 3.39462 17.4388 3.01217 16.9684 2.77248C16.4335 2.5 15.7335 2.5 14.3334 2.5H5.66669C4.26655 2.5 3.56649 2.5 3.03171 2.77248C2.5613 3.01217 2.17885 3.39462 1.93917 3.86503C1.66669 4.3998 1.66669 5.09987 1.66669 6.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
