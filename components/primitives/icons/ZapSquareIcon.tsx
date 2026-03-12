import { clsx } from 'clsx';

export interface ZapSquareIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ZapSquareIcon({ size = 20, className, ...props }: ZapSquareIconProps) {
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
      <path d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9002 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86503C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9002 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9002 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86503 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9002 2.5 13.5V6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5L6.19467 10.1891C5.9438 10.5312 5.81838 10.7023 5.82242 10.8452C5.82595 10.9695 5.88488 11.0858 5.9831 11.1622C6.09595 11.25 6.30806 11.25 6.73227 11.25H10V15L13.8053 9.81092C14.0562 9.46883 14.1817 9.29775 14.1776 9.15483C14.1741 9.0305 14.1151 8.91417 14.0169 8.83775C13.9041 8.75 13.6919 8.75 13.2678 8.75H10V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
