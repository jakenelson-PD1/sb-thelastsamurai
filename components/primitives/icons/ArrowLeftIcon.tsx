import { clsx } from 'clsx';

export interface ArrowLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowLeftIcon({ size = 20, className, ...props }: ArrowLeftIconProps) {
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
      <path d="M15.8334 9.99996H4.16669M4.16669 9.99996L10 15.8333M4.16669 9.99996L10 4.16663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
