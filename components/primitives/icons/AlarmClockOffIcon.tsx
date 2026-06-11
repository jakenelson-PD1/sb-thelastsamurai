import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlarmClockOffIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlarmClockOffIcon({ size = 'md', className, ...props }: AlarmClockOffIconProps) {
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
      <path d="M8.74999 4.28487C9.15916 4.20677 9.57749 4.16667 9.99999 4.16667C11.7681 4.16667 13.4638 4.86904 14.7141 6.11929C15.9642 7.36953 16.6667 9.06525 16.6667 10.8333C16.6667 11.2558 16.6266 11.6742 16.5485 12.0833M15.113 15.1114C14.987 15.262 14.8539 15.4075 14.7141 15.5474C13.4638 16.7976 11.7681 17.5 9.99999 17.5C8.23188 17.5 6.53619 16.7976 5.28595 15.5474C4.0357 14.2972 3.33332 12.6014 3.33332 10.8333C3.33332 9.06525 4.0357 7.36953 5.28595 6.11929C5.42456 5.98068 5.56864 5.84881 5.71768 5.72387M3.33332 3.33333L1.66666 5M18.3333 5L15.8333 2.5M4.99999 15.8333L3.33332 17.5M17.5 17.5L2.49999 2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
