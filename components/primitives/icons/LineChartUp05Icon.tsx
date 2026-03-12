import { clsx } from 'clsx';

export interface LineChartUp05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LineChartUp05Icon({ size = 20, className, ...props }: LineChartUp05IconProps) {
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
      <g clipPath="url(#linechartup05-clip0_118_48180)">
<path d="M15 8.33317L12.1381 11.1951C11.9731 11.3601 11.8906 11.4426 11.7954 11.4735C11.7118 11.5008 11.6216 11.5008 11.5379 11.4735C11.4428 11.4426 11.3603 11.3601 11.1953 11.1951L8.80477 8.80459C8.63977 8.63959 8.55727 8.55709 8.4621 8.52617C8.37844 8.49892 8.28828 8.49892 8.2046 8.52617C8.10946 8.55709 8.02695 8.63959 7.86195 8.80459L5.00002 11.6665M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="linechartup05-clip0_118_48180">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
