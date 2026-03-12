import { clsx } from 'clsx';

export interface Database02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Database02Icon({ size = 20, className, ...props }: Database02IconProps) {
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
      <path d="M17.5 4.1665C17.5 5.54721 14.1422 6.6665 10 6.6665C5.85787 6.6665 2.5 5.54721 2.5 4.1665M17.5 4.1665C17.5 2.7858 14.1422 1.6665 10 1.6665C5.85787 1.6665 2.5 2.7858 2.5 4.1665M17.5 4.1665V15.8332C17.5 17.2165 14.1667 18.3332 10 18.3332C5.83333 18.3332 2.5 17.2165 2.5 15.8332V4.1665M17.5 8.10001C17.5 9.48334 14.1667 10.6 10 10.6C5.83333 10.6 2.5 9.48334 2.5 8.10001M17.5 12.0332C17.5 13.4165 14.1667 14.5332 10 14.5332C5.83333 14.5332 2.5 13.4165 2.5 12.0332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
