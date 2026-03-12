import { clsx } from 'clsx';

export interface MarkerPin06IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MarkerPin06Icon({ size = 20, className, ...props }: MarkerPin06IconProps) {
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
      <path d="M13.3334 11.1453C16.2765 11.724 18.3334 13.0456 18.3334 14.5833C18.3334 16.6544 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 16.6544 1.66669 14.5833C1.66669 13.0456 3.72351 11.724 6.66669 11.1453M10 14.1667V7.5M10 7.5C11.3808 7.5 12.5 6.38071 12.5 5C12.5 3.61929 11.3808 2.5 10 2.5C8.61927 2.5 7.50002 3.61929 7.50002 5C7.50002 6.38071 8.61927 7.5 10 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
