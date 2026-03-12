import { clsx } from 'clsx';

export interface Toggle01LeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Toggle01LeftIcon({ size = 20, className, ...props }: Toggle01LeftIconProps) {
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
      <path d="M5.83332 14.1666H14.1667C16.4678 14.1666 18.3333 12.3011 18.3333 9.99998C18.3333 7.6988 16.4678 5.83331 14.1667 5.83331H5.83332M5.83332 14.1666C3.53214 14.1666 1.66666 12.3011 1.66666 9.99998C1.66666 7.6988 3.53214 5.83331 5.83332 5.83331M5.83332 14.1666C8.13451 14.1666 9.99999 12.3011 9.99999 9.99998C9.99999 7.6988 8.13451 5.83331 5.83332 5.83331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
