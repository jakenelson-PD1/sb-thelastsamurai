import { clsx } from 'clsx';

export interface BarChart04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarChart04Icon({ size = 20, className, ...props }: BarChart04IconProps) {
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
      <path d="M2.5 9.16667V17.5M12.5 9.16667V17.5M7.5 2.5V17.5M17.5 2.5V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
