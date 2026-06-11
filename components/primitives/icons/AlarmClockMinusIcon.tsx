import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlarmClockMinusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlarmClockMinusIcon({ size = 'md', className, ...props }: AlarmClockMinusIconProps) {
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
      <path d="M4.16666 2.5L1.66666 5M18.3333 5L15.8333 2.5M4.99999 15.8333L3.33332 17.5M15 15.8333L16.6667 17.5M7.49999 10.8333H12.5M9.99999 17.5C11.7681 17.5 13.4638 16.7976 14.7141 15.5474C15.9642 14.2972 16.6667 12.6014 16.6667 10.8333C16.6667 9.06525 15.9642 7.36953 14.7141 6.11929C13.4638 4.86904 11.7681 4.16667 9.99999 4.16667C8.23188 4.16667 6.53619 4.86904 5.28595 6.11929C4.0357 7.36953 3.33332 9.06525 3.33332 10.8333C3.33332 12.6014 4.0357 14.2972 5.28595 15.5474C6.53619 16.7976 8.23188 17.5 9.99999 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
