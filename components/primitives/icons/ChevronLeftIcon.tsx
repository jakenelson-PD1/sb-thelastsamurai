import { clsx } from 'clsx';

export interface ChevronLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChevronLeftIcon({ size = 20, className, ...props }: ChevronLeftIconProps) {
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
      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
