import { clsx } from 'clsx';

export interface EraserIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function EraserIcon({ size = 20, className, ...props }: EraserIconProps) {
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
      <path d="M14.9996 10.8333L9.16623 5.00003M17.4996 17.5H6.66627M9.11398 16.719L16.3378 9.49508C17.3279 8.50508 17.8229 8.01006 18.0084 7.43924C18.1715 6.93713 18.1715 6.39626 18.0084 5.89415C17.8229 5.32333 17.3279 4.82831 16.3378 3.83827L16.1614 3.66179C15.1713 2.67175 14.6763 2.17673 14.1055 1.99126C13.6034 1.82811 13.0625 1.82811 12.5604 1.99126C11.9896 2.17673 11.4946 2.67175 10.5045 3.66179L3.66137 10.5049C2.67132 11.495 2.1763 11.99 1.99083 12.5608C1.82768 13.0629 1.82768 13.6038 1.99083 14.1059C2.1763 14.6767 2.67132 15.1717 3.66137 16.1617L4.21856 16.719C4.50681 17.0072 4.65093 17.1513 4.81913 17.2544C4.96825 17.3458 5.13082 17.4132 5.30088 17.454C5.4927 17.5 5.69652 17.5 6.10417 17.5H7.22836C7.63601 17.5 7.83985 17.5 8.03166 17.454C8.20171 17.4132 8.36431 17.3458 8.5134 17.2544C8.68165 17.1513 8.82573 17.0072 9.11398 16.719Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
