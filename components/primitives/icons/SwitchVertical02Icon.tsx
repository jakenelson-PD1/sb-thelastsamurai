import { clsx } from 'clsx';

export interface SwitchVertical02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SwitchVertical02Icon({ size = 20, className, ...props }: SwitchVertical02IconProps) {
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
      <path d="M5.83333 3.33325V16.6666M5.83333 16.6666L2.5 13.3333M5.83333 16.6666L9.16667 13.3333M14.1667 16.6666V3.33325M14.1667 3.33325L10.8333 6.66659M14.1667 3.33325L17.5 6.66659" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
