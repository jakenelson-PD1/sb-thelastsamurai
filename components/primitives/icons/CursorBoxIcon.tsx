import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CursorBoxIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CursorBoxIcon({ size = 'md', className, ...props }: CursorBoxIconProps) {
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
      <path d="M17.5 7.91667V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.91667M14.4885 14.7594L13.0732 17.3878C12.8419 17.8173 12.7262 18.0322 12.5852 18.0883C12.4629 18.1369 12.3247 18.1248 12.2126 18.0557C12.0834 17.976 12.0067 17.7444 11.8534 17.2813L9.58367 10.4261C9.44933 10.0204 9.38217 9.81767 9.4305 9.68258C9.4725 9.565 9.565 9.4725 9.68258 9.4305C9.81767 9.38217 10.0204 9.44933 10.4261 9.58367L17.2812 11.8534C17.7444 12.0068 17.976 12.0835 18.0557 12.2126C18.1248 12.3248 18.1368 12.4629 18.0882 12.5853C18.0322 12.7263 17.8173 12.8419 17.3877 13.0733L14.7594 14.4885C14.694 14.5238 14.6612 14.5414 14.6326 14.564C14.6072 14.5842 14.5842 14.6072 14.564 14.6326C14.5414 14.6612 14.5237 14.694 14.4885 14.7594Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
