import { clsx } from 'clsx';

export interface AlignRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlignRightIcon({ size = 20, className, ...props }: AlignRightIconProps) {
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
      <path d="M17.5 8.33333H6.66668M17.5 5H3.33334M17.5 11.6667H3.33334M17.5 15H6.66668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
