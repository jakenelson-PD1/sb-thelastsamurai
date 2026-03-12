import { clsx } from 'clsx';

export interface SunSetting01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SunSetting01Icon({ size = 20, className, ...props }: SunSetting01IconProps) {
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
      <path d="M9.99999 2.5V4.16667M4.42842 6.0951L3.24991 4.91658M15.5715 6.0951L16.75 4.91658M4.99999 12.5C4.99999 9.73858 7.23856 7.5 9.99999 7.5C12.7614 7.5 15 9.73858 15 12.5M18.3333 12.5H1.66666M15.8333 15.8333H4.16666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
