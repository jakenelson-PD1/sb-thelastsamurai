import { clsx } from 'clsx';

export interface UserDown02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function UserDown02Icon({ size = 20, className, ...props }: UserDown02IconProps) {
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
      <path d="M13.3333 5.8335L15.8333 8.3335M15.8333 8.3335L18.3333 5.8335M15.8333 8.3335V3.3335M13.3333 17.5002V16.5002C13.3333 15.1 13.3333 14.4 13.0608 13.8652C12.8212 13.3947 12.4387 13.0123 11.9683 12.7727C11.4335 12.5002 10.7335 12.5002 9.33333 12.5002H5.66666C4.26653 12.5002 3.56646 12.5002 3.03169 12.7727C2.56128 13.0123 2.17883 13.3947 1.93915 13.8652C1.66666 14.4 1.66666 15.1 1.66666 16.5002V17.5002M10.4167 6.25016C10.4167 7.861 9.11083 9.16683 7.5 9.16683C5.88916 9.16683 4.58333 7.861 4.58333 6.25016C4.58333 4.63933 5.88916 3.3335 7.5 3.3335C9.11083 3.3335 10.4167 4.63933 10.4167 6.25016Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
