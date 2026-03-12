import { clsx } from 'clsx';

export interface Shield01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Shield01Icon({ size = 20, className, ...props }: Shield01IconProps) {
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
      <path d="M9.41834 18.0127C9.60284 18.1203 9.69509 18.1742 9.82526 18.2021C9.92634 18.2237 10.0737 18.2237 10.1748 18.2021C10.3049 18.1742 10.3972 18.1203 10.5817 18.0127C12.205 17.0657 16.6667 14.0907 16.6667 10.0003V6.01497C16.6667 5.34871 16.6667 5.01558 16.5577 4.72922C16.4614 4.47625 16.305 4.25053 16.1019 4.07158C15.8721 3.869 15.5602 3.75203 14.9363 3.51809L10.4682 1.84253C10.2949 1.77756 10.2083 1.74508 10.1192 1.7322C10.0402 1.72078 9.95984 1.72078 9.88084 1.7322C9.79168 1.74508 9.70509 1.77756 9.53184 1.84253L5.06368 3.51809C4.43984 3.75203 4.12793 3.869 3.89806 4.07158C3.69499 4.25053 3.53857 4.47625 3.44231 4.72922C3.33334 5.01558 3.33334 5.34871 3.33334 6.01497V10.0003C3.33334 14.0907 7.79498 17.0657 9.41834 18.0127Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
