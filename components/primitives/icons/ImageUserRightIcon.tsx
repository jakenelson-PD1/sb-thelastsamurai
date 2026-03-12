import { clsx } from 'clsx';

export interface ImageUserRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ImageUserRightIcon({ size = 20, className, ...props }: ImageUserRightIconProps) {
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
      <g clipPath="url(#imageuserright-clip0_118_50681)">
<path d="M15.8333 6.66699L18.3333 4.16699M18.3333 4.16699L15.8333 1.66699M18.3333 4.16699H13.3333M18.3333 10.0003V14.3337C18.3333 15.7338 18.3333 16.4338 18.0608 16.9687C17.8212 17.4391 17.4388 17.8215 16.9683 18.0612C16.4335 18.3337 15.7335 18.3337 14.3333 18.3337H5.66667C4.26654 18.3337 3.56647 18.3337 3.0317 18.0612C2.56129 17.8215 2.17884 17.4391 1.93916 16.9687C1.66667 16.4338 1.66667 15.7338 1.66667 14.3337V5.66699C1.66667 4.26686 1.66667 3.56679 1.93916 3.03202C2.17884 2.56161 2.56129 2.17916 3.0317 1.93948C3.56647 1.66699 4.26654 1.66699 5.66667 1.66699H10M1.78793 16.6056C2.17888 15.1992 3.46881 14.167 4.99981 14.167H10.8332C11.6076 14.167 11.9948 14.167 12.3168 14.2311C13.6391 14.4941 14.6728 15.5277 14.9358 16.85C14.9998 17.172 14.9998 17.5592 14.9998 18.3337M11.6667 7.91699C11.6667 9.75791 10.1743 11.2503 8.33334 11.2503C6.49239 11.2503 5.00001 9.75791 5.00001 7.91699C5.00001 6.07604 6.49239 4.58366 8.33334 4.58366C10.1743 4.58366 11.6667 6.07604 11.6667 7.91699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="imageuserright-clip0_118_50681">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
