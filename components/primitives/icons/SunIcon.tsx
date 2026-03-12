import { clsx } from 'clsx';

export interface SunIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SunIcon({ size = 20, className, ...props }: SunIconProps) {
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
      <g clipPath="url(#sun-clip0_118_52169)">
<path d="M9.99999 1.66699V3.33366M9.99999 16.667V18.3337M3.33332 10.0003H1.66666M5.26176 5.26209L4.08324 4.08358M14.7382 5.26209L15.9167 4.08358M5.26176 14.742L4.08324 15.9205M14.7382 14.742L15.9167 15.9205M18.3333 10.0003H16.6667M14.1667 10.0003C14.1667 12.3015 12.3012 14.167 9.99999 14.167C7.69881 14.167 5.83332 12.3015 5.83332 10.0003C5.83332 7.69914 7.69881 5.83366 9.99999 5.83366C12.3012 5.83366 14.1667 7.69914 14.1667 10.0003Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="sun-clip0_118_52169">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
