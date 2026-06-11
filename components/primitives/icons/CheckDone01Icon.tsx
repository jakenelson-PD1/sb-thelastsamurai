import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CheckDone01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CheckDone01Icon({ size = 'md', className, ...props }: CheckDone01IconProps) {
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
      <g clipPath="url(#checkdone01-clip0_118_36998)">
<path d="M5.00002 12.5L6.66669 14.1667L10.4167 10.4167M6.66669 6.66667V4.33334C6.66669 3.39992 6.66669 2.93321 6.84835 2.57669C7.00813 2.26308 7.2631 2.00811 7.5767 1.84833C7.93322 1.66667 8.39994 1.66667 9.33335 1.66667H15.6667C16.6001 1.66667 17.0669 1.66667 17.4234 1.84833C17.7369 2.00811 17.9919 2.26308 18.1517 2.57669C18.3334 2.93321 18.3334 3.39992 18.3334 4.33334V10.6667C18.3334 11.6001 18.3334 12.0668 18.1517 12.4233C17.9919 12.7369 17.7369 12.9919 17.4234 13.1517C17.0669 13.3333 16.6001 13.3333 15.6667 13.3333H13.3334M4.33335 18.3333H10.6667C11.6001 18.3333 12.0669 18.3333 12.4234 18.1517C12.7369 17.9919 12.9919 17.7369 13.1517 17.4233C13.3334 17.0668 13.3334 16.6001 13.3334 15.6667V9.33334C13.3334 8.39992 13.3334 7.9332 13.1517 7.57669C12.9919 7.26308 12.7369 7.00811 12.4234 6.84833C12.0669 6.66667 11.6001 6.66667 10.6667 6.66667H4.33335C3.39994 6.66667 2.93322 6.66667 2.5767 6.84833C2.2631 7.00811 2.00813 7.26308 1.84835 7.57669C1.66669 7.9332 1.66669 8.39992 1.66669 9.33334V15.6667C1.66669 16.6001 1.66669 17.0668 1.84835 17.4233C2.00813 17.7369 2.2631 17.9919 2.5767 18.1517C2.93322 18.3333 3.39993 18.3333 4.33335 18.3333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="checkdone01-clip0_118_36998">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
