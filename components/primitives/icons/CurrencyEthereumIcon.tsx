import { clsx } from 'clsx';

export interface CurrencyEthereumIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyEthereumIcon({ size = 20, className, ...props }: CurrencyEthereumIconProps) {
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
      <path d="M3.33331 9.16659L9.99998 10.8332L16.6666 9.1665M3.33331 9.16659L9.99998 1.6665M3.33331 9.16659L9.99998 7.4999M16.6666 9.1665L9.99998 1.6665M16.6666 9.1665L9.99998 7.4999M9.99998 1.6665V7.4999M4.58331 12.4998L10.0001 18.3332L15.4166 12.4998L9.99998 13.7498L4.58331 12.4998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
