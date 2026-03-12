import { clsx } from 'clsx';

export interface Droplets03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Droplets03Icon({ size = 20, className, ...props }: Droplets03IconProps) {
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
      <path d="M10.4667 5.06634C11.0398 4.15061 11.4461 3.14054 11.6667 2.08301C12.0833 4.16634 13.3333 6.16634 15 7.49967C16.6667 8.83301 17.5 10.4163 17.5 12.083C17.5048 13.2349 17.1674 14.3623 16.5307 15.3223C15.8939 16.2822 14.9865 17.0315 13.9234 17.4751C12.8603 17.9187 11.6895 18.0367 10.5593 17.8141C9.42908 17.5914 8.39042 17.0383 7.575 16.2247M5.83333 13.1497C7.66667 13.1497 9.16667 11.6247 9.16667 9.77467C9.16667 8.80801 8.69167 7.89134 7.74167 7.11634C6.79167 6.34134 6.075 5.19134 5.83333 3.98301C5.59167 5.19134 4.88333 6.34967 3.925 7.11634C2.96667 7.88301 2.5 8.81634 2.5 9.77467C2.5 11.6247 4 13.1497 5.83333 13.1497Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
