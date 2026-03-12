import { clsx } from 'clsx';

export interface Umbrella02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Umbrella02Icon({ size = 20, className, ...props }: Umbrella02IconProps) {
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
      <g clipPath="url(#umbrella02-clip0_118_52331)">
<path d="M5.83335 16.167C5.83335 17.3636 6.7661 18.3337 7.91669 18.3337C9.06727 18.3337 10 17.3636 10 16.167V9.16699M10 9.16699C8.65819 9.16699 6.66669 10.0003 6.66669 10.0003C6.66669 10.0003 5.5085 9.16699 4.16669 9.16699C2.82488 9.16699 1.66669 10.0003 1.66669 10.0003C1.66669 5.39795 5.39765 1.66699 10 1.66699C14.6024 1.66699 18.3334 5.39795 18.3334 10.0003C18.3334 10.0003 17.1752 9.16699 15.8334 9.16699C14.4915 9.16699 13.3334 10.0003 13.3334 10.0003C13.3334 10.0003 11.3419 9.16699 10 9.16699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="umbrella02-clip0_118_52331">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
