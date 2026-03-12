import { clsx } from 'clsx';

export interface BarChartSquarePlusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarChartSquarePlusIcon({ size = 20, className, ...props }: BarChartSquarePlusIconProps) {
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
      <path d="M10 2.49984H13.5C14.9002 2.49984 15.6002 2.49984 16.135 2.77232C16.6054 3.012 16.9879 3.39445 17.2275 3.86486C17.5 4.39964 17.5 5.0997 17.5 6.49984V13.4998C17.5 14.9 17.5 15.6 17.2275 16.1348C16.9879 16.6053 16.6054 16.9877 16.135 17.2273C15.6002 17.4998 14.9002 17.4998 13.5 17.4998H6.50002C5.09989 17.4998 4.39982 17.4998 3.86505 17.2273C3.39464 16.9877 3.01219 16.6053 2.7725 16.1348C2.50002 15.6 2.50002 14.9 2.50002 13.4998V9.99984M6.66669 10.8332V14.1665M13.3334 9.1665V14.1665M10 5.83317V14.1665M4.16669 6.6665V1.6665M1.66669 4.1665H6.66669" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
