import { clsx } from 'clsx';

export interface ArrowsDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowsDownIcon({ size = 20, className, ...props }: ArrowsDownIconProps) {
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
      <path d="M14.1667 3.33337V12.5M14.1667 12.5L10.8333 9.16671M14.1667 12.5L17.5 9.16671M5.83333 3.33337V16.6667M5.83333 16.6667L2.5 13.3334M5.83333 16.6667L9.16667 13.3334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
