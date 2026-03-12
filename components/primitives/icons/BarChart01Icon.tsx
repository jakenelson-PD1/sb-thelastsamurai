import { clsx } from 'clsx';

export interface BarChart01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarChart01Icon({ size = 20, className, ...props }: BarChart01IconProps) {
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
      <path d="M15 16.6668V8.3335M10 16.6668V3.3335M5 16.6668V11.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
