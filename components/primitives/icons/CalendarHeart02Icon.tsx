import { clsx } from 'clsx';

export interface CalendarHeart02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CalendarHeart02Icon({ size = 20, className, ...props }: CalendarHeart02IconProps) {
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
      <path d="M17.5 8.33366H2.5M17.5 9.58366V7.33366C17.5 5.93353 17.5 5.23346 17.2275 4.69868C16.9878 4.22828 16.6054 3.84583 16.135 3.60614C15.6002 3.33366 14.9002 3.33366 13.5 3.33366H6.5C5.09987 3.33366 4.3998 3.33366 3.86503 3.60614C3.39462 3.84583 3.01217 4.22828 2.77248 4.69868C2.5 5.23346 2.5 5.93353 2.5 7.33366V14.3337C2.5 15.7338 2.5 16.4338 2.77248 16.9687C3.01217 17.4391 3.39462 17.8215 3.86503 18.0612C4.3998 18.3337 5.09987 18.3337 6.5 18.3337H10.4167M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M14.5813 13.0936C13.9982 12.4443 13.0257 12.2697 12.2951 12.8642C11.5645 13.4587 11.4616 14.4528 12.0354 15.156C12.6092 15.8592 14.5813 17.5003 14.5813 17.5003C14.5813 17.5003 16.5535 15.8592 17.1272 15.156C17.7011 14.4528 17.6107 13.4525 16.8676 12.8642C16.1243 12.2759 15.1645 12.4443 14.5813 13.0936Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
