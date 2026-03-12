import { clsx } from 'clsx';

export interface ArrowBlockRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowBlockRightIcon({ size = 20, className, ...props }: ArrowBlockRightIconProps) {
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
      <path d="M17.5 9.99996L11.6667 4.16663V7.49996H3.16667C2.93331 7.49996 2.81663 7.49996 2.7275 7.54538C2.6491 7.58532 2.58536 7.64906 2.54542 7.72746C2.5 7.81659 2.5 7.93327 2.5 8.16663V11.8333C2.5 12.0666 2.5 12.1833 2.54542 12.2725C2.58536 12.3509 2.6491 12.4146 2.7275 12.4545C2.81663 12.5 2.93331 12.5 3.16667 12.5H11.6667V15.8333L17.5 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
