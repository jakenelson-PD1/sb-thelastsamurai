import { clsx } from 'clsx';

export interface VariableIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function VariableIcon({ size = 20, className, ...props }: VariableIconProps) {
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
      <path d="M16.5884 17.5C17.7053 15.2407 18.3333 12.6941 18.3333 10C18.3333 7.30592 17.7053 4.7593 16.5884 2.5M3.41161 2.5C2.29469 4.7593 1.66666 7.30592 1.66666 10C1.66666 12.6941 2.29469 15.2407 3.41161 17.5M13.7905 7.1875H13.7158C13.1713 7.1875 12.654 7.42668 12.2997 7.84227L7.82059 13.0952C7.46623 13.5108 6.94892 13.75 6.40441 13.75H6.32969M7.26236 7.1875H8.42408C8.8405 7.1875 9.20641 7.46497 9.32083 7.86745L10.7995 13.0701C10.9139 13.4725 11.2798 13.75 11.6962 13.75H12.858" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
