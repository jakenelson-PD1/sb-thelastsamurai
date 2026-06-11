import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PaperclipIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PaperclipIcon({ size = 'md', className, ...props }: PaperclipIconProps) {
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
      <path d="M17.6271 9.083L10.1141 16.596C8.40548 18.3045 5.63539 18.3045 3.92685 16.596C2.21831 14.8874 2.21831 12.1173 3.92685 10.4087L11.4399 2.89577C12.5789 1.75675 14.4256 1.75675 15.5646 2.89577C16.7036 4.03481 16.7036 5.88154 15.5646 7.02056L8.34631 14.2389C7.77675 14.8085 6.85339 14.8085 6.28388 14.2389C5.71436 13.6694 5.71436 12.7461 6.28388 12.1766L12.6184 5.84206" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
