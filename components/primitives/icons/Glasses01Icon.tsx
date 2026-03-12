import { clsx } from 'clsx';

export interface Glasses01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Glasses01Icon({ size = 20, className, ...props }: Glasses01IconProps) {
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
      <path d="M8.33332 9.61257C9.36124 9.01849 10.6386 9.01849 11.6666 9.61257M7.35701 7.6433C8.65874 8.94507 8.65874 11.0556 7.35701 12.3573C6.05527 13.6591 3.94471 13.6591 2.64296 12.3573C1.34122 11.0556 1.34122 8.94507 2.64296 7.6433C3.9447 6.34156 6.05526 6.34156 7.35701 7.6433ZM17.357 7.6433C18.6587 8.94507 18.6587 11.0556 17.357 12.3573C16.0552 13.6591 13.9447 13.6591 12.643 12.3573C11.3412 11.0556 11.3412 8.94507 12.643 7.6433C13.9447 6.34156 16.0552 6.34156 17.357 7.6433Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
