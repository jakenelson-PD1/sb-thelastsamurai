import { clsx } from 'clsx';

export interface CameraPlusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CameraPlusIcon({ size = 20, className, ...props }: CameraPlusIconProps) {
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
      <path d="M18.3334 9.58366V12.167C18.3334 14.0338 18.3334 14.9672 17.97 15.6803C17.6504 16.3075 17.1405 16.8174 16.5134 17.137C15.8003 17.5003 14.8669 17.5003 13 17.5003H7.00002C5.13318 17.5003 4.19976 17.5003 3.48672 17.137C2.85951 16.8174 2.34958 16.3075 2.03 15.6803C1.66669 14.9672 1.66669 14.0338 1.66669 12.167V7.83366C1.66669 5.96682 1.66669 5.0334 2.03 4.32036C2.34958 3.69315 2.85951 3.18322 3.48672 2.86363C4.19976 2.50033 5.13318 2.50033 7.00002 2.50033H10.4167M15.8334 6.66699V1.66699M13.3334 4.16699H18.3334M13.3334 10.0003C13.3334 11.8412 11.8409 13.3337 10 13.3337C8.15907 13.3337 6.66669 11.8412 6.66669 10.0003C6.66669 8.15938 8.15907 6.66699 10 6.66699C11.8409 6.66699 13.3334 8.15938 13.3334 10.0003Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
