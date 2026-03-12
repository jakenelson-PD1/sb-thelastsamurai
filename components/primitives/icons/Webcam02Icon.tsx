import { clsx } from 'clsx';

export interface Webcam02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Webcam02Icon({ size = 20, className, ...props }: Webcam02IconProps) {
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
      <path d="M6.66666 18.3332H13.3333M17.0833 8.74984C17.0833 12.6618 13.912 15.8332 10 15.8332C6.08798 15.8332 2.91666 12.6618 2.91666 8.74984C2.91666 4.83782 6.08798 1.6665 10 1.6665C13.912 1.6665 17.0833 4.83782 17.0833 8.74984ZM12.6562 8.74984C12.6562 10.2168 11.467 11.4061 10 11.4061C8.533 11.4061 7.34375 10.2168 7.34375 8.74984C7.34375 7.28283 8.533 6.09359 10 6.09359C11.467 6.09359 12.6562 7.28283 12.6562 8.74984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
