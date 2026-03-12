import { clsx } from 'clsx';

export interface AlignLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlignLeftIcon({ size = 20, className, ...props }: AlignLeftIconProps) {
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
      <path d="M13.3333 8.33333H2.5M16.6667 5H2.5M16.6667 11.6667H2.5M13.3333 15H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
