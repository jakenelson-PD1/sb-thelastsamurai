import { clsx } from 'clsx';

export interface ChromeCastIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChromeCastIcon({ size = 20, className, ...props }: ChromeCastIconProps) {
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
      <path d="M1.66669 10.0417C3.35901 10.2299 4.93692 10.9883 6.14095 12.1924C7.34498 13.3964 8.10347 14.9743 8.29169 16.6667M1.66669 13.4167C2.46743 13.58 3.20247 13.9752 3.78034 14.553C4.3582 15.1308 4.75338 15.8659 4.91669 16.6667M1.66669 16.6667H1.67502M11.6667 17.5H14.3334C15.7335 17.5 16.4335 17.5 16.9684 17.2275C17.4388 16.9878 17.8212 16.6054 18.0609 16.135C18.3334 15.6002 18.3334 14.9002 18.3334 13.5V6.5C18.3334 5.09987 18.3334 4.3998 18.0609 3.86503C17.8212 3.39462 17.4388 3.01217 16.9684 2.77248C16.4335 2.5 15.7335 2.5 14.3334 2.5H5.66669C4.26655 2.5 3.56649 2.5 3.03171 2.77248C2.5613 3.01217 2.17885 3.39462 1.93917 3.86503C1.66669 4.3998 1.66669 5.09987 1.66669 6.5V6.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
