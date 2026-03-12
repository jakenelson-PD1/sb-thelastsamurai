import { clsx } from 'clsx';

export interface FilterLinesIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FilterLinesIcon({ size = 20, className, ...props }: FilterLinesIconProps) {
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
      <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
