import { clsx } from 'clsx';

export interface SpacingHeight01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SpacingHeight01Icon({ size = 20, className, ...props }: SpacingHeight01IconProps) {
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
      <path d="M10 15V5M10 15L7.5 13.3333M10 15L12.5 13.3333M10 5L7.5 6.66667M10 5L12.5 6.66667M17.5 2.5H2.5M17.5 17.5H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
