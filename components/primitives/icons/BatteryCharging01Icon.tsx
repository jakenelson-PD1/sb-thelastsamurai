import { clsx } from 'clsx';

export interface BatteryCharging01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BatteryCharging01Icon({ size = 20, className, ...props }: BatteryCharging01IconProps) {
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
      <path d="M9.02774 12.5L10.4167 10H7.08332L8.47224 7.5M18.3333 10.8333V9.16667M5.66666 15H11.8333C13.2335 15 13.9335 15 14.4683 14.7275C14.9387 14.4878 15.3212 14.1054 15.5608 13.635C15.8333 13.1002 15.8333 12.4002 15.8333 11V9C15.8333 7.59987 15.8333 6.8998 15.5608 6.36503C15.3212 5.89462 14.9387 5.51217 14.4683 5.27248C13.9335 5 13.2335 5 11.8333 5H5.66666C4.26652 5 3.56646 5 3.03168 5.27248C2.56127 5.51217 2.17882 5.89462 1.93914 6.36503C1.66666 6.8998 1.66666 7.59987 1.66666 9V11C1.66666 12.4002 1.66666 13.1002 1.93914 13.635C2.17882 14.1054 2.56127 14.4878 3.03168 14.7275C3.56646 15 4.26652 15 5.66666 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
