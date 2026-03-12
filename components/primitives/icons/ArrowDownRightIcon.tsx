import { clsx } from 'clsx';

export interface ArrowDownRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowDownRightIcon({ size = 20, className, ...props }: ArrowDownRightIconProps) {
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
      <path d="M5.83331 5.83337L14.1666 14.1667M14.1666 14.1667V5.83337M14.1666 14.1667H5.83331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
