import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ClockStopwatchIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ClockStopwatchIcon({ size = 'md', className, ...props }: ClockStopwatchIconProps) {
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
      <path d="M10 7.91699V11.2503L12.0834 12.5003M10 4.16699C6.088 4.16699 2.91669 7.33831 2.91669 11.2503C2.91669 15.1623 6.088 18.3337 10 18.3337C13.912 18.3337 17.0834 15.1623 17.0834 11.2503C17.0834 7.33831 13.912 4.16699 10 4.16699ZM10 4.16699V1.66699M8.33335 1.66699H11.6667M16.9409 4.66036L15.6909 3.41036L16.3159 4.03536M3.0592 4.66036L4.3092 3.41036L3.6842 4.03536" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
