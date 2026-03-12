import { clsx } from 'clsx';

export interface CloudRaining05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CloudRaining05Icon({ size = 20, className, ...props }: CloudRaining05IconProps) {
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
      <path d="M13.3333 15.417L12.5 17.5003M6.66666 15.417L5.83332 17.5003M9.99999 15.417L9.16666 17.5003M5.83332 12.5003C3.53214 12.5003 1.66666 10.6348 1.66666 8.33366C1.66666 6.03248 3.53214 4.16699 5.83332 4.16699C5.86095 4.16699 5.88851 4.16726 5.91601 4.1678C6.67449 2.68333 8.21855 1.66699 9.99999 1.66699C12.0993 1.66699 13.8691 3.07845 14.4119 5.00418C14.4687 5.00162 14.5259 5.00033 14.5833 5.00033C16.6544 5.00033 18.3333 6.67926 18.3333 8.75033C18.3333 10.8214 16.6544 12.5003 14.5833 12.5003C11.4528 12.5003 9.36266 12.5003 5.83332 12.5003Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
