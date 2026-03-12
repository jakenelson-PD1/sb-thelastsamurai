import { clsx } from 'clsx';

export interface LogIn04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LogIn04Icon({ size = 20, className, ...props }: LogIn04IconProps) {
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
      <path d="M10 6.66669L13.3333 10M13.3333 10L10 13.3334M13.3333 10H2.5M2.78152 5.83335C4.22239 3.34251 6.91549 1.66669 10 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10C18.3333 14.6024 14.6023 18.3334 10 18.3334C6.91549 18.3334 4.22239 16.6575 2.78152 14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
