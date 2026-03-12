import { clsx } from 'clsx';

export interface Sliders02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Sliders02Icon({ size = 20, className, ...props }: Sliders02IconProps) {
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
      <path d="M4.16667 17.5V12.5M4.16667 12.5C5.08714 12.5 5.83333 11.7538 5.83333 10.8333C5.83333 9.91283 5.08714 9.16667 4.16667 9.16667C3.24619 9.16667 2.5 9.91283 2.5 10.8333C2.5 11.7538 3.24619 12.5 4.16667 12.5ZM4.16667 5.83333V2.5M10 17.5V12.5M10 5.83333V2.5M10 5.83333C9.0795 5.83333 8.33333 6.57952 8.33333 7.5C8.33333 8.4205 9.0795 9.16667 10 9.16667C10.9205 9.16667 11.6667 8.4205 11.6667 7.5C11.6667 6.57952 10.9205 5.83333 10 5.83333ZM15.8333 17.5V14.1667M15.8333 14.1667C16.7538 14.1667 17.5 13.4205 17.5 12.5C17.5 11.5795 16.7538 10.8333 15.8333 10.8333C14.9128 10.8333 14.1667 11.5795 14.1667 12.5C14.1667 13.4205 14.9128 14.1667 15.8333 14.1667ZM15.8333 7.5V2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
