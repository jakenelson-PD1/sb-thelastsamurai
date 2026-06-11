import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Map01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Map01Icon({ size = 'md', className, ...props }: Map01IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#map01-clip0_118_51013)">
<path d="M7.50002 15.0003L1.66669 18.3337V5.00033L7.50002 1.66699M7.50002 15.0003L13.3334 18.3337M7.50002 15.0003V1.66699M7.50002 1.66699L13.3334 5.00033M13.3334 18.3337L18.3334 15.0003V1.66699L13.3334 5.00033M13.3334 18.3337V5.00033" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="map01-clip0_118_51013">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
