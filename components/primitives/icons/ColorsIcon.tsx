import { clsx } from 'clsx';

export interface ColorsIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ColorsIcon({ size = 20, className, ...props }: ColorsIconProps) {
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
      <g clipPath="url(#colors-clip0_118_50428)">
<path d="M10 17.0605C10.8846 17.8522 12.0528 18.3337 13.3334 18.3337C16.0948 18.3337 18.3334 16.0951 18.3334 13.3337C18.3334 11.0279 16.7726 9.08666 14.6499 8.50883M5.35017 8.50883C3.22746 9.08666 1.66669 11.0279 1.66669 13.3337C1.66669 16.0951 3.90526 18.3337 6.66669 18.3337C9.4281 18.3337 11.6667 16.0951 11.6667 13.3337C11.6667 12.6832 11.5425 12.0618 11.3165 11.4918M15 6.66699C15 9.42841 12.7614 11.667 10 11.667C7.2386 11.667 5.00002 9.42841 5.00002 6.66699C5.00002 3.90557 7.2386 1.66699 10 1.66699C12.7614 1.66699 15 3.90557 15 6.66699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="colors-clip0_118_50428">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
