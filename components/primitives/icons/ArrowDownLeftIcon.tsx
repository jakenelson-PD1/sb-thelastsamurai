import { clsx } from 'clsx';

export interface ArrowDownLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowDownLeftIcon({ size = 20, className, ...props }: ArrowDownLeftIconProps) {
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
      <path d="M14.1666 5.83337L5.83331 14.1667M5.83331 14.1667H14.1666M5.83331 14.1667V5.83337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
