import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CornerDownLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CornerDownLeftIcon({ size = 'md', className, ...props }: CornerDownLeftIconProps) {
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
      <path d="M16.6667 3.33337V4.50004C16.6667 7.3003 16.6667 8.70046 16.1217 9.76996C15.6423 10.7108 14.8774 11.4757 13.9366 11.955C12.8671 12.5 11.4669 12.5 8.66668 12.5H3.33334M3.33334 12.5L7.50001 8.33337M3.33334 12.5L7.50001 16.6667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
