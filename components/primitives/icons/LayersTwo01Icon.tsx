import { clsx } from 'clsx';

export interface LayersTwo01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LayersTwo01Icon({ size = 20, className, ...props }: LayersTwo01IconProps) {
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
      <path d="M1.66669 12.0835L9.70185 16.1011C9.81119 16.1557 9.86585 16.1831 9.92319 16.1938C9.97394 16.2033 10.0261 16.2033 10.0769 16.1938C10.1342 16.1831 10.1889 16.1557 10.2982 16.1011L18.3334 12.0835M1.66669 7.9168L9.70185 3.89921C9.81119 3.84455 9.86585 3.81722 9.92319 3.80647C9.97394 3.79693 10.0261 3.79693 10.0769 3.80647C10.1342 3.81722 10.1889 3.84455 10.2982 3.89921L18.3334 7.9168L10.2982 11.9344C10.1889 11.9891 10.1342 12.0164 10.0769 12.0272C10.0261 12.0367 9.97394 12.0367 9.92319 12.0272C9.86585 12.0164 9.81119 11.9891 9.70185 11.9344L1.66669 7.9168Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
