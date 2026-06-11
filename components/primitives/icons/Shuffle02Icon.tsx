import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Shuffle02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Shuffle02Icon({ size = 'md', className, ...props }: Shuffle02IconProps) {
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
      <path d="M17.5 13.3333V17.5M17.5 17.5H13.3333M17.5 17.5L12.5 12.5M2.5 2.5L7.5 7.5M13.3333 2.5H17.5M17.5 2.5V6.66667M17.5 2.5L2.5 17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
