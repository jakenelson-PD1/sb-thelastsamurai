import { clsx } from 'clsx';

export interface CheckSquareBrokenIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CheckSquareBrokenIcon({ size = 20, className, ...props }: CheckSquareBrokenIconProps) {
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
      <path d="M7.5 9.16667L10 11.6667L18.3333 3.33333M13.3333 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H13.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
