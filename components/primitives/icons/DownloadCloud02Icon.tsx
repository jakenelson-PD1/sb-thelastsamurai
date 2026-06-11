import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface DownloadCloud02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function DownloadCloud02Icon({ size = 'md', className, ...props }: DownloadCloud02IconProps) {
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
      <path d="M6.66666 14.1667L9.99999 17.5M9.99999 17.5L13.3333 14.1667M9.99999 17.5V10M16.6667 13.9523C17.6846 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3976 5.73833 13.3051 5.58145C12.2184 3.73737 10.212 2.5 7.91666 2.5C4.46487 2.5 1.66666 5.29822 1.66666 8.75C1.66666 10.4717 2.36286 12.0309 3.48911 13.1612" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
