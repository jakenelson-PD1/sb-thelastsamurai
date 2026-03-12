import { clsx } from 'clsx';

export interface CornerDownRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CornerDownRightIcon({ size = 20, className, ...props }: CornerDownRightIconProps) {
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
      <path d="M3.33331 3.33337V4.50004C3.33331 7.3003 3.33331 8.70046 3.87828 9.76996C4.35765 10.7108 5.12255 11.4757 6.06336 11.955C7.13292 12.5 8.53306 12.5 11.3333 12.5H16.6666M16.6666 12.5L12.5 8.33337M16.6666 12.5L12.5 16.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
