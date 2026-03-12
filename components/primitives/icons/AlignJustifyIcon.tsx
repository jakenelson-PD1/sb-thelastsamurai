import { clsx } from 'clsx';

export interface AlignJustifyIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlignJustifyIcon({ size = 20, className, ...props }: AlignJustifyIconProps) {
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
      <path d="M17.5 8.33333H2.5M17.5 15H2.5M17.5 5H2.5M17.5 11.6667H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
