import { clsx } from 'clsx';

export interface ChevronUpDoubleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChevronUpDoubleIcon({ size = 20, className, ...props }: ChevronUpDoubleIconProps) {
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
      <path d="M14.1667 15L10 10.8333L5.83334 15M14.1667 9.16667L10 5L5.83334 9.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
