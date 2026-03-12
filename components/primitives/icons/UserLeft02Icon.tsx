import { clsx } from 'clsx';

export interface UserLeft02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function UserLeft02Icon({ size = 20, className, ...props }: UserLeft02IconProps) {
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
      <path d="M15.8333 7.5L13.3333 5M13.3333 5L15.8333 2.5M13.3333 5H18.3333M13.3333 17.5V16.5C13.3333 15.0998 13.3333 14.3998 13.0608 13.865C12.8212 13.3946 12.4387 13.0122 11.9683 12.7725C11.4335 12.5 10.7335 12.5 9.33332 12.5H5.66666C4.26652 12.5 3.56646 12.5 3.03168 12.7725C2.56127 13.0122 2.17882 13.3946 1.93914 13.865C1.66666 14.3998 1.66666 15.0998 1.66666 16.5V17.5M10.4167 6.25C10.4167 7.86083 9.11082 9.16667 7.49999 9.16667C5.88916 9.16667 4.58332 7.86083 4.58332 6.25C4.58332 4.63917 5.88916 3.33333 7.49999 3.33333C9.11082 3.33333 10.4167 4.63917 10.4167 6.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
