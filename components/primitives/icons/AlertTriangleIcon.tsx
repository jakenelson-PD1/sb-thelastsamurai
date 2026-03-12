import { clsx } from 'clsx';

export interface AlertTriangleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlertTriangleIcon({ size = 20, className, ...props }: AlertTriangleIconProps) {
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
      <path d="M9.99986 7.50019V10.8335M9.99986 14.1669H10.0082M8.84594 3.24329L1.99185 15.0821C1.61167 15.7388 1.42159 16.0671 1.44968 16.3366C1.47419 16.5716 1.59733 16.7852 1.78846 16.9242C2.00759 17.0835 2.38698 17.0835 3.14575 17.0835H16.8539C17.6127 17.0835 17.992 17.0835 18.2112 16.9242C18.4023 16.7852 18.5254 16.5716 18.5499 16.3366C18.578 16.0671 18.3879 15.7388 18.0078 15.0821L11.1537 3.24329C10.7749 2.58898 10.5855 2.26183 10.3384 2.15196C10.1229 2.05612 9.87677 2.05612 9.66127 2.15196C9.41411 2.26183 9.22469 2.58899 8.84594 3.24329Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
