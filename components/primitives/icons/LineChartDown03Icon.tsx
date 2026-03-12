import { clsx } from 'clsx';

export interface LineChartDown03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LineChartDown03Icon({ size = 20, className, ...props }: LineChartDown03IconProps) {
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
      <path d="M14.1667 12.5L9.63808 7.97141C9.47308 7.8064 9.39058 7.72389 9.29542 7.69298C9.21175 7.66579 9.12158 7.66579 9.03792 7.69298C8.94275 7.72389 8.86025 7.8064 8.69525 7.97141L7.13807 9.52858C6.97307 9.69358 6.89056 9.77608 6.79542 9.807C6.71174 9.83425 6.62159 9.83425 6.53791 9.807C6.44277 9.77608 6.36027 9.69358 6.19526 9.52858L2.5 5.83333M14.1667 12.5H10.8333M14.1667 12.5V9.16667M6.5 17.5H13.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
