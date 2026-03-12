import { clsx } from 'clsx';

export interface Percent03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Percent03Icon({ size = 20, className, ...props }: Percent03IconProps) {
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
      <g clipPath="url(#percent03-clip0_118_38401)">
<path d="M7.50002 7.50002H7.50835M12.5 12.5H12.5084M13.3334 6.66669L6.66669 13.3334M7.91669 7.50002C7.91669 7.73014 7.73014 7.91669 7.50002 7.91669C7.2699 7.91669 7.08335 7.73014 7.08335 7.50002C7.08335 7.2699 7.2699 7.08335 7.50002 7.08335C7.73014 7.08335 7.91669 7.2699 7.91669 7.50002ZM12.9167 12.5C12.9167 12.7301 12.7301 12.9167 12.5 12.9167C12.2699 12.9167 12.0834 12.7301 12.0834 12.5C12.0834 12.2699 12.2699 12.0834 12.5 12.0834C12.7301 12.0834 12.9167 12.2699 12.9167 12.5ZM18.3334 10C18.3334 14.6024 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6024 1.66669 10C1.66669 5.39765 5.39765 1.66669 10 1.66669C14.6024 1.66669 18.3334 5.39765 18.3334 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="percent03-clip0_118_38401">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
