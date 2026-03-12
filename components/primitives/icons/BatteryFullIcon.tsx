import { clsx } from 'clsx';

export interface BatteryFullIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BatteryFullIcon({ size = 20, className, ...props }: BatteryFullIconProps) {
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
      <path d="M5.41669 8.33333V11.6667M8.75002 8.33333V11.6667M12.0834 8.33333V11.6667M18.3334 10.8333V9.16667M5.66669 15H11.8334C13.2335 15 13.9335 15 14.4684 14.7275C14.9388 14.4878 15.3212 14.1054 15.5609 13.635C15.8334 13.1002 15.8334 12.4002 15.8334 11V9C15.8334 7.59987 15.8334 6.8998 15.5609 6.36503C15.3212 5.89462 14.9388 5.51217 14.4684 5.27248C13.9335 5 13.2335 5 11.8334 5H5.66669C4.26655 5 3.56649 5 3.03171 5.27248C2.5613 5.51217 2.17885 5.89462 1.93917 6.36503C1.66669 6.8998 1.66669 7.59987 1.66669 9V11C1.66669 12.4002 1.66669 13.1002 1.93917 13.635C2.17885 14.1054 2.5613 14.4878 3.03171 14.7275C3.56649 15 4.26655 15 5.66669 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
