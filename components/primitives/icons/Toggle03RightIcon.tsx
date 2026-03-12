import { clsx } from 'clsx';

export interface Toggle03RightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Toggle03RightIcon({ size = 20, className, ...props }: Toggle03RightIconProps) {
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
      <path d="M1.66669 10C1.66669 7.23857 3.90526 5 6.66669 5H13.3334C16.0948 5 18.3334 7.23857 18.3334 10C18.3334 12.7614 16.0948 15 13.3334 15H6.66669C3.90526 15 1.66669 12.7614 1.66669 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3333 12.0834C14.4839 12.0834 15.4167 11.1506 15.4167 10C15.4167 8.84944 14.4839 7.91669 13.3333 7.91669C12.1827 7.91669 11.25 8.84944 11.25 10C11.25 11.1506 12.1827 12.0834 13.3333 12.0834Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
