import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CheckHeartIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CheckHeartIcon({ size = 'md', className, ...props }: CheckHeartIconProps) {
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
      <path d="M7.50001 9.16667L9.16667 10.8333L12.9167 7.08333M9.99434 4.27984C8.32817 2.332 5.5498 1.80804 3.46225 3.59168C1.37471 5.37532 1.08081 8.3575 2.72017 10.467C3.95841 12.0603 7.47608 15.2592 9.12334 16.7291C9.42617 16.9993 9.57759 17.1344 9.75484 17.1876C9.90875 17.2338 10.0798 17.2338 10.2338 17.1876C10.411 17.1344 10.5624 16.9993 10.8653 16.7291C12.5125 15.2592 16.0302 12.0603 17.2684 10.467C18.9078 8.3575 18.6498 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99434 4.27984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
