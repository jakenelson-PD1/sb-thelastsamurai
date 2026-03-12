import { clsx } from 'clsx';

export interface PresentationChart02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PresentationChart02Icon({ size = 20, className, ...props }: PresentationChart02IconProps) {
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
      <path d="M9.99999 13.3333V17.5M15 17.5L11.7072 14.756C11.0998 14.2498 10.7962 13.9968 10.4572 13.9001C10.1583 13.8148 9.84166 13.8148 9.54274 13.9001C9.20382 13.9968 8.90016 14.2498 8.29283 14.756L4.99999 17.5M6.66666 9.16667V10M9.99999 7.5V10M13.3333 5.83333V10M18.3333 2.5H1.66666M2.49999 2.5H17.5V9.33333C17.5 10.7335 17.5 11.4335 17.2275 11.9683C16.9878 12.4388 16.6054 12.8212 16.135 13.0608C15.6002 13.3333 14.9002 13.3333 13.5 13.3333H6.49999C5.09986 13.3333 4.39979 13.3333 3.86501 13.0608C3.39461 12.8212 3.01216 12.4388 2.77247 11.9683C2.49999 11.4335 2.49999 10.7335 2.49999 9.33333V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
