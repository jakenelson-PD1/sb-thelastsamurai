import { clsx } from 'clsx';

export interface Flag02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Flag02Icon({ size = 20, className, ...props }: Flag02IconProps) {
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
      <path d="M3.33331 12.5003C3.33331 12.5003 4.16665 11.667 6.66665 11.667C9.16665 11.667 10.8333 13.3337 13.3333 13.3337C15.8333 13.3337 16.6666 12.5003 16.6666 12.5003V3.33366C16.6666 3.33366 15.8333 4.16699 13.3333 4.16699C10.8333 4.16699 9.16665 2.50033 6.66665 2.50033C4.16665 2.50033 3.33331 3.33366 3.33331 3.33366M3.33331 18.3337V1.66699" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
