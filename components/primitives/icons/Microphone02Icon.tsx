import { clsx } from 'clsx';

export interface Microphone02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Microphone02Icon({ size = 20, className, ...props }: Microphone02IconProps) {
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
      <path d="M16.6666 10V10.8333C16.6666 14.5152 13.6819 17.5 9.99998 17.5C6.31808 17.5 3.33331 14.5152 3.33331 10.8333V10M9.99998 14.1667C8.15903 14.1667 6.66665 12.6742 6.66665 10.8333V5.83333C6.66665 3.99238 8.15903 2.5 9.99998 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V10.8333C13.3333 12.6742 11.8409 14.1667 9.99998 14.1667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
