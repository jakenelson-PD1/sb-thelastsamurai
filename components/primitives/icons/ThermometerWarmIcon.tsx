import { clsx } from 'clsx';

export interface ThermometerWarmIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ThermometerWarmIcon({ size = 20, className, ...props }: ThermometerWarmIconProps) {
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
      <g clipPath="url(#thermometerwarm-clip0_118_52305)">
<path d="M10 7.50033C9.25644 7.48834 8.53027 7.72535 7.93689 8.17366C7.34354 8.62199 6.91715 9.25582 6.72553 9.97432C6.53392 10.6929 6.58809 11.4549 6.87943 12.1391C7.17077 12.8233 7.68255 13.3905 8.33335 13.7503M10 2.50033V4.16699M5.50002 15.3337L4.33335 16.5003M3.33335 10.8337H1.66669M5.50002 6.33366L4.33335 5.16699M16.6667 12.1129V3.33366C16.6667 2.41318 15.9205 1.66699 15 1.66699C14.0795 1.66699 13.3334 2.41318 13.3334 3.33366V12.1129C12.337 12.6892 11.6667 13.7665 11.6667 15.0003C11.6667 16.8412 13.1591 18.3337 15 18.3337C16.8409 18.3337 18.3334 16.8412 18.3334 15.0003C18.3334 13.7665 17.663 12.6892 16.6667 12.1129Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="thermometerwarm-clip0_118_52305">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
