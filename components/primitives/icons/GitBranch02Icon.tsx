import { clsx } from 'clsx';

export interface GitBranch02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function GitBranch02Icon({ size = 20, className, ...props }: GitBranch02IconProps) {
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
      <path d="M5 2.5V12.5M5 12.5C3.61929 12.5 2.5 13.6192 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5C6.38071 17.5 7.5 16.3807 7.5 15M5 12.5C6.38071 12.5 7.5 13.6192 7.5 15M7.5 15C9.48908 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48908 15 7.5M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6192 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6192 7.5 15 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
