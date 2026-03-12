import { clsx } from 'clsx';

export interface Building03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Building03Icon({ size = 20, className, ...props }: Building03IconProps) {
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
      <path d="M6.25002 5.83333H8.54169M6.25002 9.16667H8.54169M6.25002 12.5H8.54169M11.4584 5.83333H13.75M11.4584 9.16667H13.75M11.4584 12.5H13.75M16.6667 17.5V5.16667C16.6667 4.23325 16.6667 3.76653 16.485 3.41002C16.3253 3.09641 16.0703 2.84144 15.7567 2.68166C15.4002 2.5 14.9334 2.5 14 2.5H6.00002C5.0666 2.5 4.59989 2.5 4.24337 2.68166C3.92976 2.84144 3.6748 3.09641 3.51501 3.41002C3.33335 3.76653 3.33335 4.23325 3.33335 5.16667V17.5M18.3334 17.5H1.66669" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
