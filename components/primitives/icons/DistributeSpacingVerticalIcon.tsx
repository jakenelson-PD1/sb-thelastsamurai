import { clsx } from 'clsx';

export interface DistributeSpacingVerticalIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DistributeSpacingVerticalIcon({ size = 20, className, ...props }: DistributeSpacingVerticalIconProps) {
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
      <path d="M17.5 2.5H2.5M17.5 17.5H2.5M4.16667 10C4.16667 9.22342 4.16667 8.83517 4.29353 8.52883C4.46269 8.12048 4.78715 7.79602 5.19553 7.62687C5.50182 7.5 5.8901 7.5 6.66667 7.5H13.3333C14.1099 7.5 14.4982 7.5 14.8045 7.62687C15.2128 7.79602 15.5373 8.12048 15.7065 8.52883C15.8333 8.83517 15.8333 9.22342 15.8333 10C15.8333 10.7766 15.8333 11.1648 15.7065 11.4712C15.5373 11.8795 15.2128 12.204 14.8045 12.3732C14.4982 12.5 14.1099 12.5 13.3333 12.5H6.66667C5.8901 12.5 5.50182 12.5 5.19553 12.3732C4.78715 12.204 4.46269 11.8795 4.29353 11.4712C4.16667 11.1648 4.16667 10.7766 4.16667 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
