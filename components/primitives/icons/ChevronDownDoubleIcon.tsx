import { clsx } from 'clsx';

export interface ChevronDownDoubleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChevronDownDoubleIcon({ size = 20, className, ...props }: ChevronDownDoubleIconProps) {
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
      <path d="M5.83334 10.8333L10 15L14.1667 10.8333M5.83334 5L10 9.16667L14.1667 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
