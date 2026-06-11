import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CornerUpLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CornerUpLeftIcon({ size = 'md', className, ...props }: CornerUpLeftIconProps) {
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
      <path d="M7.49999 11.6666L3.33333 7.49992M3.33333 7.49992L7.49999 3.33325M3.33333 7.49992H8.66666C11.4669 7.49992 12.8671 7.49992 13.9366 8.04489C14.8774 8.52425 15.6423 9.28917 16.1217 10.23C16.6667 11.2995 16.6667 12.6997 16.6667 15.4999V16.6666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
