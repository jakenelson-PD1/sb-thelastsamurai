import { clsx } from 'clsx';

export interface Target05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Target05Icon({ size = 20, className, ...props }: Target05IconProps) {
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
      <g clipPath="url(#target05-clip0_118_37595)">
<path d="M10 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6023 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23857 12.7614 5 10 5C7.23857 5 5 7.23857 5 10C5 12.7614 7.23857 15 10 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07954 10.9205 8.33337 10 8.33337C9.07951 8.33337 8.33334 9.07954 8.33334 10C8.33334 10.9205 9.07951 11.6667 10 11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="target05-clip0_118_37595">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
