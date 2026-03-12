import { clsx } from 'clsx';

export interface CornerRightDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CornerRightDownIcon({ size = 20, className, ...props }: CornerRightDownIconProps) {
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
      <path d="M2.5 3.33337H5.33333C8.13359 3.33337 9.53375 3.33337 10.6032 3.87834C11.5441 4.35771 12.309 5.12261 12.7883 6.06342C13.3333 7.13298 13.3333 8.53312 13.3333 11.3334V16.6667M13.3333 16.6667L9.16667 12.5M13.3333 16.6667L17.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
