import { clsx } from 'clsx';

export interface Dotpoints02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Dotpoints02Icon({ size = 20, className, ...props }: Dotpoints02IconProps) {
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
      <path d="M17.5 4.16675H8.33333M17.5 15.8334H8.33333M17.5 10.0001H8.33333M5 4.16675C5 4.85711 4.44036 5.41675 3.75 5.41675C3.05964 5.41675 2.5 4.85711 2.5 4.16675C2.5 3.47639 3.05964 2.91675 3.75 2.91675C4.44036 2.91675 5 3.47639 5 4.16675ZM5 15.8334C5 16.5237 4.44036 17.0834 3.75 17.0834C3.05964 17.0834 2.5 16.5237 2.5 15.8334C2.5 15.1431 3.05964 14.5834 3.75 14.5834C4.44036 14.5834 5 15.1431 5 15.8334ZM5 10.0001C5 10.6904 4.44036 11.2501 3.75 11.2501C3.05964 11.2501 2.5 10.6904 2.5 10.0001C2.5 9.30975 3.05964 8.75008 3.75 8.75008C4.44036 8.75008 5 9.30975 5 10.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
