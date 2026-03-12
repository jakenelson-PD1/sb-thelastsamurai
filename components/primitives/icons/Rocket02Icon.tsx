import { clsx } from 'clsx';

export interface Rocket02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Rocket02Icon({ size = 20, className, ...props }: Rocket02IconProps) {
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
      <path d="M9.99998 12.4996L7.49998 9.99959M9.99998 12.4996C11.164 12.0568 12.2807 11.4985 13.3333 10.8329M9.99998 12.4996V16.6663C9.99998 16.6663 12.525 16.2079 13.3333 14.9996C14.2333 13.6496 13.3333 10.8329 13.3333 10.8329M7.49998 9.99959C7.94343 8.84909 8.50181 7.74627 9.16665 6.70789C10.1376 5.15538 11.4896 3.8771 13.0941 2.99463C14.6986 2.11216 16.5022 1.65486 18.3333 1.66622C18.3333 3.93289 17.6833 7.91622 13.3333 10.8329M7.49998 9.99959H3.33331C3.33331 9.99959 3.79165 7.47456 4.99998 6.66622C6.34998 5.76622 9.16665 6.66622 9.16665 6.66622M3.74998 13.7496C2.49998 14.7996 2.08331 17.9163 2.08331 17.9163C2.08331 17.9163 5.19998 17.4996 6.24998 16.2496C6.84165 15.5496 6.83331 14.4746 6.17498 13.8246C5.85107 13.5154 5.42439 13.3368 4.97684 13.3229C4.52928 13.3091 4.09238 13.461 3.74998 13.7496Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
