import { clsx } from 'clsx';

export interface Star07IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Star07Icon({ size = 20, className, ...props }: Star07IconProps) {
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
      <g clipPath="url(#star07-clip0_118_50305)">
<path d="M18.3334 10.0003H16.6667M15.8925 15.8929L14.7139 14.7144M3.33335 10.0003H1.66669M5.28579 5.2863L4.10728 4.10779M10 3.33366V1.66699M14.7139 5.2863L15.8925 4.10779M10 18.3337V16.667M4.10728 15.8929L5.28579 14.7144M10 5.83366L11.2875 8.44199L14.1667 8.86283L12.0834 10.892L12.575 13.7587L10 12.4045L7.42502 13.7587L7.91669 10.892L5.83335 8.86283L8.71252 8.44199L10 5.83366Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="star07-clip0_118_50305">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
