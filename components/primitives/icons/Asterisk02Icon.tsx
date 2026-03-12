import { clsx } from 'clsx';

export interface Asterisk02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Asterisk02Icon({ size = 20, className, ...props }: Asterisk02IconProps) {
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
      <path d="M9.99998 3.33334V16.6667M15 5L4.99998 15M16.6666 10H3.33331M15 15L4.99998 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
