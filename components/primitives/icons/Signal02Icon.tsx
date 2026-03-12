import { clsx } from 'clsx';

export interface Signal02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Signal02Icon({ size = 20, className, ...props }: Signal02IconProps) {
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
      <path d="M13.5356 4.79788C15.4882 6.75051 15.4882 9.91637 13.5356 11.869M6.46446 11.869C4.51183 9.91637 4.51183 6.75051 6.46446 4.79788M4.10725 14.226C0.852882 10.9716 0.852882 5.69528 4.10725 2.44092M15.8928 2.44092C19.1471 5.69528 19.1471 10.9716 15.8928 14.226M10 10.0001C10.9204 10.0001 11.6667 9.25395 11.6667 8.33345C11.6667 7.41298 10.9204 6.66678 10 6.66678C9.07951 6.66678 8.33332 7.41298 8.33332 8.33345C8.33332 9.25395 9.07951 10.0001 10 10.0001ZM10 10.0001V17.5001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
