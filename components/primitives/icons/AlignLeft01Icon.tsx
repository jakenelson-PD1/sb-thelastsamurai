import { clsx } from 'clsx';

export interface AlignLeft01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlignLeft01Icon({ size = 20, className, ...props }: AlignLeft01IconProps) {
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
      <path d="M2.5 2.5V17.5M17.5 10H5.83333M5.83333 10L11.6667 15.8333M5.83333 10L11.6667 4.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
