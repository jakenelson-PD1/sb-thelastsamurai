import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Toggle02LeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Toggle02LeftIcon({ size = 'md', className, ...props }: Toggle02LeftIconProps) {
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
      <path d="M8.33377 13.3333H15C16.8409 13.3333 18.3334 11.8409 18.3334 9.99998C18.3334 8.15903 16.8409 6.66665 15 6.66665H8.33377M10 9.99998C10 12.3011 8.13454 14.1666 5.83335 14.1666C3.53217 14.1666 1.66669 12.3011 1.66669 9.99998C1.66669 7.6988 3.53217 5.83331 5.83335 5.83331C8.13454 5.83331 10 7.6988 10 9.99998Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
