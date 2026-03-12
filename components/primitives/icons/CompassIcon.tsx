import { clsx } from 'clsx';

export interface CompassIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CompassIcon({ size = 20, className, ...props }: CompassIconProps) {
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
      <path d="M10 3.33366C8.84942 3.33366 7.91667 4.2664 7.91667 5.41699C7.91667 6.56758 8.84942 7.50033 10 7.50033C11.1506 7.50033 12.0833 6.56758 12.0833 5.41699C12.0833 4.2664 11.1506 3.33366 10 3.33366ZM10 3.33366V1.66699M17.5 12.4482C15.6677 14.5242 12.9867 15.8337 10 15.8337C7.01327 15.8337 4.33236 14.5242 2.5 12.4482M8.954 7.2184L2.5 18.3337M11.046 7.2184L17.5 18.3337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
