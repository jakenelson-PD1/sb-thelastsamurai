import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SearchSmIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SearchSmIcon({ size = 'md', className, ...props }: SearchSmIconProps) {
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
      <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11168 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11168 5.11168 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11168 14.1667 8.33333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
