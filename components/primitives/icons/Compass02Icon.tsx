import { clsx } from 'clsx';

export interface Compass02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Compass02Icon({ size = 20, className, ...props }: Compass02IconProps) {
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
      <g clipPath="url(#compass02-clip0_118_50786)">
<path d="M18.3334 10.0003H16.6667M18.3334 10.0003C18.3334 14.6027 14.6024 18.3337 10 18.3337M18.3334 10.0003C18.3334 5.39795 14.6024 1.66699 10 1.66699M10 18.3337C5.39765 18.3337 1.66669 14.6027 1.66669 10.0003M10 18.3337V16.667M10 1.66699C5.39765 1.66699 1.66669 5.39795 1.66669 10.0003M10 1.66699V3.33366M15.8926 15.8929L14.7141 14.7144M3.33335 10.0003H1.66669M5.28598 5.28628L4.10746 4.10777M14.7141 5.28628L15.8926 4.10777M4.10746 15.8929L5.28598 14.7144M10 6.66699L13.3334 10.0003L10 13.3337L6.66669 10.0003L10 6.66699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="compass02-clip0_118_50786">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
