import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Toggle03LeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Toggle03LeftIcon({ size = 'md', className, ...props }: Toggle03LeftIconProps) {
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
      <path d="M1.66669 10C1.66669 7.23857 3.90526 5 6.66669 5H13.3334C16.0948 5 18.3334 7.23857 18.3334 10C18.3334 12.7614 16.0948 15 13.3334 15H6.66669C3.90526 15 1.66669 12.7614 1.66669 10Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66671 12.0834C7.8173 12.0834 8.75004 11.1506 8.75004 10C8.75004 8.84944 7.8173 7.91669 6.66671 7.91669C5.51612 7.91669 4.58337 8.84944 4.58337 10C4.58337 11.1506 5.51612 12.0834 6.66671 12.0834Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
