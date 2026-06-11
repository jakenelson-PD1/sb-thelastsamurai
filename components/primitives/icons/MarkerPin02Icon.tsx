import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MarkerPin02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MarkerPin02Icon({ size = 'md', className, ...props }: MarkerPin02IconProps) {
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
      <path d="M10 10.417C11.3807 10.417 12.5 9.29774 12.5 7.91699C12.5 6.53628 11.3807 5.41699 10 5.41699C8.61925 5.41699 7.5 6.53628 7.5 7.91699C7.5 9.29774 8.61925 10.417 10 10.417Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99999 18.3337C11.6667 15.0003 16.6667 12.8489 16.6667 8.33366C16.6667 4.65176 13.6819 1.66699 9.99999 1.66699C6.31809 1.66699 3.33333 4.65176 3.33333 8.33366C3.33333 12.8489 8.33333 15.0003 9.99999 18.3337Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
