import { clsx } from 'clsx';

export interface Menu05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Menu05Icon({ size = 20, className, ...props }: Menu05IconProps) {
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
      <path d="M2.5 7.08331H17.5M2.5 12.9166H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
