import { clsx } from 'clsx';

export interface CurrencyRupeeIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyRupeeIcon({ size = 20, className, ...props }: CurrencyRupeeIconProps) {
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
      <path d="M5 2.5H15M5 6.66667H15M12.0833 17.5L5 10.8333H7.5C13.0558 10.8333 13.0558 2.5 7.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
