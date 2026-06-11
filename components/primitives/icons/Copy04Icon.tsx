import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Copy04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Copy04Icon({ size = 'md', className, ...props }: Copy04IconProps) {
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
      <g clipPath="url(#copy04-clip0_118_37167)">
<path d="M13.3334 13.3333V15.6667C13.3334 16.6001 13.3334 17.0668 13.1517 17.4233C12.9919 17.7369 12.7369 17.9919 12.4234 18.1517C12.0669 18.3333 11.6001 18.3333 10.6667 18.3333H4.33335C3.39994 18.3333 2.93322 18.3333 2.5767 18.1517C2.2631 17.9919 2.00813 17.7369 1.84835 17.4233C1.66669 17.0668 1.66669 16.6001 1.66669 15.6667V9.33332C1.66669 8.39991 1.66669 7.93319 1.84835 7.57667C2.00813 7.26306 2.2631 7.0081 2.5767 6.84831C2.93322 6.66666 3.39994 6.66666 4.33335 6.66666H6.66669M9.33335 13.3333H15.6667C16.6001 13.3333 17.0669 13.3333 17.4234 13.1517C17.7369 12.9919 17.9919 12.7369 18.1517 12.4233C18.3334 12.0668 18.3334 11.6001 18.3334 10.6667V4.33332C18.3334 3.39991 18.3334 2.93319 18.1517 2.57667C17.9919 2.26306 17.7369 2.0081 17.4234 1.84831C17.0669 1.66666 16.6001 1.66666 15.6667 1.66666H9.33335C8.39994 1.66666 7.93322 1.66666 7.5767 1.84831C7.2631 2.0081 7.00813 2.26306 6.84835 2.57667C6.66669 2.93319 6.66669 3.3999 6.66669 4.33332V10.6667C6.66669 11.6001 6.66669 12.0668 6.84835 12.4233C7.00813 12.7369 7.2631 12.9919 7.5767 13.1517C7.93322 13.3333 8.39994 13.3333 9.33335 13.3333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="copy04-clip0_118_37167">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
