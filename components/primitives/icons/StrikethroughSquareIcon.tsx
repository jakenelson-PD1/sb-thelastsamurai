import { clsx } from 'clsx';

export interface StrikethroughSquareIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function StrikethroughSquareIcon({ size = 20, className, ...props }: StrikethroughSquareIconProps) {
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
      <path d="M5 10H15M9.16667 10H10.8333C11.9839 10 12.9167 10.9327 12.9167 12.0833C12.9167 13.2339 11.9839 14.1667 10.8333 14.1667H9.02775C8.19856 14.1667 7.49057 13.6476 7.21101 12.9167M12.789 7.08333C12.5094 6.3524 11.8014 5.83333 10.9723 5.83333H9.16667C8.31237 5.83333 7.57817 6.34754 7.25668 7.08333M6.5 17.5H13.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
