import { clsx } from 'clsx';

export interface Upload03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Upload03Icon({ size = 20, className, ...props }: Upload03IconProps) {
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
      <g clipPath="url(#upload03-clip0_118_37831)">
<path d="M13.3333 10L9.99999 6.66669M9.99999 6.66669L6.66666 10M9.99999 6.66669V13.3334M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99999 18.3334C5.39761 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39761 1.66669 9.99999 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="upload03-clip0_118_37831">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
