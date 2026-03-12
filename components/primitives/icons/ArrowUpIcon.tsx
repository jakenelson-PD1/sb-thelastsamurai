import { clsx } from 'clsx';

export interface ArrowUpIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowUpIcon({ size = 20, className, ...props }: ArrowUpIconProps) {
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
      <path d="M10 15.8333V4.16663M10 4.16663L4.16667 9.99996M10 4.16663L15.8333 9.99996" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
