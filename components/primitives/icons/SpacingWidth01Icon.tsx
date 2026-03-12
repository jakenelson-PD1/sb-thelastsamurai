import { clsx } from 'clsx';

export interface SpacingWidth01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SpacingWidth01Icon({ size = 20, className, ...props }: SpacingWidth01IconProps) {
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
      <path d="M5 10H15M5 10L6.66667 7.5M5 10L6.66667 12.5M15 10L13.3333 7.5M15 10L13.3333 12.5M17.5 17.5V2.5M2.5 17.5V2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
