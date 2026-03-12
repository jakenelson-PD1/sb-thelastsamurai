import { clsx } from 'clsx';

export interface Users03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Users03Icon({ size = 20, className, ...props }: Users03IconProps) {
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
      <path d="M15 13.1974C16.2133 13.8069 17.2534 14.785 18.0127 16.008C18.163 16.2503 18.2382 16.3713 18.2642 16.539C18.317 16.8798 18.084 17.2988 17.7666 17.4337C17.6104 17.5 17.4347 17.5 17.0833 17.5M13.3333 9.61017C14.5681 8.99658 15.4167 7.72238 15.4167 6.25C15.4167 4.77762 14.5681 3.50343 13.3333 2.8898M11.6667 6.25C11.6667 8.32107 9.98767 10 7.91664 10C5.84557 10 4.16664 8.32107 4.16664 6.25C4.16664 4.17893 5.84557 2.5 7.91664 2.5C9.98767 2.5 11.6667 4.17893 11.6667 6.25ZM2.13267 15.7819C3.46126 13.7872 5.55778 12.5 7.91664 12.5C10.2755 12.5 12.372 13.7872 13.7006 15.7819C13.9917 16.219 14.1372 16.4375 14.1204 16.7166C14.1074 16.9339 13.9649 17.2 13.7913 17.3313C13.5683 17.5 13.2615 17.5 12.648 17.5H3.18527C2.57178 17.5 2.26504 17.5 2.04201 17.3313C1.86835 17.2 1.72588 16.9339 1.71283 16.7166C1.69608 16.4375 1.84161 16.219 2.13267 15.7819Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
