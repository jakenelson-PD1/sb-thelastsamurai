import { clsx } from 'clsx';

export interface User02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function User02Icon({ size = 20, className, ...props }: User02IconProps) {
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
      <path d="M10 12.5C7.35825 12.5 5.00898 13.7755 3.51331 15.755C3.1914 16.181 3.03044 16.394 3.03571 16.6819C3.03978 16.9043 3.17944 17.1849 3.35445 17.3222C3.58097 17.5 3.89487 17.5 4.52267 17.5H15.4773C16.1051 17.5 16.419 17.5 16.6455 17.3222C16.8205 17.1849 16.9602 16.9043 16.9643 16.6819C16.9695 16.394 16.8086 16.181 16.4867 15.755C14.991 13.7755 12.6417 12.5 10 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92891 2.5 6.24998 4.17893 6.24998 6.25C6.24998 8.32107 7.92891 10 10 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
