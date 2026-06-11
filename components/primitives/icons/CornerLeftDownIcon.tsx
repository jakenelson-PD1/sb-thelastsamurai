import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CornerLeftDownIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CornerLeftDownIcon({ size = 'md', className, ...props }: CornerLeftDownIconProps) {
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
      <path d="M17.5 3.33337H14.6667C11.8664 3.33337 10.4662 3.33337 9.39675 3.87834C8.45592 4.35771 7.691 5.12261 7.21163 6.06342C6.66667 7.13298 6.66667 8.53312 6.66667 11.3334V16.6667M6.66667 16.6667L10.8333 12.5M6.66667 16.6667L2.5 12.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
