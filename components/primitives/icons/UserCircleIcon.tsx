import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface UserCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function UserCircleIcon({ size = 'md', className, ...props }: UserCircleIconProps) {
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
      <g clipPath="url(#usercircle-clip0_118_46116)">
<path d="M4.43027 16.1985C4.9372 15.0042 6.12079 14.1665 7.50002 14.1665H12.5C13.8793 14.1665 15.0629 15.0042 15.5698 16.1985M13.3334 7.9165C13.3334 9.75742 11.8409 11.2498 10 11.2498C8.15907 11.2498 6.66669 9.75742 6.66669 7.9165C6.66669 6.07555 8.15907 4.58317 10 4.58317C11.8409 4.58317 13.3334 6.07555 13.3334 7.9165ZM18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="usercircle-clip0_118_46116">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
