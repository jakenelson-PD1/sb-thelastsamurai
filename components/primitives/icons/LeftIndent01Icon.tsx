import { clsx } from 'clsx';

export interface LeftIndent01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LeftIndent01Icon({ size = 20, className, ...props }: LeftIndent01IconProps) {
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
      <path d="M17.5 7.70825H10M17.5 3.33325H2.5M17.5 12.2916H10M17.5 16.6666H2.5M3.56667 7.13325L6.78889 9.54992C7.03013 9.73084 7.15075 9.82134 7.19388 9.93225C7.23167 10.0293 7.23167 10.1372 7.19388 10.2343C7.15075 10.3452 7.03013 10.4357 6.78889 10.6166L3.56667 13.0333C3.22335 13.2908 3.05169 13.4195 2.90801 13.4165C2.78297 13.4139 2.66571 13.3553 2.5886 13.2568C2.5 13.1437 2.5 12.9291 2.5 12.4999V7.66659C2.5 7.23744 2.5 7.02287 2.5886 6.90971C2.66571 6.81124 2.78297 6.75261 2.90801 6.75001C3.05169 6.74702 3.22335 6.87577 3.56667 7.13325Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
