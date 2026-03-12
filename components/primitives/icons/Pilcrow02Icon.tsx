import { clsx } from 'clsx';

export interface Pilcrow02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Pilcrow02Icon({ size = 20, className, ...props }: Pilcrow02IconProps) {
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
      <path d="M14.5833 3.33325V16.6666M16.25 3.33325H7.50001C5.65905 3.33325 4.16667 4.82564 4.16667 6.66659C4.16667 8.5075 5.65905 9.99992 7.50001 9.99992H11.6667M11.6667 3.33325V16.6666M10 16.6666H16.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
