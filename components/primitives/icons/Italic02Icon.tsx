import { clsx } from 'clsx';

export interface Italic02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Italic02Icon({ size = 20, className, ...props }: Italic02IconProps) {
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
      <path d="M11.0417 3.33325L6.04167 16.6666M13.9583 3.33325L8.95833 16.6666M16.25 3.33325H7.91667M12.0833 16.6666H3.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
