import { clsx } from 'clsx';

export interface Droplets02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Droplets02Icon({ size = 20, className, ...props }: Droplets02IconProps) {
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
      <path d="M9.99999 17.9163C11.5471 17.9163 13.0308 17.3018 14.1247 16.2078C15.2187 15.1138 15.8333 13.6301 15.8333 12.083C15.8333 10.4163 15 8.83301 13.3333 7.49967C11.6667 6.16634 10.4167 4.16634 9.99999 2.08301C9.58332 4.16634 8.33332 6.16634 6.66666 7.49967C4.99999 8.83301 4.16666 10.4163 4.16666 12.083C4.16666 13.6301 4.78124 15.1138 5.8752 16.2078C6.96917 17.3018 8.45291 17.9163 9.99999 17.9163Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
