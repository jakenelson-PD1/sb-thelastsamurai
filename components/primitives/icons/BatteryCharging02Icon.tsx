import { clsx } from 'clsx';

export interface BatteryCharging02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BatteryCharging02Icon({ size = 20, className, ...props }: BatteryCharging02IconProps) {
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
      <path d="M7.91666 15L11.25 10H6.24999L9.58332 5M18.3333 10.8333V9.16667M11.6667 15H11.8333C13.2335 15 13.9335 15 14.4683 14.7275C14.9387 14.4878 15.3212 14.1054 15.5608 13.635C15.8333 13.1002 15.8333 12.4002 15.8333 11V8.33333C15.8333 7.55836 15.8333 7.17087 15.7482 6.85295C15.517 5.99023 14.8431 5.31635 13.9804 5.08518C13.6625 5 13.275 5 12.5 5M5.83332 5H5.66666C4.26652 5 3.56646 5 3.03168 5.27248C2.56127 5.51217 2.17882 5.89462 1.93914 6.36503C1.66666 6.8998 1.66666 7.59987 1.66666 9V11.6667C1.66666 12.4417 1.66666 12.8292 1.75184 13.1471C1.98301 14.0097 2.65688 14.6837 3.51961 14.9148C3.83752 15 4.22501 15 4.99999 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
