import { clsx } from 'clsx';

export interface Headphones01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Headphones01Icon({ size = 20, className, ...props }: Headphones01IconProps) {
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
      <path d="M17.5 15V10C17.5 5.85787 14.1422 2.5 10 2.5C5.85787 2.5 2.5 5.85787 2.5 10V15M4.58333 17.5C3.43274 17.5 2.5 16.5672 2.5 15.4167V13.75C2.5 12.5994 3.43274 11.6667 4.58333 11.6667C5.73392 11.6667 6.66667 12.5994 6.66667 13.75V15.4167C6.66667 16.5672 5.73392 17.5 4.58333 17.5ZM15.4167 17.5C14.2661 17.5 13.3333 16.5672 13.3333 15.4167V13.75C13.3333 12.5994 14.2661 11.6667 15.4167 11.6667C16.5672 11.6667 17.5 12.5994 17.5 13.75V15.4167C17.5 16.5672 16.5672 17.5 15.4167 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
