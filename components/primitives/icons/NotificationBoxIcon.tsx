import { clsx } from 'clsx';

export interface NotificationBoxIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function NotificationBoxIcon({ size = 20, className, ...props }: NotificationBoxIconProps) {
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
      <path d="M9.16667 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86503 3.60581C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23313 2.5 5.9332 2.5 7.33333V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H12.6667C14.0668 17.5 14.7668 17.5 15.3017 17.2275C15.7721 16.9878 16.1545 16.6054 16.3942 16.135C16.6667 15.6002 16.6667 14.9002 16.6667 13.5V10.8333M16.7677 3.23223C17.7441 4.20854 17.7441 5.79146 16.7677 6.76776C15.7914 7.74407 14.2086 7.74407 13.2322 6.76776C12.2559 5.79146 12.2559 4.20854 13.2322 3.23223C14.2086 2.25592 15.7914 2.25592 16.7677 3.23223Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
