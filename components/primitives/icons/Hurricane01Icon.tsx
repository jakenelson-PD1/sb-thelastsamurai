import { clsx } from 'clsx';

export interface Hurricane01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Hurricane01Icon({ size = 20, className, ...props }: Hurricane01IconProps) {
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
      <path d="M13.75 17.0835C12.7054 17.345 11.407 17.5 10 17.5C8.593 17.5 7.29457 17.345 6.25 17.0835M15 13.6921C13.7784 14.1535 11.9912 14.4444 10 14.4444C8.00884 14.4444 6.22157 14.1535 5 13.6921M3.75 9.72325C4.94286 10.4665 7.29426 10.9723 10 10.9723C12.7057 10.9723 15.0572 10.4665 16.25 9.72325M17.5 5C17.5 6.38071 14.1422 7.5 10 7.5C5.85787 7.5 2.5 6.38071 2.5 5C2.5 3.61929 5.85787 2.5 10 2.5C14.1422 2.5 17.5 3.61929 17.5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
