import { clsx } from 'clsx';

export interface LineChartUp04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LineChartUp04Icon({ size = 20, className, ...props }: LineChartUp04IconProps) {
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
      <path d="M17.5 7.5L12.1263 11.3384C11.9629 11.455 11.8813 11.5133 11.7939 11.5309C11.7168 11.5464 11.6369 11.5398 11.5635 11.5118C11.4802 11.4802 11.4092 11.4092 11.2673 11.2673L8.73267 8.73267C8.59083 8.59083 8.51983 8.51983 8.4365 8.48817C8.36308 8.46017 8.28317 8.45358 8.2061 8.46908C8.11867 8.48667 8.03704 8.545 7.87378 8.66158L2.5 12.5M6.5 17.5H13.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
