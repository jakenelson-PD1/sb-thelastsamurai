import { clsx } from 'clsx';

export interface LogOut04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LogOut04Icon({ size = 20, className, ...props }: LogOut04IconProps) {
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
      <path d="M15 6.66667L18.3334 10M18.3334 10L15 13.3333M18.3334 10H7.50002M12.5 3.50337C11.4377 2.86523 10.2044 2.5 8.88894 2.5C4.90019 2.5 1.66669 5.85787 1.66669 10C1.66669 14.1422 4.90019 17.5 8.88894 17.5C10.2044 17.5 11.4377 17.1347 12.5 16.4967" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
