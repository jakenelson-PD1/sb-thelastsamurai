import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Snowflake02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Snowflake02Icon({ size = 'md', className, ...props }: Snowflake02IconProps) {
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
      <g clipPath="url(#snowflake02-clip0_118_52111)">
<path d="M10 6.66699V13.3337M10 6.66699V1.66699M10 6.66699L5.83335 2.50033M10 6.66699L14.1667 2.50033M10 13.3337V18.3337M10 13.3337L5.83335 17.5003M10 13.3337L14.1667 17.5003M13.3334 10.0003H6.66669M13.3334 10.0003H18.3334M13.3334 10.0003L17.5 5.83366M13.3334 10.0003L17.5 14.167M6.66669 10.0003H1.66669M6.66669 10.0003L2.50002 5.83366M6.66669 10.0003L2.50002 14.167" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="snowflake02-clip0_118_52111">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
