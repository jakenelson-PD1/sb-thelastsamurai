import { clsx } from 'clsx';

export interface ArrowUpLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowUpLeftIcon({ size = 20, className, ...props }: ArrowUpLeftIconProps) {
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
      <path d="M14.1667 14.1667L5.83334 5.83337M5.83334 5.83337V14.1667M5.83334 5.83337H14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
