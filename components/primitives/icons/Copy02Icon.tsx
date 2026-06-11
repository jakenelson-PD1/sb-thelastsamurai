import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Copy02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Copy02Icon({ size = 'md', className, ...props }: Copy02IconProps) {
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
      <g clipPath="url(#copy02-clip0_118_37141)">
<path d="M13.3333 6.66666V4.33332C13.3333 3.39991 13.3333 2.93319 13.1517 2.57667C12.9919 2.26306 12.7369 2.0081 12.4233 1.84831C12.0668 1.66666 11.6001 1.66666 10.6667 1.66666H4.33332C3.39991 1.66666 2.93319 1.66666 2.57667 1.84831C2.26306 2.0081 2.0081 2.26306 1.84831 2.57667C1.66666 2.93319 1.66666 3.39991 1.66666 4.33332V10.6667C1.66666 11.6001 1.66666 12.0668 1.84831 12.4233C2.0081 12.7369 2.26306 12.9919 2.57667 13.1517C2.93319 13.3333 3.39991 13.3333 4.33332 13.3333H6.66666M9.33332 18.3333H15.6667C16.6001 18.3333 17.0668 18.3333 17.4233 18.1517C17.7369 17.9919 17.9919 17.7369 18.1517 17.4233C18.3333 17.0668 18.3333 16.6001 18.3333 15.6667V9.33332C18.3333 8.39991 18.3333 7.93319 18.1517 7.57667C17.9919 7.26306 17.7369 7.0081 17.4233 6.84831C17.0668 6.66666 16.6001 6.66666 15.6667 6.66666H9.33332C8.39991 6.66666 7.93319 6.66666 7.57667 6.84831C7.26306 7.0081 7.0081 7.26306 6.84831 7.57667C6.66666 7.93319 6.66666 8.39991 6.66666 9.33332V15.6667C6.66666 16.6001 6.66666 17.0668 6.84831 17.4233C7.0081 17.7369 7.26306 17.9919 7.57667 18.1517C7.93319 18.3333 8.39991 18.3333 9.33332 18.3333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="copy02-clip0_118_37141">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
