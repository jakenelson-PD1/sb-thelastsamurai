import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface UserCheck02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function UserCheck02Icon({ size = 'md', className, ...props }: UserCheck02IconProps) {
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
      <path d="M13.3334 17.5002V16.5002C13.3334 15.1 13.3334 14.4 13.0609 13.8652C12.8212 13.3947 12.4388 13.0123 11.9684 12.7727C11.4335 12.5002 10.7335 12.5002 9.33335 12.5002H5.66669C4.26655 12.5002 3.56649 12.5002 3.03171 12.7727C2.5613 13.0123 2.17885 13.3947 1.93917 13.8652C1.66669 14.4 1.66669 15.1 1.66669 16.5002V17.5002M13.3334 5.00016L15 6.66683L18.3334 3.3335M10.4167 6.25016C10.4167 7.861 9.11085 9.16683 7.50002 9.16683C5.88919 9.16683 4.58335 7.861 4.58335 6.25016C4.58335 4.63933 5.88919 3.3335 7.50002 3.3335C9.11085 3.3335 10.4167 4.63933 10.4167 6.25016Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
