import { clsx } from 'clsx';

export interface UploadCloud01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function UploadCloud01Icon({ size = 20, className, ...props }: UploadCloud01IconProps) {
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
      <path d="M10.7796 11.0153C10.6685 11.0213 10.5571 11.0434 10.4505 11.0876C10.2623 11.1655 10.107 11.297 9.99933 11.4597C9.89163 11.2973 9.73709 11.1654 9.54913 11.0876C9.44223 11.0433 9.33049 11.0212 9.21906 11.0153L9.99933 10.235L10.7796 11.0153Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
