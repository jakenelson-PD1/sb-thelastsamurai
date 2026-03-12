import { clsx } from 'clsx';

export interface FileSearch01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FileSearch01Icon({ size = 20, className, ...props }: FileSearch01IconProps) {
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
      <path d="M16.6667 8.75008V5.66675C16.6667 4.26661 16.6667 3.56655 16.3942 3.03177C16.1545 2.56136 15.7721 2.17891 15.3017 1.93923C14.7668 1.66675 14.0668 1.66675 12.6667 1.66675H7.33333C5.93319 1.66675 5.23313 1.66675 4.69835 1.93923C4.22794 2.17891 3.8455 2.56136 3.60581 3.03177C3.33333 3.56655 3.33333 4.26661 3.33333 5.66675V14.3334C3.33333 15.7336 3.33333 16.4336 3.60581 16.9684C3.8455 17.4388 4.22794 17.8212 4.69835 18.0609C5.23313 18.3334 5.93319 18.3334 7.33333 18.3334H9.58333M18.3333 18.3334L17.0833 17.0834M17.9167 15.0001C17.9167 16.6109 16.6108 17.9167 15 17.9167C13.3892 17.9167 12.0833 16.6109 12.0833 15.0001C12.0833 13.3892 13.3892 12.0834 15 12.0834C16.6108 12.0834 17.9167 13.3892 17.9167 15.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
