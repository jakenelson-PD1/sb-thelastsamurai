import { clsx } from 'clsx';

export interface SlashDividerIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SlashDividerIcon({ size = 20, className, ...props }: SlashDividerIconProps) {
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
      <path d="M5.83331 18.3333L14.1666 1.66666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
