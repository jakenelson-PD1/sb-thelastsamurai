import { clsx } from 'clsx';

export interface PresentationChart03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PresentationChart03Icon({ size = 20, className, ...props }: PresentationChart03IconProps) {
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
      <path d="M10 13.3333V17.5M10 13.3333L15 17.5M10 13.3333L5.00002 17.5M6.66669 5.83333V10M10 7.5V10M13.3334 9.16667V10M18.3334 2.5H1.66669M2.50002 2.5H17.5V9.33333C17.5 10.7335 17.5 11.4335 17.2275 11.9683C16.9879 12.4388 16.6054 12.8212 16.135 13.0608C15.6002 13.3333 14.9002 13.3333 13.5 13.3333H6.50002C5.09989 13.3333 4.39982 13.3333 3.86505 13.0608C3.39464 12.8212 3.01219 12.4388 2.7725 11.9683C2.50002 11.4335 2.50002 10.7335 2.50002 9.33333V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
