import { clsx } from 'clsx';

export interface Certificate01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Certificate01Icon({ size = 20, className, ...props }: Certificate01IconProps) {
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
      <path d="M5.41667 16.667H4.16667C3.24619 16.667 2.5 15.9208 2.5 15.0003V3.33366C2.5 2.41318 3.24619 1.66699 4.16667 1.66699H15.8333C16.7538 1.66699 17.5 2.41318 17.5 3.33366V15.0003C17.5 15.9208 16.7538 16.667 15.8333 16.667H14.5833M10 15.8337C11.3807 15.8337 12.5 14.7144 12.5 13.3337C12.5 11.9529 11.3807 10.8337 10 10.8337C8.61925 10.8337 7.5 11.9529 7.5 13.3337C7.5 14.7144 8.61925 15.8337 10 15.8337ZM10 15.8337L10.0178 15.8335L7.35722 18.4942L5.0002 16.1371L7.51638 13.6209M10 15.8337L12.6607 18.4942L15.0177 16.1371L12.5015 13.6209M7.5 5.00033H12.5M5.83333 7.91699H14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
