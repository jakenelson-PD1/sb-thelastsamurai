import { clsx } from 'clsx';

export interface SpacingWidth02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SpacingWidth02Icon({ size = 20, className, ...props }: SpacingWidth02IconProps) {
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
      <path d="M17.5 17.5V2.5M2.5 17.5V2.5M5.41667 10H14.5833M14.5833 12.5V7.5M5.41667 12.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
