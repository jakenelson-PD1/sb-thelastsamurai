import { clsx } from 'clsx';

export interface Divide01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Divide01Icon({ size = 20, className, ...props }: Divide01IconProps) {
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
      <path d="M3.33334 9.99999H16.6667M10.8333 4.99999C10.8333 5.46022 10.4603 5.83332 10 5.83332C9.53975 5.83332 9.16667 5.46022 9.16667 4.99999C9.16667 4.53976 9.53975 4.16666 10 4.16666C10.4603 4.16666 10.8333 4.53976 10.8333 4.99999ZM10.8333 15C10.8333 15.4602 10.4603 15.8333 10 15.8333C9.53975 15.8333 9.16667 15.4602 9.16667 15C9.16667 14.5397 9.53975 14.1667 10 14.1667C10.4603 14.1667 10.8333 14.5397 10.8333 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
