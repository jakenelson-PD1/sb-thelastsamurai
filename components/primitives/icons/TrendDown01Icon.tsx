import { clsx } from 'clsx';

export interface TrendDown01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function TrendDown01Icon({ size = 20, className, ...props }: TrendDown01IconProps) {
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
      <path d="M18.3334 14.1668L11.7762 7.60964C11.4462 7.27962 11.2811 7.11462 11.0909 7.0528C10.9235 6.99841 10.7432 6.99841 10.5759 7.0528C10.3856 7.11462 10.2205 7.27962 9.89052 7.60964L7.60949 9.89066C7.27948 10.2207 7.11448 10.3857 6.9242 10.4475C6.75683 10.5019 6.57655 10.5019 6.40917 10.4475C6.2189 10.3857 6.0539 10.2207 5.72388 9.89066L1.66669 5.8335M18.3334 14.1668H12.5M18.3334 14.1668V8.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
