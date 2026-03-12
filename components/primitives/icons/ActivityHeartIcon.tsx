import { clsx } from 'clsx';

export interface ActivityHeartIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ActivityHeartIcon({ size = 20, className, ...props }: ActivityHeartIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M12.9167 9.58333H12.0833L10.8333 12.0833L9.16667 7.08333L7.91667 9.58333H7.08334M9.99434 4.27984C8.32817 2.332 5.5498 1.80804 3.46225 3.59168C1.37471 5.37532 1.08081 8.3575 2.72017 10.467C3.95841 12.0603 7.47608 15.2592 9.12334 16.7291C9.42617 16.9993 9.57759 17.1344 9.75484 17.1876C9.90875 17.2338 10.0798 17.2338 10.2338 17.1876C10.411 17.1344 10.5624 16.9993 10.8653 16.7291C12.5125 15.2592 16.0302 12.0603 17.2684 10.467C18.9078 8.3575 18.6498 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99434 4.27984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
