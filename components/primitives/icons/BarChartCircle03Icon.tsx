import { clsx } from 'clsx';

export interface BarChartCircle03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarChartCircle03Icon({ size = 20, className, ...props }: BarChartCircle03IconProps) {
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
      <g clipPath="url(#barchartcircle03-clip0_118_47881)">
<path d="M6.66669 5.83317V14.1665M10 9.1665V14.1665M13.3334 12.4998V14.1665M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="barchartcircle03-clip0_118_47881">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
