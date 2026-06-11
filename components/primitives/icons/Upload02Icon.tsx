import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Upload02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Upload02Icon({ size = 'md', className, ...props }: Upload02IconProps) {
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
      <path d="M17.5 2.5H2.5M15 10.8333L10 5.83333M10 5.83333L5 10.8333M10 5.83333V17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
