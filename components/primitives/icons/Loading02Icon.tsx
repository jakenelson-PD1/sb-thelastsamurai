import { clsx } from 'clsx';

export interface Loading02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Loading02Icon({ size = 20, className, ...props }: Loading02IconProps) {
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
      <g clipPath="url(#loading02-clip0_118_38090)">
<path d="M10 1.66669V5.00002M10 15V18.3334M5.00002 10H1.66669M18.3334 10H15M15.8987 15.8987L13.5417 13.5417M15.8987 4.16664L13.5417 6.52366M4.10133 15.8987L6.45835 13.5417M4.10133 4.16664L6.45835 6.52366" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="loading02-clip0_118_38090">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
