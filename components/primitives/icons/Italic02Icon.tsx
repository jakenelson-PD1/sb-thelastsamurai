import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Italic02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Italic02Icon({ size = 'md', className, ...props }: Italic02IconProps) {
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
      <path d="M11.0417 3.33325L6.04167 16.6666M13.9583 3.33325L8.95833 16.6666M16.25 3.33325H7.91667M12.0833 16.6666H3.75" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
