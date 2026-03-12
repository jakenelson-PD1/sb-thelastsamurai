import { clsx } from 'clsx';

export interface CurrencyYenIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyYenIcon({ size = 20, className, ...props }: CurrencyYenIconProps) {
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
      <path d="M10 17.0832V9.58317M10 9.58317L15.4168 2.9165M10 9.58317L4.58344 2.9165M15 9.58317H4.99998M14.1667 12.9165H5.83332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
