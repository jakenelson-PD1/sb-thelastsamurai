import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MusicNote02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MusicNote02Icon({ size = 'md', className, ...props }: MusicNote02IconProps) {
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
      <path d="M10 15.0002V4.65756C10 3.94321 10 3.58605 10.1504 3.37093C10.2818 3.1831 10.4847 3.05766 10.7115 3.02416C10.9712 2.9858 11.2907 3.14553 11.9296 3.465L15 5.00019M10 15.0002C10 16.3809 8.88075 17.5002 7.5 17.5002C6.11929 17.5002 5 16.3809 5 15.0002C5 13.6195 6.11929 12.5002 7.5 12.5002C8.88075 12.5002 10 13.6195 10 15.0002Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
