import { clsx } from 'clsx';

export interface RefreshCw05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCw05Icon({ size = 20, className, ...props }: RefreshCw05IconProps) {
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
      <path d="M17.0441 10.7441C16.8126 12.919 15.5803 14.9572 13.5411 16.1344C10.1532 18.0904 5.82114 16.9297 3.86513 13.5418L3.6568 13.1809M2.95509 9.25577C3.18659 7.08086 4.41892 5.04275 6.45807 3.86545C9.84598 1.90945 14.1781 3.07022 16.1341 6.45813L16.3424 6.81898M2.91095 15.055L3.52099 12.7783L5.79771 13.3884M14.202 6.61161L16.4786 7.22165L17.0887 4.94495" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
