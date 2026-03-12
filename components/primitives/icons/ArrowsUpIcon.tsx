import { clsx } from 'clsx';

export interface ArrowsUpIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowsUpIcon({ size = 20, className, ...props }: ArrowsUpIconProps) {
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
      <path d="M5.83333 16.6667V3.33337M5.83333 3.33337L2.5 6.66671M5.83333 3.33337L9.16667 6.66671M14.1667 16.6667V7.50004M14.1667 7.50004L10.8333 10.8334M14.1667 7.50004L17.5 10.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
