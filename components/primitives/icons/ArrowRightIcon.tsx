import { clsx } from 'clsx';

export interface ArrowRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowRightIcon({ size = 20, className, ...props }: ArrowRightIconProps) {
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
      <path d="M4.16666 9.99996H15.8333M15.8333 9.99996L10 4.16663M15.8333 9.99996L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
