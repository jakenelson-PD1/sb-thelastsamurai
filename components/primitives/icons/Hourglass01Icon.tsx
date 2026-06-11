import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Hourglass01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Hourglass01Icon({ size = 'md', className, ...props }: Hourglass01IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M9.99998 10.0003L6.43924 7.03304C5.9102 6.59218 5.64568 6.37174 5.45551 6.10153C5.28701 5.8621 5.16189 5.59494 5.08582 5.31223C4.99998 4.99315 4.99998 4.64882 4.99998 3.96016V1.66699M9.99998 10.0003L13.5607 7.03304C14.0897 6.59218 14.3543 6.37174 14.5445 6.10153C14.713 5.8621 14.8381 5.59494 14.9141 5.31223C15 4.99315 15 4.64882 15 3.96016V1.66699M9.99998 10.0003L6.43924 12.9676C5.9102 13.4085 5.64568 13.6289 5.45551 13.8992C5.28701 14.1386 5.16189 14.4057 5.08582 14.6884C4.99998 15.0075 4.99998 15.3518 4.99998 16.0405V18.3337M9.99998 10.0003L13.5607 12.9676C14.0897 13.4085 14.3543 13.6289 14.5445 13.8992C14.713 14.1386 14.8381 14.4057 14.9141 14.6884C15 15.0075 15 15.3518 15 16.0405V18.3337M3.33331 1.66699H16.6666M3.33331 18.3337H16.6666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
