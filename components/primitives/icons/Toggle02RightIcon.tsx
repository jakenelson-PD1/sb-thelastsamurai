import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Toggle02RightIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Toggle02RightIcon({ size = 'md', className, ...props }: Toggle02RightIconProps) {
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
      <path d="M11.6663 13.3333H5.00002C3.15907 13.3333 1.66669 11.8409 1.66669 9.99998C1.66669 8.15903 3.15907 6.66665 5.00002 6.66665H11.6663M18.3329 9.99998C18.3329 12.3011 16.4674 14.1666 14.1663 14.1666C11.8651 14.1666 9.9996 12.3011 9.9996 9.99998C9.9996 7.6988 11.8651 5.83331 14.1663 5.83331C16.4674 5.83331 18.3329 7.6988 18.3329 9.99998Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
