import { clsx } from 'clsx';

export interface StandIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function StandIcon({ size = 20, className, ...props }: StandIconProps) {
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
      <g clipPath="url(#stand-clip0_118_49953)">
<path d="M7.49999 14.167L3.33332 18.3337M12.5 14.167L16.6667 18.3337M9.99999 1.66699V3.33366M9.99999 18.3337V14.167M4.33332 14.167H15.6667C16.6001 14.167 17.0668 14.167 17.4233 13.9853C17.7369 13.8256 17.9919 13.5706 18.1517 13.257C18.3333 12.9005 18.3333 12.4337 18.3333 11.5003V6.00033C18.3333 5.0669 18.3333 4.60019 18.1517 4.24368C17.9919 3.93007 17.7369 3.6751 17.4233 3.51532C17.0668 3.33366 16.6001 3.33366 15.6667 3.33366H4.33332C3.3999 3.33366 2.93319 3.33366 2.57667 3.51532C2.26306 3.6751 2.0081 3.93007 1.84831 4.24368C1.66666 4.60019 1.66666 5.0669 1.66666 6.00033V11.5003C1.66666 12.4337 1.66666 12.9005 1.84831 13.257C2.0081 13.5706 2.26306 13.8256 2.57667 13.9853C2.93319 14.167 3.39991 14.167 4.33332 14.167Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="stand-clip0_118_49953">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
