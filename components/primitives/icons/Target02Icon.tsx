import { clsx } from 'clsx';

export interface Target02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Target02Icon({ size = 20, className, ...props }: Target02IconProps) {
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
      <g clipPath="url(#target02-clip0_118_37550)">
<path d="M18.3334 9.99999H15M5.00002 9.99999H1.66669M10 4.99999V1.66666M10 18.3333V15M16.6667 9.99999C16.6667 13.6819 13.6819 16.6667 10 16.6667C6.31812 16.6667 3.33335 13.6819 3.33335 9.99999C3.33335 6.31809 6.31812 3.33332 10 3.33332C13.6819 3.33332 16.6667 6.31809 16.6667 9.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="target02-clip0_118_37550">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
