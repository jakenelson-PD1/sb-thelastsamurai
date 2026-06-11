import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Expand02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Expand02Icon({ size = 'md', className, ...props }: Expand02IconProps) {
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
      <path d="M2.5 17.5L17.5 2.5M2.5 17.5H7.5M2.5 17.5V12.5M17.5 2.5H12.5M17.5 2.5V7.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
