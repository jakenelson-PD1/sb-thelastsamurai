import { clsx } from 'clsx';

export interface LogIn03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LogIn03Icon({ size = 20, className, ...props }: LogIn03IconProps) {
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
      <path d="M5 14.1666C5 14.4594 5 14.6057 5.01306 14.733C5.12146 15.7895 5.8855 16.6621 6.91838 16.9092C7.04278 16.939 7.18792 16.9583 7.47807 16.9971L12.9713 17.7295C14.535 17.938 15.3169 18.0422 15.9237 17.8009C16.4565 17.5891 16.9002 17.2006 17.1807 16.7005C17.5 16.1308 17.5 15.3421 17.5 13.7646V6.23535C17.5 4.65781 17.5 3.86905 17.1807 3.29944C16.9002 2.79934 16.4565 2.41081 15.9237 2.19898C15.3169 1.9577 14.535 2.06194 12.9713 2.27044L7.47807 3.00287C7.18788 3.04156 7.04279 3.0609 6.91838 3.09067C5.8855 3.33775 5.12146 4.21043 5.01306 5.2669C5 5.39415 5 5.54053 5 5.83328M10 6.66661L13.3333 9.99998M13.3333 9.99998L10 13.3333M13.3333 9.99998H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
