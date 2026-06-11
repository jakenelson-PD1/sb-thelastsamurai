import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Tablet02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Tablet02Icon({ size = 'md', className, ...props }: Tablet02IconProps) {
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
      <path d="M12.5 1.6665V2.83317C12.5 3.29988 12.5 3.53324 12.4092 3.7115C12.3293 3.8683 12.2018 3.99578 12.045 4.07568C11.8668 4.1665 11.6334 4.1665 11.1667 4.1665H8.83334C8.36659 4.1665 8.13328 4.1665 7.95502 4.07568C7.79822 3.99578 7.67073 3.8683 7.59083 3.7115C7.50001 3.53324 7.50001 3.29988 7.50001 2.83317V1.6665M6.00001 18.3332H14C14.9334 18.3332 15.4002 18.3332 15.7567 18.1515C16.0703 17.9918 16.3253 17.7368 16.485 17.4232C16.6667 17.0667 16.6667 16.5999 16.6667 15.6665V4.33317C16.6667 3.39975 16.6667 2.93304 16.485 2.57652C16.3253 2.26291 16.0703 2.00795 15.7567 1.84816C15.4002 1.6665 14.9334 1.6665 14 1.6665H6.00001C5.06659 1.6665 4.59988 1.6665 4.24336 1.84816C3.92975 2.00795 3.67479 2.26291 3.515 2.57652C3.33334 2.93304 3.33334 3.39975 3.33334 4.33317V15.6665C3.33334 16.5999 3.33334 17.0667 3.515 17.4232C3.67479 17.7368 3.92975 17.9918 4.24336 18.1515C4.59988 18.3332 5.06658 18.3332 6.00001 18.3332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
