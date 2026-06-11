import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ClockRewindIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ClockRewindIcon({ size = 'md', className, ...props }: ClockRewindIconProps) {
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
      <path d="M18.9167 11.25L17.2504 9.58333L15.5833 11.25M17.5 10C17.5 14.1422 14.1422 17.5 10 17.5C5.85787 17.5 2.5 14.1422 2.5 10C2.5 5.85787 5.85787 2.5 10 2.5C12.7516 2.5 15.1571 3.98178 16.4621 6.19091M10 5.83333V10L12.5 11.6667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
