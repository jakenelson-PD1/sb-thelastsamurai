import { clsx } from 'clsx';

export interface Disc02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Disc02Icon({ size = 20, className, ...props }: Disc02IconProps) {
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
      <g clipPath="url(#disc02-clip0_118_43636)">
<path d="M12.5 4.72786C14.4708 5.66409 15.8334 7.67284 15.8334 9.99984M6.9937 14.9998C5.29967 13.9791 4.16669 12.1218 4.16669 9.99984M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984ZM12.5 9.99984C12.5 11.3806 11.3808 12.4998 10 12.4998C8.61927 12.4998 7.50002 11.3806 7.50002 9.99984C7.50002 8.61909 8.61927 7.49984 10 7.49984C11.3808 7.49984 12.5 8.61909 12.5 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="disc02-clip0_118_43636">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
