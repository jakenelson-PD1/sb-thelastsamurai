import { clsx } from 'clsx';

export interface ImageUserUpIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ImageUserUpIcon({ size = 20, className, ...props }: ImageUserUpIconProps) {
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
      <g clipPath="url(#imageuserup-clip0_118_50694)">
<path d="M13.3333 4.16699L15.8333 1.66699M15.8333 1.66699L18.3333 4.16699M15.8333 1.66699V6.66699M18.3333 10.0003V14.3337C18.3333 15.7338 18.3333 16.4338 18.0608 16.9687C17.8212 17.4391 17.4387 17.8215 16.9683 18.0612C16.4335 18.3337 15.7335 18.3337 14.3333 18.3337H5.66666C4.26652 18.3337 3.56646 18.3337 3.03168 18.0612C2.56127 17.8215 2.17882 17.4391 1.93914 16.9687C1.66666 16.4338 1.66666 15.7338 1.66666 14.3337V5.66699C1.66666 4.26686 1.66666 3.56679 1.93914 3.03202C2.17882 2.56161 2.56127 2.17916 3.03168 1.93948C3.56646 1.66699 4.26652 1.66699 5.66666 1.66699H9.99999M1.78791 16.6056C2.17886 15.1992 3.46879 14.167 4.9998 14.167H10.8332C11.6076 14.167 11.9947 14.167 12.3167 14.2311C13.6391 14.4941 14.6727 15.5277 14.9357 16.85C14.9998 17.172 14.9998 17.5592 14.9998 18.3337M11.6667 7.91699C11.6667 9.75791 10.1742 11.2503 8.33332 11.2503C6.49237 11.2503 4.99999 9.75791 4.99999 7.91699C4.99999 6.07604 6.49237 4.58366 8.33332 4.58366C10.1742 4.58366 11.6667 6.07604 11.6667 7.91699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="imageuserup-clip0_118_50694">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
