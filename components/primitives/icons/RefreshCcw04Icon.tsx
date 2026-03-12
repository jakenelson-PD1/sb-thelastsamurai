import { clsx } from 'clsx';

export interface RefreshCcw04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCcw04Icon({ size = 20, className, ...props }: RefreshCcw04IconProps) {
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
      <path d="M14.1667 15.7288C15.9344 14.4408 17.0834 12.3545 17.0834 9.99994C17.0834 6.08789 13.912 2.91659 10 2.91659H9.58335M10 17.0833C6.088 17.0833 2.91669 13.9119 2.91669 9.99994C2.91669 7.6453 4.06558 5.55903 5.83335 4.27108M9.16669 18.6666L10.8334 16.9999L9.16669 15.3333M10.8334 4.66659L9.16669 2.99992L10.8334 1.33325" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
