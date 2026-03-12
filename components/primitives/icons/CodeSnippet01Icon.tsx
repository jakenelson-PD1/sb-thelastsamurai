import { clsx } from 'clsx';

export interface CodeSnippet01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CodeSnippet01Icon({ size = 20, className, ...props }: CodeSnippet01IconProps) {
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
      <path d="M13.3333 15L18.3333 10L13.3333 5M6.66666 5L1.66666 10L6.66666 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
