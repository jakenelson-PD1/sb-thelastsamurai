import { clsx } from 'clsx';

export interface HelpSquareIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HelpSquareIcon({ size = 20, className, ...props }: HelpSquareIconProps) {
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
      <path d="M7.575 7.5C7.77092 6.94306 8.15762 6.47342 8.66667 6.17427C9.17567 5.87513 9.77408 5.76578 10.356 5.86559C10.9379 5.96541 11.4657 6.26793 11.8459 6.71961C12.2261 7.17127 12.4342 7.74293 12.4333 8.33333C12.4333 10 9.93333 10.8333 9.93333 10.8333M10 14.1667H10.0083M6.5 17.5H13.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
