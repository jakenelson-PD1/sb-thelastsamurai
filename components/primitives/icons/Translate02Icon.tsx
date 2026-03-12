import { clsx } from 'clsx';

export interface Translate02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Translate02Icon({ size = 20, className, ...props }: Translate02IconProps) {
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
      <path d="M4.16666 6.66669L8.33332 10.8334M3.33332 11.6667L8.33332 6.66669L9.99999 4.16669M1.66666 4.16669H11.6667M5.83332 1.66669H6.66666M10.7608 14.1667H16.7392M10.7608 14.1667L9.16666 17.5M10.7608 14.1667L13.1486 9.17419C13.341 8.77194 13.4372 8.57077 13.5688 8.50719C13.6832 8.45194 13.8167 8.45194 13.9312 8.50719C14.0628 8.57077 14.159 8.77194 14.3514 9.17419L16.7392 14.1667M16.7392 14.1667L18.3333 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
