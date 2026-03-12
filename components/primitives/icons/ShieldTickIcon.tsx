import { clsx } from 'clsx';

export interface ShieldTickIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ShieldTickIcon({ size = 20, className, ...props }: ShieldTickIconProps) {
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
      <path d="M7.5 9.58366L9.16667 11.2503L12.9167 7.5003M16.6667 10.0003C16.6667 14.0907 12.205 17.0657 10.5817 18.0127C10.3972 18.1203 10.3049 18.1742 10.1748 18.2021C10.0737 18.2237 9.92634 18.2237 9.82525 18.2021C9.69509 18.1742 9.60284 18.1203 9.41834 18.0127C7.79497 17.0657 3.33334 14.0907 3.33334 10.0003V6.01497C3.33334 5.34871 3.33334 5.01558 3.4423 4.72922C3.53856 4.47625 3.69499 4.25053 3.89805 4.07158C4.12792 3.869 4.43984 3.75203 5.06367 3.51809L9.53184 1.84253C9.70509 1.77756 9.79167 1.74508 9.88084 1.7322C9.95984 1.72078 10.0402 1.72078 10.1192 1.7322C10.2083 1.74508 10.2949 1.77756 10.4682 1.84253L14.9363 3.51809C15.5602 3.75203 15.8721 3.869 16.1019 4.07158C16.305 4.25053 16.4614 4.47625 16.5577 4.72922C16.6667 5.01558 16.6667 5.34871 16.6667 6.01497V10.0003Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
