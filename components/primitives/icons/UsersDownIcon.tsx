import { clsx } from 'clsx';

export interface UsersDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function UsersDownIcon({ size = 20, className, ...props }: UsersDownIconProps) {
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
      <path d="M13.3333 15L15.8333 17.5M15.8333 17.5L18.3333 15M15.8333 17.5V12.5M12.9167 2.7423C14.1383 3.23679 15 4.43442 15 5.83333C15 7.23224 14.1383 8.42992 12.9167 8.92433M10 12.5H6.66667C5.11353 12.5 4.33696 12.5 3.7244 12.7537C2.90763 13.0921 2.25872 13.741 1.92041 14.5577C1.66667 15.1703 1.66667 15.9468 1.66667 17.5M11.25 5.83333C11.25 7.67428 9.75759 9.16667 7.91667 9.16667C6.07572 9.16667 4.58334 7.67428 4.58334 5.83333C4.58334 3.99238 6.07572 2.5 7.91667 2.5C9.75759 2.5 11.25 3.99238 11.25 5.83333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
