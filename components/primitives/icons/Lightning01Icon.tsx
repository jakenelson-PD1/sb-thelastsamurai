import { clsx } from 'clsx';

export interface Lightning01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Lightning01Icon({ size = 20, className, ...props }: Lightning01IconProps) {
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
      <path d="M10.8333 1.66699L3.41118 10.5736C3.12051 10.9223 2.97517 11.0967 2.97295 11.2441C2.97101 11.3721 3.02808 11.4939 3.12768 11.5744C3.24226 11.667 3.46928 11.667 3.92333 11.667H9.99998L9.16665 18.3337L16.5887 9.42708C16.8794 9.07833 17.0247 8.90391 17.027 8.75658C17.0289 8.62858 16.9719 8.50674 16.8722 8.42624C16.7576 8.33366 16.5306 8.33366 16.0766 8.33366H9.99998L10.8333 1.66699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
