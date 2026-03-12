import { clsx } from 'clsx';

export interface SpacingHeight02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SpacingHeight02Icon({ size = 20, className, ...props }: SpacingHeight02IconProps) {
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
      <path d="M17.5 2.5H2.5M17.5 17.5H2.5M10 14.5833V5.4167M12.5001 5.41667L7.5 5.41667M12.5001 14.5833H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
