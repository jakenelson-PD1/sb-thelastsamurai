import { clsx } from 'clsx';

export interface Tv02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Tv02Icon({ size = 20, className, ...props }: Tv02IconProps) {
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
      <path d="M14.1667 17.5L10 14.1667L5.83335 17.5M5.66669 14.1667H14.3334C15.7335 14.1667 16.4335 14.1667 16.9684 13.8942C17.4388 13.6545 17.8212 13.2721 18.0609 12.8017C18.3334 12.2668 18.3334 11.5668 18.3334 10.1667V6.5C18.3334 5.09987 18.3334 4.3998 18.0609 3.86503C17.8212 3.39462 17.4388 3.01217 16.9684 2.77248C16.4335 2.5 15.7335 2.5 14.3334 2.5H5.66669C4.26655 2.5 3.56649 2.5 3.03171 2.77248C2.5613 3.01217 2.17885 3.39462 1.93917 3.86503C1.66669 4.3998 1.66669 5.09987 1.66669 6.5V10.1667C1.66669 11.5668 1.66669 12.2668 1.93917 12.8017C2.17885 13.2721 2.5613 13.6545 3.03171 13.8942C3.56649 14.1667 4.26655 14.1667 5.66669 14.1667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
