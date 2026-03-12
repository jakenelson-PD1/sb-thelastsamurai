import { clsx } from 'clsx';

export interface XIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function XIcon({ size = 20, className, ...props }: XIconProps) {
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
      <path d="M14.1667 5.83331L5.83333 14.1666M5.83333 5.83331L14.1667 14.1666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
