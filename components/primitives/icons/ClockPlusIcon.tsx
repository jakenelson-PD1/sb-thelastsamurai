import { clsx } from 'clsx';

export interface ClockPlusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ClockPlusIcon({ size = 20, className, ...props }: ClockPlusIconProps) {
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
      <g clipPath="url(#clockplus-clip0_118_51578)">
<path d="M18.2673 11.0545C18.3109 10.7092 18.3333 10.3574 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99999 1.66699C5.39761 1.66699 1.66666 5.39795 1.66666 10.0003C1.66666 14.6027 5.39761 18.3337 9.99999 18.3337C10.3628 18.3337 10.7202 18.3105 11.0708 18.2655M9.99999 5.00033V10.0003L13.1153 11.558M15.8333 18.3337V13.3337M13.3333 15.8337H18.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clockplus-clip0_118_51578">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
