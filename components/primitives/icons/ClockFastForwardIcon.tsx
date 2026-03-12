import { clsx } from 'clsx';

export interface ClockFastForwardIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ClockFastForwardIcon({ size = 20, className, ...props }: ClockFastForwardIconProps) {
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
      <path d="M18.9167 9.58333L17.2504 11.25L15.5833 9.58333M17.4543 10.8333C17.4845 10.5597 17.5 10.2817 17.5 10C17.5 5.85787 14.1422 2.5 10 2.5C5.85787 2.5 2.5 5.85787 2.5 10C2.5 14.1422 5.85787 17.5 10 17.5C12.3561 17.5 14.4583 16.4136 15.8333 14.7144M10 5.83333V10L12.5 11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
