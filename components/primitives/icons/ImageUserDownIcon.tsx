import { clsx } from 'clsx';

export interface ImageUserDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ImageUserDownIcon({ size = 20, className, ...props }: ImageUserDownIconProps) {
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
      <g clipPath="url(#imageuserdown-clip0_118_50642)">
<path d="M13.3334 4.16699L15.8334 6.66699M15.8334 6.66699L18.3334 4.16699M15.8334 6.66699V1.66699M18.3334 10.0003V14.3337C18.3334 15.7338 18.3334 16.4338 18.0609 16.9687C17.8212 17.4391 17.4388 17.8215 16.9684 18.0612C16.4335 18.3337 15.7335 18.3337 14.3334 18.3337H5.66669C4.26655 18.3337 3.56649 18.3337 3.03171 18.0612C2.5613 17.8215 2.17885 17.4391 1.93917 16.9687C1.66669 16.4338 1.66669 15.7338 1.66669 14.3337V5.66699C1.66669 4.26686 1.66669 3.56679 1.93917 3.03202C2.17885 2.56161 2.5613 2.17916 3.03171 1.93948C3.56649 1.66699 4.26655 1.66699 5.66669 1.66699H10M1.78814 16.6056C2.17909 15.1992 3.46902 14.167 5.00002 14.167H10.8334C11.6078 14.167 11.995 14.167 12.317 14.2311C13.6393 14.4941 14.6729 15.5277 14.9359 16.85C15 17.172 15 17.5592 15 18.3337M11.6667 7.91699C11.6667 9.75791 10.1743 11.2503 8.33335 11.2503C6.4924 11.2503 5.00002 9.75791 5.00002 7.91699C5.00002 6.07604 6.4924 4.58366 8.33335 4.58366C10.1743 4.58366 11.6667 6.07604 11.6667 7.91699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="imageuserdown-clip0_118_50642">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
