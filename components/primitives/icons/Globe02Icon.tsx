import { clsx } from 'clsx';

export interface Globe02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Globe02Icon({ size = 20, className, ...props }: Globe02IconProps) {
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
      <g clipPath="url(#globe02-clip0_118_50909)">
<path d="M10 1.66699C12.0844 3.94895 13.269 6.91035 13.3334 10.0003C13.269 13.0903 12.0844 16.0517 10 18.3337M10 1.66699C7.91562 3.94895 6.73106 6.91035 6.66669 10.0003C6.73106 13.0903 7.91562 16.0517 10 18.3337M10 1.66699C5.39765 1.66699 1.66669 5.39795 1.66669 10.0003C1.66669 14.6027 5.39765 18.3337 10 18.3337M10 1.66699C14.6024 1.66699 18.3334 5.39795 18.3334 10.0003C18.3334 14.6027 14.6024 18.3337 10 18.3337M2.08337 7.50033H17.9167M2.08335 12.5003H17.9167" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="globe02-clip0_118_50909">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
