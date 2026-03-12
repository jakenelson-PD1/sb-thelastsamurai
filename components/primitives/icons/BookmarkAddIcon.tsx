import { clsx } from 'clsx';

export interface BookmarkAddIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BookmarkAddIcon({ size = 20, className, ...props }: BookmarkAddIconProps) {
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
      <path d="M10 10.8333V5.83333M7.5 8.33333H12.5M15.8333 17.5V6.5C15.8333 5.09987 15.8333 4.3998 15.5608 3.86503C15.3212 3.39462 14.9387 3.01217 14.4683 2.77248C13.9335 2.5 13.2335 2.5 11.8333 2.5H8.16666C6.76653 2.5 6.06646 2.5 5.53169 2.77248C5.06128 3.01217 4.67883 3.39462 4.43915 3.86503C4.16666 4.3998 4.16666 5.09987 4.16666 6.5V17.5L10 14.1667L15.8333 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
