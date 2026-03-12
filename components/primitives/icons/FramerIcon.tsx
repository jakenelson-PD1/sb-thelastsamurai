import { clsx } from 'clsx';

export interface FramerIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FramerIcon({ size = 20, className, ...props }: FramerIconProps) {
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
      <path d="M10 12.9167V18.75L4.16666 12.9167M4.16666 12.9167V7.08333H10M4.16666 12.9167H15.8333L10 7.08333M10 7.08333H15.8333V1.25H4.16666L10 7.08333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
