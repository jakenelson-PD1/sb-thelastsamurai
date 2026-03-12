import { clsx } from 'clsx';

export interface BookmarkIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BookmarkIcon({ size = 20, className, ...props }: BookmarkIconProps) {
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
      <path d="M4.16669 6.5C4.16669 5.09987 4.16669 4.3998 4.43917 3.86503C4.67885 3.39462 5.0613 3.01217 5.53171 2.77248C6.06649 2.5 6.76655 2.5 8.16669 2.5H11.8334C13.2335 2.5 13.9335 2.5 14.4684 2.77248C14.9388 3.01217 15.3212 3.39462 15.5609 3.86503C15.8334 4.3998 15.8334 5.09987 15.8334 6.5V17.5L10 14.1667L4.16669 17.5V6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
