import { clsx } from 'clsx';

export interface Divide02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Divide02Icon({ size = 20, className, ...props }: Divide02IconProps) {
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
      <path d="M3.33333 10H16.6667M11.6667 5.00001C11.6667 5.92049 10.9205 6.66668 9.99999 6.66668C9.07949 6.66668 8.33333 5.92049 8.33333 5.00001C8.33333 4.07954 9.07949 3.33334 9.99999 3.33334C10.9205 3.33334 11.6667 4.07954 11.6667 5.00001ZM11.6667 15C11.6667 15.9205 10.9205 16.6667 9.99999 16.6667C9.07949 16.6667 8.33333 15.9205 8.33333 15C8.33333 14.0795 9.07949 13.3333 9.99999 13.3333C10.9205 13.3333 11.6667 14.0795 11.6667 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
