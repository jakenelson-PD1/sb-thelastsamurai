import { clsx } from 'clsx';

export interface Film02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Film02Icon({ size = 20, className, ...props }: Film02IconProps) {
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
      <g clipPath="url(#film02-clip0_118_43700)">
<path d="M9.99999 18.3332V1.6665M5.83332 18.3332V14.1665M5.83332 5.83317V1.6665M14.1667 18.3332V14.1665M14.1667 5.83317V1.6665M1.66666 5.83317H18.3333M1.66666 14.1665H18.3333M18.3333 14.3332V5.6665C18.3333 4.26637 18.3333 3.5663 18.0608 3.03153C17.8212 2.56112 17.4387 2.17867 16.9683 1.93899C16.4335 1.6665 15.7335 1.6665 14.3333 1.6665H5.66666C4.26652 1.6665 3.56646 1.6665 3.03168 1.93899C2.56127 2.17867 2.17882 2.56112 1.93914 3.03153C1.66666 3.5663 1.66666 4.26637 1.66666 5.6665V14.3332C1.66666 15.7333 1.66666 16.4333 1.93914 16.9682C2.17882 17.4386 2.56127 17.821 3.03168 18.0607C3.56646 18.3332 4.26652 18.3332 5.66666 18.3332H14.3333C15.7335 18.3332 16.4335 18.3332 16.9683 18.0607C17.4387 17.821 17.8212 17.4386 18.0608 16.9682C18.3333 16.4333 18.3333 15.7333 18.3333 14.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="film02-clip0_118_43700">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
