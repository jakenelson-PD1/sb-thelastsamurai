import { clsx } from 'clsx';

export interface ReverseLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ReverseLeftIcon({ size = 20, className, ...props }: ReverseLeftIconProps) {
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
      <path d="M3.33331 5.83333H11.6666C14.4281 5.83333 16.6666 8.07191 16.6666 10.8333C16.6666 13.5947 14.4281 15.8333 11.6666 15.8333H3.33331M3.33331 5.83333L6.66665 2.5M3.33331 5.83333L6.66665 9.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
