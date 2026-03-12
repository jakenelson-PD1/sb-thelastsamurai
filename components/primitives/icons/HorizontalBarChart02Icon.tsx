import { clsx } from 'clsx';

export interface HorizontalBarChart02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HorizontalBarChart02Icon({ size = 20, className, ...props }: HorizontalBarChart02IconProps) {
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
      <path d="M14.1667 7.9165V10.7498C14.1667 11.2166 14.1667 11.4499 14.0758 11.6282C13.9959 11.785 13.8685 11.9124 13.7117 11.9923C13.5334 12.0832 13.3001 12.0832 12.8333 12.0832H2.5M10.8333 12.0832V14.9165C10.8333 15.3833 10.8333 15.6166 10.7425 15.7948C10.6626 15.9517 10.5352 16.0791 10.3783 16.159C10.2001 16.2498 9.96675 16.2498 9.5 16.2498H2.5M2.5 1.6665V18.3332M2.5 7.9165H16.1667C16.6334 7.9165 16.8668 7.9165 17.045 7.82568C17.2018 7.74578 17.3293 7.6183 17.4092 7.4615C17.5 7.28324 17.5 7.04988 17.5 6.58317V5.08317C17.5 4.61646 17.5 4.3831 17.4092 4.20485C17.3293 4.04805 17.2018 3.92056 17.045 3.84066C16.8668 3.74984 16.6334 3.74984 16.1667 3.74984H2.5V7.9165Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
