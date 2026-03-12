import { clsx } from 'clsx';

export interface CommandIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CommandIcon({ size = 20, className, ...props }: CommandIconProps) {
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
      <path d="M7.5 7.5V5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5H7.5ZM7.5 7.5V12.5M7.5 7.5H12.5M7.5 12.5V15C7.5 16.3807 6.38071 17.5 5 17.5C3.61929 17.5 2.5 16.3807 2.5 15C2.5 13.6192 3.61929 12.5 5 12.5H7.5ZM7.5 12.5H12.5M12.5 7.5V12.5M12.5 7.5V5C12.5 3.61929 13.6192 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5C17.5 6.38071 16.3807 7.5 15 7.5H12.5ZM12.5 12.5H15C16.3807 12.5 17.5 13.6192 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C13.6192 17.5 12.5 16.3807 12.5 15V12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
