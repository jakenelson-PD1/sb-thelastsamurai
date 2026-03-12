import { clsx } from 'clsx';

export interface Camera03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Camera03Icon({ size = 20, className, ...props }: Camera03IconProps) {
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
      <path d="M1.66666 6.5C1.66666 5.09987 1.66666 4.3998 1.93914 3.86503C2.17882 3.39462 2.56127 3.01217 3.03168 2.77248C3.56646 2.5 4.26652 2.5 5.66666 2.5H14.3333C15.7335 2.5 16.4335 2.5 16.9683 2.77248C17.4387 3.01217 17.8212 3.39462 18.0608 3.86503C18.3333 4.3998 18.3333 5.09987 18.3333 6.5V13.5C18.3333 14.9002 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66666C4.26652 17.5 3.56646 17.5 3.03168 17.2275C2.56127 16.9878 2.17882 16.6054 1.93914 16.135C1.66666 15.6002 1.66666 14.9002 1.66666 13.5V6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99999 13.3337C11.8409 13.3337 13.3333 11.8412 13.3333 10.0003C13.3333 8.15938 11.8409 6.66699 9.99999 6.66699C8.15904 6.66699 6.66666 8.15938 6.66666 10.0003C6.66666 11.8412 8.15904 13.3337 9.99999 13.3337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
