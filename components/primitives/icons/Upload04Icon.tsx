import { clsx } from 'clsx';

export interface Upload04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Upload04Icon({ size = 20, className, ...props }: Upload04IconProps) {
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
      <path d="M13.3333 10L9.99999 6.66669M9.99999 6.66669L6.66666 10M9.99999 6.66669V14.3334C9.99999 15.4923 9.99999 16.0718 10.4587 16.7205C10.7636 17.1516 11.6412 17.6836 12.1643 17.7545C12.9517 17.8612 13.2507 17.7052 13.8488 17.3933C16.5139 16.003 18.3333 13.214 18.3333 10C18.3333 5.39765 14.6023 1.66669 9.99999 1.66669C5.39761 1.66669 1.66666 5.39765 1.66666 10C1.66666 13.0845 3.34248 15.7776 5.83332 17.2185" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
