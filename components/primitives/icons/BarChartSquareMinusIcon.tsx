import { clsx } from 'clsx';

export interface BarChartSquareMinusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarChartSquareMinusIcon({ size = 20, className, ...props }: BarChartSquareMinusIconProps) {
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
      <path d="M9.99999 2.5H13.5C14.9002 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86503C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9002 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9002 17.5 13.5 17.5H6.49999C5.09986 17.5 4.39979 17.5 3.86501 17.2275C3.39461 16.9878 3.01216 16.6054 2.77247 16.135C2.49999 15.6002 2.49999 14.9002 2.49999 13.5V10M6.66666 10.8333V14.1667M13.3333 9.16667V14.1667M9.99999 5.83333V14.1667M1.66666 4.16667H6.66666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
