import { clsx } from 'clsx';

export interface ArrowsRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowsRightIcon({ size = 20, className, ...props }: ArrowsRightIconProps) {
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
      <path d="M3.33331 5.83333H12.5M12.5 5.83333L9.16665 9.16667M12.5 5.83333L9.16665 2.5M3.33331 14.1667H16.6666M16.6666 14.1667L13.3333 17.5M16.6666 14.1667L13.3333 10.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
