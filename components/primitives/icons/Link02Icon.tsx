import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Link02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Link02Icon({ size = 'md', className, ...props }: Link02IconProps) {
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
      <path d="M7.50002 14.1667H5.83335C3.53217 14.1667 1.66669 12.3012 1.66669 10C1.66669 7.69886 3.53217 5.83337 5.83335 5.83337H7.50002M12.5 14.1667H14.1667C16.4679 14.1667 18.3334 12.3012 18.3334 10C18.3334 7.69886 16.4679 5.83337 14.1667 5.83337H12.5M5.83335 10H14.1667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
