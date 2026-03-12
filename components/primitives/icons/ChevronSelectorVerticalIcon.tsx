import { clsx } from 'clsx';

export interface ChevronSelectorVerticalIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChevronSelectorVerticalIcon({ size = 20, className, ...props }: ChevronSelectorVerticalIconProps) {
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
      <path d="M5.83334 12.5L10 16.6667L14.1667 12.5M5.83334 7.50004L10 3.33337L14.1667 7.50004" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
