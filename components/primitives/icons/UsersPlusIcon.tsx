import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface UsersPlusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function UsersPlusIcon({ size = 'md', className, ...props }: UsersPlusIconProps) {
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
      <path d="M15.8334 17.5V12.5M13.3334 15H18.3334M10 12.5H6.66669C5.11355 12.5 4.33698 12.5 3.72441 12.7537C2.90765 13.0921 2.25874 13.741 1.92042 14.5577C1.66669 15.1703 1.66669 15.9468 1.66669 17.5M12.9167 2.7423C14.1383 3.23679 15 4.43442 15 5.83333C15 7.23224 14.1383 8.42992 12.9167 8.92433M11.25 5.83333C11.25 7.67428 9.7576 9.16667 7.91669 9.16667C6.07574 9.16667 4.58335 7.67428 4.58335 5.83333C4.58335 3.99238 6.07574 2.5 7.91669 2.5C9.7576 2.5 11.25 3.99238 11.25 5.83333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
