import { clsx } from 'clsx';

export interface Database03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Database03Icon({ size = 20, className, ...props }: Database03IconProps) {
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
      <path d="M11.6667 16.6665C11.6667 17.587 10.9205 18.3332 10 18.3332C9.0795 18.3332 8.33333 17.587 8.33333 16.6665M11.6667 16.6665C11.6667 15.746 10.9205 14.9998 10 14.9998M11.6667 16.6665H17.5M8.33333 16.6665C8.33333 15.746 9.0795 14.9998 10 14.9998M8.33333 16.6665H2.5M10 14.9998V11.6665M10 11.6665C14.1667 11.6665 17.5 10.5498 17.5 9.1665V4.1665M10 11.6665C5.83333 11.6665 2.5 10.5498 2.5 9.1665V4.1665M17.5 4.1665C17.5 5.54721 14.1422 6.6665 10 6.6665C5.85787 6.6665 2.5 5.54721 2.5 4.1665M17.5 4.1665C17.5 2.7858 14.1422 1.6665 10 1.6665C5.85787 1.6665 2.5 2.7858 2.5 4.1665" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
