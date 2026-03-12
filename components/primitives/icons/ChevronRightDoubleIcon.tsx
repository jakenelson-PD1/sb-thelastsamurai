import { clsx } from 'clsx';

export interface ChevronRightDoubleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChevronRightDoubleIcon({ size = 20, className, ...props }: ChevronRightDoubleIconProps) {
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
      <path d="M5 14.1667L9.16667 10L5 5.83337M10.8333 14.1667L15 10L10.8333 5.83337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
