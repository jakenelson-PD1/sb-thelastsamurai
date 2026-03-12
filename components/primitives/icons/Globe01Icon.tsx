import { clsx } from 'clsx';

export interface Globe01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Globe01Icon({ size = 20, className, ...props }: Globe01IconProps) {
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
      <g clipPath="url(#globe01-clip0_118_50896)">
<path d="M1.66669 10.0003H18.3334M1.66669 10.0003C1.66669 14.6027 5.39765 18.3337 10 18.3337M1.66669 10.0003C1.66669 5.39795 5.39765 1.66699 10 1.66699M18.3334 10.0003C18.3334 14.6027 14.6024 18.3337 10 18.3337M18.3334 10.0003C18.3334 5.39795 14.6024 1.66699 10 1.66699M10 18.3337C12.0844 16.0517 13.269 13.0903 13.3334 10.0003C13.269 6.91035 12.0844 3.94895 10 1.66699M10 18.3337C7.91562 16.0517 6.73106 13.0903 6.66669 10.0003C6.73106 6.91035 7.91562 3.94895 10 1.66699" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="globe01-clip0_118_50896">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
