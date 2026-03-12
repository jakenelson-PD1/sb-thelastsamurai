import { clsx } from 'clsx';

export interface LineChartDown05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LineChartDown05Icon({ size = 20, className, ...props }: LineChartDown05IconProps) {
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
      <g clipPath="url(#linechartdown05-clip0_118_48115)">
<path d="M5 8.33317L7.86192 11.1951C8.02693 11.3601 8.10944 11.4426 8.20457 11.4735C8.28826 11.5008 8.37841 11.5008 8.46208 11.4735C8.55725 11.4426 8.63975 11.3601 8.80475 11.1951L11.1952 8.80459C11.3602 8.63959 11.4427 8.55709 11.5379 8.52617C11.6216 8.49892 11.7117 8.49892 11.7954 8.52617C11.8906 8.55709 11.9731 8.63959 12.1381 8.80459L15 11.6665M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 10 18.3332C5.39762 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39762 1.6665 10 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="linechartdown05-clip0_118_48115">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
