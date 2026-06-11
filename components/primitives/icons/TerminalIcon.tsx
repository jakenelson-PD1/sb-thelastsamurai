import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface TerminalIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function TerminalIcon({ size = 'md', className, ...props }: TerminalIconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M3.33331 14.1665L8.33331 9.1665L3.33331 4.1665M9.99998 15.8332H16.6666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
