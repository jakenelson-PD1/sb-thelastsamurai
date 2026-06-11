import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface UserRight02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function UserRight02Icon({ size = 'md', className, ...props }: UserRight02IconProps) {
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
      <path d="M15.8333 7.5L18.3333 5M18.3333 5L15.8333 2.5M18.3333 5H13.3333M13.3333 17.5V16.5C13.3333 15.0998 13.3333 14.3998 13.0608 13.865C12.8212 13.3946 12.4388 13.0122 11.9683 12.7725C11.4335 12.5 10.7335 12.5 9.33334 12.5H5.66667C4.26654 12.5 3.56647 12.5 3.0317 12.7725C2.56129 13.0122 2.17884 13.3946 1.93916 13.865C1.66667 14.3998 1.66667 15.0998 1.66667 16.5V17.5M10.4167 6.25C10.4167 7.86083 9.11084 9.16667 7.5 9.16667C5.88917 9.16667 4.58334 7.86083 4.58334 6.25C4.58334 4.63917 5.88917 3.33333 7.5 3.33333C9.11084 3.33333 10.4167 4.63917 10.4167 6.25Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
