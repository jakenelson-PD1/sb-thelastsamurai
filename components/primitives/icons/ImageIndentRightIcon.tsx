import { clsx } from 'clsx';

export interface ImageIndentRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ImageIndentRightIcon({ size = 20, className, ...props }: ImageIndentRightIconProps) {
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
      <path d="M17.5 3.33325H2.5M17.5 16.6666H2.5M7.5 7.70825H2.5M7.5 12.2916H2.5M12.1667 13.3333H16.1667C16.6334 13.3333 16.8668 13.3333 17.045 13.2424C17.2018 13.1625 17.3293 13.0351 17.4092 12.8783C17.5 12.7 17.5 12.4667 17.5 11.9999V7.99992C17.5 7.53321 17.5 7.29985 17.4092 7.12159C17.3293 6.96479 17.2018 6.83731 17.045 6.75741C16.8668 6.66658 16.6334 6.66659 16.1667 6.66659H12.1667C11.6999 6.66659 11.4666 6.66658 11.2883 6.75741C11.1315 6.83731 11.0041 6.96479 10.9242 7.12159C10.8333 7.29985 10.8333 7.53321 10.8333 7.99992V11.9999C10.8333 12.4667 10.8333 12.7 10.9242 12.8783C11.0041 13.0351 11.1315 13.1625 11.2883 13.2424C11.4666 13.3333 11.6999 13.3333 12.1667 13.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
