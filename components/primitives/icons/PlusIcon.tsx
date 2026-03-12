import { clsx } from 'clsx';

export interface PlusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PlusIcon({ size = 20, className, ...props }: PlusIconProps) {
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
      <path d="M10 4.16669V15.8334M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
