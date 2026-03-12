import { clsx } from 'clsx';

export interface UserLeft01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function UserLeft01Icon({ size = 20, className, ...props }: UserLeft01IconProps) {
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
      <path d="M15.8333 17.5L13.3333 15M13.3333 15L15.8333 12.5M13.3333 15H18.3333M9.99999 12.9167H6.24999C5.08702 12.9167 4.50553 12.9167 4.03237 13.0602C2.96703 13.3833 2.13336 14.2171 1.81019 15.2824C1.66666 15.7556 1.66666 16.337 1.66666 17.5M12.0833 6.25C12.0833 8.32107 10.4044 10 8.33332 10C6.26226 10 4.58332 8.32107 4.58332 6.25C4.58332 4.17893 6.26226 2.5 8.33332 2.5C10.4044 2.5 12.0833 4.17893 12.0833 6.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
