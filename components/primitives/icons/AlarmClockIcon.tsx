import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlarmClockIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlarmClockIcon({ size = 'md', className, ...props }: AlarmClockIconProps) {
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
      <path d="M4.16666 2.5L1.66666 5M18.3333 5L15.8333 2.5M5 15.8333L3.33333 17.5M15 15.8333L16.6667 17.5M10 7.5V10.8333L11.6667 12.5M10 17.5C11.7681 17.5 13.4638 16.7976 14.7141 15.5474C15.9642 14.2972 16.6667 12.6014 16.6667 10.8333C16.6667 9.06525 15.9642 7.36953 14.7141 6.11929C13.4638 4.86904 11.7681 4.16667 10 4.16667C8.23189 4.16667 6.5362 4.86904 5.28596 6.11929C4.03571 7.36953 3.33333 9.06525 3.33333 10.8333C3.33333 12.6014 4.03571 14.2972 5.28596 15.5474C6.5362 16.7976 8.23189 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
