import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SunSetting02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SunSetting02Icon({ size = 'md', className, ...props }: SunSetting02IconProps) {
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
      <path d="M18.3334 13.75H1.66669M16.6667 16.6667H3.33335M10 2.5V4.16667M3.33335 10.8333H1.66669M5.26179 6.0951L4.08327 4.91658M14.7379 6.0951L15.9165 4.91658M18.3334 10.8333H16.6667M5.83335 10.8333C5.83335 8.53217 7.69884 6.66667 10 6.66667C12.3012 6.66667 14.1667 8.53217 14.1667 10.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
