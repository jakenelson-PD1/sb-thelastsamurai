import { clsx } from 'clsx';

export interface EqualIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function EqualIcon({ size = 20, className, ...props }: EqualIconProps) {
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
      <path d="M4.16667 7.5H15.8333M4.16667 12.5H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
