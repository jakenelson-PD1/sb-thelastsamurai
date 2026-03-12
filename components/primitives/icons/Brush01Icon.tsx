import { clsx } from 'clsx';

export interface Brush01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Brush01Icon({ size = 20, className, ...props }: Brush01IconProps) {
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
      <g clipPath="url(#brush01-clip0_118_41473)">
<path d="M7.5 9.35208L10.6482 12.5002M6.64573 17.4792C5.5067 18.6183 3.33335 18.3336 1.66669 18.3336C2.52094 16.6669 1.38191 14.4935 2.52094 13.3545C3.65997 12.2155 5.5067 12.2155 6.64573 13.3545C7.78475 14.4935 7.78475 16.3402 6.64573 17.4792ZM9.93469 13.2707L17.5489 5.04734C18.2196 4.32304 18.1979 3.19822 17.4999 2.50022C16.802 1.80223 15.6772 1.78061 14.9529 2.45126L6.72947 10.0655C6.30452 10.459 6.09205 10.6557 5.96813 10.8655C5.67097 11.3687 5.65901 11.9907 5.93661 12.5048C6.05238 12.7193 6.25713 12.9241 6.66665 13.3336C7.07615 13.7431 7.28091 13.9478 7.49534 14.0636C8.00952 14.3412 8.63152 14.3292 9.13469 14.0321C9.34452 13.9082 9.54119 13.6957 9.93469 13.2707Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="brush01-clip0_118_41473">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
