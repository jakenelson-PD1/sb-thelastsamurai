import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CalendarPlus02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CalendarPlus02Icon({ size = 'md', className, ...props }: CalendarPlus02IconProps) {
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
      <path d="M17.5 9.58366V7.33366C17.5 5.93353 17.5 5.23346 17.2275 4.69868C16.9878 4.22828 16.6054 3.84583 16.135 3.60614C15.6002 3.33366 14.9002 3.33366 13.5 3.33366H6.5C5.09987 3.33366 4.3998 3.33366 3.86503 3.60614C3.39462 3.84583 3.01217 4.22828 2.77248 4.69868C2.5 5.23346 2.5 5.93353 2.5 7.33366V14.3337C2.5 15.7338 2.5 16.4338 2.77248 16.9687C3.01217 17.4391 3.39462 17.8215 3.86503 18.0612C4.3998 18.3337 5.09987 18.3337 6.5 18.3337H10.4167M17.5 8.33366H2.5M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M15 17.5003V12.5003M12.5 15.0003H17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
