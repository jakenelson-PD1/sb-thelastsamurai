import { clsx } from 'clsx';

export interface TriangleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function TriangleIcon({ size = 20, className, ...props }: TriangleIconProps) {
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
      <path d="M1.99182 15.0821L8.84592 3.24329C9.22467 2.58899 9.41408 2.26183 9.66125 2.15196C9.87675 2.05612 10.1228 2.05612 10.3384 2.15196C10.5855 2.26183 10.7749 2.58898 11.1537 3.24329L18.0078 15.0821C18.3879 15.7388 18.578 16.0671 18.5499 16.3366C18.5254 16.5716 18.4022 16.7852 18.2112 16.9242C17.992 17.0835 17.6127 17.0835 16.8538 17.0835H3.14572C2.38696 17.0835 2.00757 17.0835 1.78844 16.9242C1.59731 16.7852 1.47417 16.5716 1.44966 16.3366C1.42157 16.0671 1.61165 15.7388 1.99182 15.0821Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
