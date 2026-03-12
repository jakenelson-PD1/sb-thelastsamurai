import { clsx } from 'clsx';

export interface TerminalIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function TerminalIcon({ size = 20, className, ...props }: TerminalIconProps) {
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
      <path d="M3.33331 14.1665L8.33331 9.1665L3.33331 4.1665M9.99998 15.8332H16.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
