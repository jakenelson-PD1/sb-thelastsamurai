import { clsx } from 'clsx';

export interface ArrowNarrowRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowNarrowRightIcon({ size = 20, className, ...props }: ArrowNarrowRightIconProps) {
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
      <path d="M3.33331 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
