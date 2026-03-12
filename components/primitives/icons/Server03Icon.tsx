import { clsx } from 'clsx';

export interface Server03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Server03Icon({ size = 20, className, ...props }: Server03IconProps) {
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
      <path d="M18.3333 14.5833L17.7569 6.22479C17.6664 4.91253 17.6212 4.2564 17.3367 3.75902C17.0863 3.32111 16.7093 2.9692 16.2552 2.74952C15.7394 2.5 15.0817 2.5 13.7663 2.5H6.23364C4.91826 2.5 4.26056 2.5 3.7448 2.74952C3.2907 2.9692 2.91368 3.32111 2.66328 3.75902C2.37886 4.2564 2.33361 4.91252 2.24311 6.22479L1.66666 14.5833M18.3333 14.5833C18.3333 16.1942 17.0275 17.5 15.4167 17.5H4.58333C2.9725 17.5 1.66666 16.1942 1.66666 14.5833M18.3333 14.5833C18.3333 12.9725 17.0275 11.6667 15.4167 11.6667H4.58333C2.9725 11.6667 1.66666 12.9725 1.66666 14.5833M5 14.5833H5.00833M10 14.5833H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
