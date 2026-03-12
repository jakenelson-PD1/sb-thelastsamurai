import { clsx } from 'clsx';

export interface ArrowNarrowDownRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowNarrowDownRightIcon({ size = 20, className, ...props }: ArrowNarrowDownRightIconProps) {
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
      <path d="M5 5L15 15M15 15V8.33333M15 15H8.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
