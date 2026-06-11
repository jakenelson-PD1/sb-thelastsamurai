import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignVerticalCenter02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignVerticalCenter02Icon({ size = 'md', className, ...props }: AlignVerticalCenter02IconProps) {
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
      <path d="M8.33334 15V5C8.33334 4.22343 8.33334 3.83515 8.20648 3.52886C8.03732 3.12048 7.71286 2.79603 7.30449 2.62687C6.99819 2.5 6.60991 2.5 5.83334 2.5C5.05678 2.5 4.66849 2.5 4.3622 2.62687C3.95383 2.79603 3.62937 3.12048 3.46021 3.52886C3.33334 3.83515 3.33334 4.22343 3.33334 5V15C3.33334 15.7766 3.33334 16.1648 3.46021 16.4712C3.62937 16.8795 3.95383 17.204 4.3622 17.3732C4.66849 17.5 5.05678 17.5 5.83334 17.5C6.60991 17.5 6.99819 17.5 7.30449 17.3732C7.71286 17.204 8.03732 16.8795 8.20648 16.4712C8.33334 16.1648 8.33334 15.7766 8.33334 15Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.6667 13.3332V6.6665C16.6667 5.88994 16.6667 5.50165 16.5399 5.19536C16.3707 4.78699 16.0462 4.46253 15.6379 4.29337C15.3315 4.1665 14.9433 4.1665 14.1667 4.1665C13.3901 4.1665 13.0019 4.1665 12.6955 4.29337C12.2872 4.46253 11.9627 4.78699 11.7935 5.19536C11.6667 5.50165 11.6667 5.88994 11.6667 6.6665V13.3332C11.6667 14.1098 11.6667 14.498 11.7935 14.8043C11.9627 15.2127 12.2872 15.5372 12.6955 15.7063C13.0019 15.8332 13.3901 15.8332 14.1667 15.8332C14.9433 15.8332 15.3315 15.8332 15.6379 15.7063C16.0462 15.5372 16.3707 15.2127 16.5399 14.8043C16.6667 14.498 16.6667 14.1098 16.6667 13.3332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
