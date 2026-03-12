import { clsx } from 'clsx';

export interface CurrencyDollarIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyDollarIcon({ size = 20, className, ...props }: CurrencyDollarIconProps) {
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
      <path d="M5 13.3332C5 15.1741 6.49238 16.6665 8.33333 16.6665H11.6667C13.5076 16.6665 15 15.1741 15 13.3332C15 11.4923 13.5076 9.99984 11.6667 9.99984H8.33333C6.49238 9.99984 5 8.50742 5 6.6665C5 4.82555 6.49238 3.33317 8.33333 3.33317H11.6667C13.5076 3.33317 15 4.82555 15 6.6665M10 1.6665V18.3332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
