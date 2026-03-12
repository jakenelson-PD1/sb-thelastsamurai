import { clsx } from 'clsx';

export interface ArrowNarrowDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowNarrowDownIcon({ size = 20, className, ...props }: ArrowNarrowDownIconProps) {
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
      <path d="M10 3.33337V16.6667M10 16.6667L15 11.6667M10 16.6667L5 11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
