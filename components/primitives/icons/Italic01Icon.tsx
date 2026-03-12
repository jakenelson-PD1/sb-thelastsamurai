import { clsx } from 'clsx';

export interface Italic01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Italic01Icon({ size = 20, className, ...props }: Italic01IconProps) {
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
      <path d="M15.8334 3.33325H8.33335M11.6667 16.6666H4.16669M12.5 3.33325L7.50002 16.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
