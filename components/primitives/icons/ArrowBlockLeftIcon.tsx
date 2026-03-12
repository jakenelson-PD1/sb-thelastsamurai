import { clsx } from 'clsx';

export interface ArrowBlockLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowBlockLeftIcon({ size = 20, className, ...props }: ArrowBlockLeftIconProps) {
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
      <path d="M2.5 9.99996L8.33333 4.16663V7.49996H16.8333C17.0667 7.49996 17.1833 7.49996 17.2725 7.54538C17.3509 7.58532 17.4147 7.64906 17.4546 7.72746C17.5 7.81659 17.5 7.93327 17.5 8.16663V11.8333C17.5 12.0666 17.5 12.1833 17.4546 12.2725C17.4147 12.3509 17.3509 12.4146 17.2725 12.4545C17.1833 12.5 17.0667 12.5 16.8333 12.5H8.33333V15.8333L2.5 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
