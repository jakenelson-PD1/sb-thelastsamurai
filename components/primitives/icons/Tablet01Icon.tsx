import { clsx } from 'clsx';

export interface Tablet01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Tablet01Icon({ size = 20, className, ...props }: Tablet01IconProps) {
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
      <path d="M9.99999 14.5832H10.0083M5.99999 18.3332H14C14.9334 18.3332 15.4002 18.3332 15.7567 18.1515C16.0702 17.9918 16.3252 17.7368 16.485 17.4232C16.6667 17.0667 16.6667 16.5999 16.6667 15.6665V4.33317C16.6667 3.39975 16.6667 2.93304 16.485 2.57652C16.3252 2.26291 16.0702 2.00795 15.7567 1.84816C15.4002 1.6665 14.9334 1.6665 14 1.6665H5.99999C5.06658 1.6665 4.59986 1.6665 4.24334 1.84816C3.92974 2.00795 3.67477 2.26291 3.51499 2.57652C3.33333 2.93304 3.33333 3.39975 3.33333 4.33317V15.6665C3.33333 16.5999 3.33333 17.0667 3.51499 17.4232C3.67477 17.7368 3.92974 17.9918 4.24334 18.1515C4.59986 18.3332 5.06657 18.3332 5.99999 18.3332ZM10.4167 14.5832C10.4167 14.8133 10.2301 14.9998 9.99999 14.9998C9.76991 14.9998 9.58333 14.8133 9.58333 14.5832C9.58333 14.3531 9.76991 14.1665 9.99999 14.1665C10.2301 14.1665 10.4167 14.3531 10.4167 14.5832Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
