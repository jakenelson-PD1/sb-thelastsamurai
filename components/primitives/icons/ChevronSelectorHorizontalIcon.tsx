import { clsx } from 'clsx';

export interface ChevronSelectorHorizontalIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChevronSelectorHorizontalIcon({ size = 20, className, ...props }: ChevronSelectorHorizontalIconProps) {
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
      <path d="M7.49998 5.83337L3.33331 10L7.49998 14.1667M12.5 5.83337L16.6666 10L12.5 14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
