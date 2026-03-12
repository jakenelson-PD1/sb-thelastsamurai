import { clsx } from 'clsx';

export interface HorizontalBarChart01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HorizontalBarChart01Icon({ size = 20, className, ...props }: HorizontalBarChart01IconProps) {
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
      <path d="M14.1667 7.9165V5.08317C14.1667 4.61646 14.1667 4.3831 14.0758 4.20485C13.9959 4.04805 13.8685 3.92056 13.7117 3.84066C13.5334 3.74984 13.3001 3.74984 12.8333 3.74984H2.5M10.8333 12.0832V14.9165C10.8333 15.3833 10.8333 15.6166 10.7425 15.7948C10.6626 15.9517 10.5352 16.0791 10.3783 16.159C10.2001 16.2498 9.96675 16.2498 9.5 16.2498H2.5M2.5 1.6665V18.3332M2.5 12.0832H16.1667C16.6334 12.0832 16.8668 12.0832 17.045 11.9923C17.2018 11.9124 17.3293 11.785 17.4092 11.6282C17.5 11.4499 17.5 11.2166 17.5 10.7498V9.24984C17.5 8.78309 17.5 8.54975 17.4092 8.3715C17.3293 8.21471 17.2018 8.08723 17.045 8.00733C16.8668 7.9165 16.6334 7.9165 16.1667 7.9165H2.5V12.0832Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
