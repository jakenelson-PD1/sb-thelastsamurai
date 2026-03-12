import { clsx } from 'clsx';

export interface ShieldZapIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ShieldZapIcon({ size = 20, className, ...props }: ShieldZapIconProps) {
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
      <path d="M10.8333 6.2503L8.33333 8.75033L11.6667 10.417L9.16666 12.917M16.6667 10.0003C16.6667 14.0907 12.205 17.0657 10.5817 18.0127C10.3972 18.1203 10.3049 18.1742 10.1747 18.2021C10.0737 18.2237 9.92633 18.2237 9.82525 18.2021C9.69508 18.1742 9.60283 18.1203 9.41833 18.0127C7.79496 17.0657 3.33333 14.0907 3.33333 10.0003V6.01497C3.33333 5.34871 3.33333 5.01558 3.4423 4.72922C3.53855 4.47625 3.69498 4.25053 3.89804 4.07158C4.12791 3.869 4.43983 3.75203 5.06366 3.51809L9.53183 1.84253C9.70508 1.77756 9.79166 1.74508 9.88083 1.7322C9.95983 1.72078 10.0402 1.72078 10.1192 1.7322C10.2083 1.74508 10.2949 1.77756 10.4682 1.84253L14.9363 3.51809C15.5602 3.75203 15.8721 3.869 16.1019 4.07158C16.305 4.25053 16.4614 4.47625 16.5577 4.72922C16.6667 5.01558 16.6667 5.34871 16.6667 6.01497V10.0003Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
