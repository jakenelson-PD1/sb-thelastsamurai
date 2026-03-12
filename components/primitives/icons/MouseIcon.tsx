import { clsx } from 'clsx';

export interface MouseIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MouseIcon({ size = 20, className, ...props }: MouseIconProps) {
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
      <path d="M10 7.49984V4.99984M10 18.3332C6.77836 18.3332 4.16669 15.7215 4.16669 12.4998V7.49984C4.16669 4.27818 6.77836 1.6665 10 1.6665C13.2217 1.6665 15.8334 4.27818 15.8334 7.49984V12.4998C15.8334 15.7215 13.2217 18.3332 10 18.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
