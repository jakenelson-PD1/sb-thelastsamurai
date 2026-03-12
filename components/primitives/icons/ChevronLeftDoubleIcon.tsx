import { clsx } from 'clsx';

export interface ChevronLeftDoubleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChevronLeftDoubleIcon({ size = 20, className, ...props }: ChevronLeftDoubleIconProps) {
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
      <path d="M15 14.1667L10.8333 10L15 5.83337M9.16667 14.1667L5 10L9.16667 5.83337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
