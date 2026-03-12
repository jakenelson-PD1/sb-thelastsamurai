import { clsx } from 'clsx';

export interface HorizontalBarChart03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HorizontalBarChart03Icon({ size = 20, className, ...props }: HorizontalBarChart03IconProps) {
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
      <path d="M10.8333 7.9165V5.08317C10.8333 4.61646 10.8333 4.3831 10.7425 4.20485C10.6626 4.04805 10.5352 3.92056 10.3783 3.84066C10.2001 3.74984 9.96675 3.74984 9.5 3.74984H2.5M14.1667 12.0832V9.24984C14.1667 8.78309 14.1667 8.54975 14.0758 8.3715C13.9959 8.21471 13.8685 8.08723 13.7117 8.00733C13.5334 7.9165 13.3001 7.9165 12.8333 7.9165H2.5M2.5 1.6665V18.3332M2.5 16.2498H16.1667C16.6334 16.2498 16.8668 16.2498 17.045 16.159C17.2018 16.0791 17.3293 15.9517 17.4092 15.7948C17.5 15.6166 17.5 15.3833 17.5 14.9165V13.4165C17.5 12.9498 17.5 12.7164 17.4092 12.5382C17.3293 12.3813 17.2018 12.2539 17.045 12.174C16.8668 12.0832 16.6334 12.0832 16.1667 12.0832H2.5V16.2498Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
