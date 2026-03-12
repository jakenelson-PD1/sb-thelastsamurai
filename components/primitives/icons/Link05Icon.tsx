import { clsx } from 'clsx';

export interface Link05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Link05Icon({ size = 20, className, ...props }: Link05IconProps) {
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
      <path d="M7.5 14.1667H5.83333C3.53215 14.1667 1.66666 12.3012 1.66666 10C1.66666 7.69886 3.53215 5.83337 5.83333 5.83337H7.5M6.66666 10H15M13.1482 14.1667H14.1667C16.4678 14.1667 18.3333 12.3012 18.3333 10C18.3333 7.69886 16.4678 5.83337 14.1667 5.83337H13.1482C12.7902 5.83337 12.5 6.12356 12.5 6.48152V13.5185C12.5 13.8765 12.7902 14.1667 13.1482 14.1667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
