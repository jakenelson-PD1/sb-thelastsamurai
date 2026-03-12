import { clsx } from 'clsx';

export interface SunriseIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SunriseIcon({ size = 20, className, ...props }: SunriseIconProps) {
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
      <g clipPath="url(#sunrise-clip0_118_52221)">
<path d="M3.33335 15.0003H1.66669M5.26179 10.2621L4.08327 9.08358M14.7382 10.2621L15.9167 9.08358M18.3334 15.0003H16.6667M5.83335 15.0003C5.83335 12.6992 7.69884 10.8337 10 10.8337C12.3012 10.8337 14.1667 12.6992 14.1667 15.0003M18.3334 18.3337H1.66669M13.3334 5.00033L10 1.66699M10 1.66699L6.66669 5.00033M10 1.66699V7.50033" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="sunrise-clip0_118_52221">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
