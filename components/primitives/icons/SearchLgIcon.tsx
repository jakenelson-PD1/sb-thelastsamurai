import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SearchLgIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SearchLgIcon({ size = 'md', className, ...props }: SearchLgIconProps) {
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
      <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4953 13.4953 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4953 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4953 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
