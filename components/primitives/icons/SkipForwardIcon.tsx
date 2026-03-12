import { clsx } from 'clsx';

export interface SkipForwardIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SkipForwardIcon({ size = 20, className, ...props }: SkipForwardIconProps) {
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
      <path d="M15.8334 4.1665V15.8332M6.33295 14.9335L11.1986 11.041C11.6434 10.6851 11.8659 10.5072 11.9464 10.2922C12.017 10.1037 12.017 9.896 11.9464 9.7075C11.8659 9.4925 11.6434 9.31459 11.1986 8.95867L6.33295 5.06618C5.63947 4.5114 5.29273 4.234 5.00092 4.2337C4.74714 4.23342 4.50706 4.3488 4.34874 4.54715C4.16669 4.77521 4.16669 5.21925 4.16669 6.10734V13.8923C4.16669 14.7804 4.16669 15.2244 4.34874 15.4525C4.50706 15.6508 4.74714 15.7663 5.00092 15.766C5.29273 15.7657 5.63947 15.4883 6.33295 14.9335Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
