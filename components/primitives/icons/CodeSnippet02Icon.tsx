import { clsx } from 'clsx';

export interface CodeSnippet02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CodeSnippet02Icon({ size = 20, className, ...props }: CodeSnippet02IconProps) {
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
      <path d="M14.1667 14.1667L18.3333 10L14.1667 5.83333M5.83334 5.83333L1.66667 10L5.83334 14.1667M11.6667 2.5L8.33334 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
