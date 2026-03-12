import { clsx } from 'clsx';

export interface ArrowNarrowUpIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowNarrowUpIcon({ size = 20, className, ...props }: ArrowNarrowUpIconProps) {
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
      <path d="M10 16.6667V3.33337M10 3.33337L5 8.33337M10 3.33337L15 8.33337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
