import { clsx } from 'clsx';

export interface Tv03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Tv03Icon({ size = 20, className, ...props }: Tv03IconProps) {
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
      <path d="M14.1667 2.5L10 5.83333L5.83335 2.5M5.66669 17.5H14.3334C15.7335 17.5 16.4335 17.5 16.9684 17.2275C17.4388 16.9878 17.8212 16.6054 18.0609 16.135C18.3334 15.6002 18.3334 14.9002 18.3334 13.5V9.83333C18.3334 8.43317 18.3334 7.73313 18.0609 7.19836C17.8212 6.72795 17.4388 6.3455 16.9684 6.10582C16.4335 5.83333 15.7335 5.83333 14.3334 5.83333H5.66669C4.26655 5.83333 3.56649 5.83333 3.03171 6.10582C2.5613 6.3455 2.17885 6.72795 1.93917 7.19836C1.66669 7.73313 1.66669 8.43317 1.66669 9.83333V13.5C1.66669 14.9002 1.66669 15.6002 1.93917 16.135C2.17885 16.6054 2.5613 16.9878 3.03171 17.2275C3.56649 17.5 4.26655 17.5 5.66669 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
