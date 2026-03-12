import { clsx } from 'clsx';

export interface Brush02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Brush02Icon({ size = 20, className, ...props }: Brush02IconProps) {
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
      <path d="M15 8.33341V3.00008C15 2.53337 15 2.30001 14.9092 2.12176C14.8293 1.96496 14.7018 1.83747 14.545 1.75757C14.3668 1.66675 14.1334 1.66675 13.6667 1.66675H6.33333C5.86662 1.66675 5.63327 1.66675 5.45501 1.75757C5.29821 1.83747 5.17073 1.96496 5.09083 2.12176C5 2.30001 5 2.53337 5 3.00008V8.33341M15 8.33341H5M15 8.33341V8.50008C15 9.90025 15 10.6002 14.7275 11.1351C14.4878 11.6055 14.1054 11.9879 13.635 12.2276C13.1002 12.5001 12.4002 12.5001 11 12.5001H9C7.59987 12.5001 6.8998 12.5001 6.36503 12.2276C5.89462 11.9879 5.51217 11.6055 5.27248 11.1351C5 10.6002 5 9.90025 5 8.50008V8.33341M12.0833 12.5001V16.2501C12.0833 17.4007 11.1506 18.3334 10 18.3334C8.84942 18.3334 7.91667 17.4007 7.91667 16.2501V12.5001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
