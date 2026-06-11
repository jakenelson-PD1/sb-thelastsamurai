import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlarmClockCheckIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlarmClockCheckIcon({ size = 'md', className, ...props }: AlarmClockCheckIconProps) {
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
      <path d="M4.16667 2.5L1.66667 5M18.3333 5L15.8333 2.5M5.00001 15.8333L3.33334 17.5M15 15.8333L16.6667 17.5M7.5 11.25L9.16667 12.9167L12.9167 9.16667M10 17.5C11.7681 17.5 13.4638 16.7976 14.7141 15.5474C15.9643 14.2972 16.6667 12.6014 16.6667 10.8333C16.6667 9.06525 15.9643 7.36953 14.7141 6.11929C13.4638 4.86904 11.7681 4.16667 10 4.16667C8.2319 4.16667 6.53621 4.86904 5.28596 6.11929C4.03571 7.36953 3.33334 9.06525 3.33334 10.8333C3.33334 12.6014 4.03571 14.2972 5.28596 15.5474C6.53621 16.7976 8.2319 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
