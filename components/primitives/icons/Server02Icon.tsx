import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Server02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Server02Icon({ size = 'md', className, ...props }: Server02IconProps) {
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
      <path d="M5.00002 6.66683H5.00835M5.00002 13.3335H5.00835M5.00002 10.0002H15M5.00002 10.0002C3.15907 10.0002 1.66669 8.50775 1.66669 6.66683C1.66669 4.82588 3.15907 3.3335 5.00002 3.3335H15C16.8409 3.3335 18.3334 4.82588 18.3334 6.66683C18.3334 8.50775 16.8409 10.0002 15 10.0002M5.00002 10.0002C3.15907 10.0002 1.66669 11.4926 1.66669 13.3335C1.66669 15.1744 3.15907 16.6668 5.00002 16.6668H15C16.8409 16.6668 18.3334 15.1744 18.3334 13.3335C18.3334 11.4926 16.8409 10.0002 15 10.0002" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
