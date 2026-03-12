import { clsx } from 'clsx';

export interface ArrowUpRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowUpRightIcon({ size = 20, className, ...props }: ArrowUpRightIconProps) {
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
      <path d="M5.83334 14.1667L14.1667 5.83337M14.1667 5.83337H5.83334M14.1667 5.83337V14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
