import { clsx } from 'clsx';

export interface ArrowNarrowUpLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowNarrowUpLeftIcon({ size = 20, className, ...props }: ArrowNarrowUpLeftIconProps) {
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
      <path d="M15 15L5 5M5 5V11.6667M5 5H11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
