import { clsx } from 'clsx';

export interface ArrowNarrowDownLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowNarrowDownLeftIcon({ size = 20, className, ...props }: ArrowNarrowDownLeftIconProps) {
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
      <path d="M15 5L5 15M5 15H11.6667M5 15V8.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
