import { clsx } from 'clsx';

export interface XCloseIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function XCloseIcon({ size = 20, className, ...props }: XCloseIconProps) {
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
      <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
