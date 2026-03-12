import { clsx } from 'clsx';

export interface Dotpoints01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Dotpoints01Icon({ size = 20, className, ...props }: Dotpoints01IconProps) {
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
      <path d="M17.5 10.0001H7.5M17.5 5.00008H7.5M17.5 15.0001H7.5M4.16667 10.0001C4.16667 10.4603 3.79357 10.8334 3.33333 10.8334C2.8731 10.8334 2.5 10.4603 2.5 10.0001C2.5 9.53983 2.8731 9.16675 3.33333 9.16675C3.79357 9.16675 4.16667 9.53983 4.16667 10.0001ZM4.16667 5.00008C4.16667 5.46031 3.79357 5.83341 3.33333 5.83341C2.8731 5.83341 2.5 5.46031 2.5 5.00008C2.5 4.53985 2.8731 4.16675 3.33333 4.16675C3.79357 4.16675 4.16667 4.53985 4.16667 5.00008ZM4.16667 15.0001C4.16667 15.4603 3.79357 15.8334 3.33333 15.8334C2.8731 15.8334 2.5 15.4603 2.5 15.0001C2.5 14.5398 2.8731 14.1667 3.33333 14.1667C3.79357 14.1667 4.16667 14.5398 4.16667 15.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
