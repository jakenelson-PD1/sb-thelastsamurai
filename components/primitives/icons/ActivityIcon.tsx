import { clsx } from 'clsx';

export interface ActivityIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ActivityIcon({ size = 20, className, ...props }: ActivityIconProps) {
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
      <path d="M18.3333 10H15L12.5 17.5L7.5 2.5L5 10H1.66666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
