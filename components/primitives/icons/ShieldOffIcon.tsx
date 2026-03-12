import { clsx } from 'clsx';

export interface ShieldOffIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ShieldOffIcon({ size = 20, className, ...props }: ShieldOffIconProps) {
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
      <path d="M7.34057 2.66425L9.53183 1.84253C9.70508 1.77756 9.79167 1.74508 9.88083 1.7322C9.95983 1.72078 10.0402 1.72078 10.1192 1.7322C10.2083 1.74508 10.2949 1.77756 10.4682 1.84253L14.9363 3.51809C15.5602 3.75203 15.8721 3.869 16.1019 4.07158C16.305 4.25053 16.4614 4.47625 16.5577 4.72922C16.6667 5.01558 16.6667 5.34871 16.6667 6.01497V10.0003C16.6667 10.6006 16.5706 11.1768 16.4015 11.7261M14.6849 14.6883C13.2802 16.322 11.4899 17.4827 10.583 18.0119C10.3977 18.1201 10.305 18.1742 10.1748 18.2021C10.0737 18.2237 9.92633 18.2237 9.82533 18.2021C9.69508 18.1742 9.60283 18.1203 9.41833 18.0127C7.79497 17.0657 3.33333 14.0907 3.33333 10.0003V4.81389C3.33333 4.42477 3.57472 4.07645 3.93907 3.93982M2.5 2.5003L17.5 17.5003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
