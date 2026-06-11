import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlarmClockPlusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlarmClockPlusIcon({ size = 'md', className, ...props }: AlarmClockPlusIconProps) {
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
      <path d="M4.16669 2.5L1.66669 5M18.3334 5L15.8334 2.5M5.00002 15.8333L3.33335 17.5M15 15.8333L16.6667 17.5M10 13.3333V8.33333M7.50002 10.8333H12.5M10 17.5C11.7681 17.5 13.4639 16.7976 14.7141 15.5474C15.9643 14.2972 16.6667 12.6014 16.6667 10.8333C16.6667 9.06525 15.9643 7.36953 14.7141 6.11929C13.4639 4.86904 11.7681 4.16667 10 4.16667C8.23191 4.16667 6.53622 4.86904 5.28598 6.11929C4.03573 7.36953 3.33335 9.06525 3.33335 10.8333C3.33335 12.6014 4.03573 14.2972 5.28598 15.5474C6.53622 16.7976 8.23191 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
