import { clsx } from 'clsx';

export interface TrendUp01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function TrendUp01Icon({ size = 20, className, ...props }: TrendUp01IconProps) {
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
      <path d="M18.3334 5.8335L11.7762 12.3907C11.4462 12.7207 11.2811 12.8857 11.0909 12.9475C10.9235 13.0019 10.7432 13.0019 10.5759 12.9475C10.3856 12.8857 10.2205 12.7207 9.89052 12.3907L7.60949 10.1097C7.27948 9.77966 7.11448 9.61458 6.9242 9.55283C6.75683 9.49841 6.57655 9.49841 6.40917 9.55283C6.2189 9.61458 6.0539 9.77966 5.72388 10.1097L1.66669 14.1668M18.3334 5.8335H12.5M18.3334 5.8335V11.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
