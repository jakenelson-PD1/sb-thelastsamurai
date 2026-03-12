import { clsx } from 'clsx';

export interface CheckVerified01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CheckVerified01Icon({ size = 20, className, ...props }: CheckVerified01IconProps) {
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
      <g clipPath="url(#checkverified01-clip0_118_37063)">
<path d="M7.50002 9.99999L9.16669 11.6667L12.9167 7.91666M6.1115 3.18224C6.78135 3.12878 7.41728 2.86537 7.92875 2.42951C9.12227 1.41237 10.8778 1.41237 12.0713 2.42951C12.5828 2.86537 13.2187 3.12878 13.8885 3.18224C15.4518 3.30698 16.693 4.54827 16.8178 6.11146C16.8713 6.78132 17.1346 7.41725 17.5705 7.92871C18.5876 9.12224 18.5876 10.8777 17.5705 12.0712C17.1346 12.5827 16.8713 13.2187 16.8178 13.8885C16.693 15.4517 15.4518 16.693 13.8885 16.8177C13.2187 16.8712 12.5828 17.1346 12.0713 17.5705C10.8778 18.5876 9.12227 18.5876 7.92875 17.5705C7.41728 17.1346 6.78135 16.8712 6.1115 16.8177C4.5483 16.693 3.30701 15.4517 3.18227 13.8885C3.12881 13.2187 2.8654 12.5827 2.42954 12.0712C1.4124 10.8777 1.4124 9.12224 2.42954 7.92871C2.8654 7.41725 3.12881 6.78132 3.18227 6.11146C3.30701 4.54827 4.5483 3.30698 6.1115 3.18224Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="checkverified01-clip0_118_37063">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
