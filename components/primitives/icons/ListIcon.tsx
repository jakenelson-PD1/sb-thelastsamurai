import { clsx } from 'clsx';

export interface ListIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ListIcon({ size = 20, className, ...props }: ListIconProps) {
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
      <path d="M17.5 9.99984H7.5M17.5 4.99984H7.5M17.5 14.9998H7.5M4.16667 9.99984C4.16667 10.4601 3.79357 10.8332 3.33333 10.8332C2.8731 10.8332 2.5 10.4601 2.5 9.99984C2.5 9.53959 2.8731 9.1665 3.33333 9.1665C3.79357 9.1665 4.16667 9.53959 4.16667 9.99984ZM4.16667 4.99984C4.16667 5.46007 3.79357 5.83317 3.33333 5.83317C2.8731 5.83317 2.5 5.46007 2.5 4.99984C2.5 4.5396 2.8731 4.1665 3.33333 4.1665C3.79357 4.1665 4.16667 4.5396 4.16667 4.99984ZM4.16667 14.9998C4.16667 15.4601 3.79357 15.8332 3.33333 15.8332C2.8731 15.8332 2.5 15.4601 2.5 14.9998C2.5 14.5396 2.8731 14.1665 3.33333 14.1665C3.79357 14.1665 4.16667 14.5396 4.16667 14.9998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
