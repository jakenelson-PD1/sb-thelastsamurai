import { clsx } from 'clsx';

export interface Moon01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Moon01Icon({ size = 20, className, ...props }: Moon01IconProps) {
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
      <g clipPath="url(#moon01-clip0_118_52040)">
<path d="M18.3333 13.2038C17.2388 13.6988 16.0238 13.9743 14.7446 13.9743C9.92942 13.9743 6.02597 10.0709 6.02597 5.25578C6.02597 3.97645 6.30151 2.76149 6.79648 1.66699C3.77147 3.03502 1.66667 6.07924 1.66667 9.61508C1.66667 14.4302 5.57012 18.3337 10.3853 18.3337C13.9211 18.3337 16.9653 16.2288 18.3333 13.2038Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="moon01-clip0_118_52040">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
