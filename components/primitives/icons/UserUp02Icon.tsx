import { clsx } from 'clsx';

export interface UserUp02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function UserUp02Icon({ size = 20, className, ...props }: UserUp02IconProps) {
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
      <path d="M13.3334 5L15.8334 2.5M15.8334 2.5L18.3334 5M15.8334 2.5V7.5M13.3334 17.5V16.5C13.3334 15.0998 13.3334 14.3998 13.0609 13.865C12.8212 13.3946 12.4388 13.0122 11.9684 12.7725C11.4335 12.5 10.7335 12.5 9.33335 12.5H5.66669C4.26655 12.5 3.56649 12.5 3.03171 12.7725C2.5613 13.0122 2.17885 13.3946 1.93917 13.865C1.66669 14.3998 1.66669 15.0998 1.66669 16.5V17.5M10.4167 6.25C10.4167 7.86083 9.11085 9.16667 7.50002 9.16667C5.88919 9.16667 4.58335 7.86083 4.58335 6.25C4.58335 4.63917 5.88919 3.33333 7.50002 3.33333C9.11085 3.33333 10.4167 4.63917 10.4167 6.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
