import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowDownIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowDownIcon({ size = 'md', className, ...props }: ArrowDownIconProps) {
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
      <path d="M10 4.16663V15.8333M10 15.8333L15.8334 9.99996M10 15.8333L4.16669 9.99996" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
