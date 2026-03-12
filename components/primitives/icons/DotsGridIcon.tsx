import { clsx } from 'clsx';

export interface DotsGridIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DotsGridIcon({ size = 20, className, ...props }: DotsGridIconProps) {
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
      <path d="M10 5.00001C10.4603 5.00001 10.8334 4.62691 10.8334 4.16668C10.8334 3.70644 10.4603 3.33334 10 3.33334C9.53977 3.33334 9.16669 3.70644 9.16669 4.16668C9.16669 4.62691 9.53977 5.00001 10 5.00001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53977 10.4603 9.16669 10 9.16669C9.53977 9.16669 9.16669 9.53977 9.16669 10C9.16669 10.4603 9.53977 10.8334 10 10.8334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16.6667C10.4603 16.6667 10.8334 16.2936 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53977 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2936 9.53977 16.6667 10 16.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8333 5.00001C16.2936 5.00001 16.6667 4.62691 16.6667 4.16668C16.6667 3.70644 16.2936 3.33334 15.8333 3.33334C15.3731 3.33334 15 3.70644 15 4.16668C15 4.62691 15.3731 5.00001 15.8333 5.00001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53977 16.2936 9.16669 15.8333 9.16669C15.3731 9.16669 15 9.53977 15 10C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8333 16.6667C16.2936 16.6667 16.6667 16.2936 16.6667 15.8333C16.6667 15.3731 16.2936 15 15.8333 15C15.3731 15 15 15.3731 15 15.8333C15 16.2936 15.3731 16.6667 15.8333 16.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.16668 5.00001C4.62691 5.00001 5.00001 4.62691 5.00001 4.16668C5.00001 3.70644 4.62691 3.33334 4.16668 3.33334C3.70644 3.33334 3.33334 3.70644 3.33334 4.16668C3.33334 4.62691 3.70644 5.00001 4.16668 5.00001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.16668 10.8334C4.62691 10.8334 5.00001 10.4603 5.00001 10C5.00001 9.53977 4.62691 9.16669 4.16668 9.16669C3.70644 9.16669 3.33334 9.53977 3.33334 10C3.33334 10.4603 3.70644 10.8334 4.16668 10.8334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.16668 16.6667C4.62691 16.6667 5.00001 16.2936 5.00001 15.8333C5.00001 15.3731 4.62691 15 4.16668 15C3.70644 15 3.33334 15.3731 3.33334 15.8333C3.33334 16.2936 3.70644 16.6667 4.16668 16.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
