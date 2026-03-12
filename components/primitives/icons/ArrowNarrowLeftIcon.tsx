import { clsx } from 'clsx';

export interface ArrowNarrowLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowNarrowLeftIcon({ size = 20, className, ...props }: ArrowNarrowLeftIconProps) {
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
      <path d="M16.6667 10H3.33334M3.33334 10L8.33334 15M3.33334 10L8.33334 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
