import { clsx } from 'clsx';

export interface DotsHorizontalIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DotsHorizontalIcon({ size = 20, className, ...props }: DotsHorizontalIconProps) {
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
      <path d="M9.99996 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53974 10.4602 9.16666 9.99996 9.16666C9.53971 9.16666 9.16663 9.53974 9.16663 9.99999C9.16663 10.4602 9.53971 10.8333 9.99996 10.8333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 9.99999C16.6667 9.53974 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53974 15 9.99999C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.16665 10.8333C4.62688 10.8333 4.99998 10.4602 4.99998 9.99999C4.99998 9.53974 4.62688 9.16666 4.16665 9.16666C3.70641 9.16666 3.33331 9.53974 3.33331 9.99999C3.33331 10.4602 3.70641 10.8333 4.16665 10.8333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
