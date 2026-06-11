import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface DropIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function DropIcon({ size = 'md', className, ...props }: DropIconProps) {
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
      <path d="M16.6667 11.6667C16.6667 15.3487 13.6819 18.3334 10 18.3334C6.31811 18.3334 3.33334 15.3487 3.33334 11.6667C3.33334 10.7827 3.50544 9.93875 3.81794 9.16675C4.80692 6.72356 10 1.66675 10 1.66675C10 1.66675 15.1931 6.72356 16.1821 9.16675C16.4946 9.93875 16.6667 10.7827 16.6667 11.6667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
