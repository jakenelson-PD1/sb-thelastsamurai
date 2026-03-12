import { clsx } from 'clsx';

export interface CurrencyRubleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyRubleIcon({ size = 20, className, ...props }: CurrencyRubleIconProps) {
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
      <path d="M7.08335 9.58317H12.0834C13.9243 9.58317 15.4167 8.09079 15.4167 6.24984C15.4167 4.40889 13.9243 2.9165 12.0834 2.9165H7.08335V9.58317ZM7.08335 9.58317H5.41669M11.25 12.9165H5.41669M7.08335 3.33317V17.0832" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
