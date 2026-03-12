import { clsx } from 'clsx';

export interface AnnotationCheckIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AnnotationCheckIcon({ size = 20, className, ...props }: AnnotationCheckIconProps) {
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
      <path d="M7.5 9.16667L9.16667 10.8333L12.9167 7.08333M8.25 16L9.46667 17.6222C9.64758 17.8635 9.73808 17.9841 9.849 18.0272C9.94608 18.065 10.0539 18.065 10.151 18.0272C10.2619 17.9841 10.3524 17.8635 10.5333 17.6222L11.75 16C11.9943 15.6743 12.1164 15.5114 12.2654 15.3871C12.4641 15.2213 12.6986 15.104 12.9504 15.0446C13.1392 15 13.3428 15 13.75 15C14.9148 15 15.4972 15 15.9567 14.8097C16.5692 14.556 17.056 14.0692 17.3097 13.4567C17.5 12.9972 17.5 12.4148 17.5 11.25V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V11.25C2.5 12.4148 2.5 12.9972 2.6903 13.4567C2.94403 14.0692 3.43073 14.556 4.04329 14.8097C4.50272 15 5.08515 15 6.25 15C6.65715 15 6.86072 15 7.04959 15.0446C7.30141 15.104 7.53593 15.2213 7.73458 15.3871C7.88357 15.5114 8.00571 15.6743 8.25 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
