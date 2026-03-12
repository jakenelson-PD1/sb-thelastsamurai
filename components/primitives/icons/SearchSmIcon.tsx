import { clsx } from 'clsx';

export interface SearchSmIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SearchSmIcon({ size = 20, className, ...props }: SearchSmIconProps) {
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
      <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11168 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11168 5.11168 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11168 14.1667 8.33333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
