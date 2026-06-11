import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Snowflake01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Snowflake01Icon({ size = 'md', className, ...props }: Snowflake01IconProps) {
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
      <g clipPath="url(#snowflake01-clip0_118_52098)">
<path d="M15.0518 7.08366L4.94815 12.917M15.0518 7.08366L15.9668 3.66859M15.0518 7.08366L18.4668 7.99873M4.94815 12.917L1.53308 12.0019M4.94815 12.917L4.03308 16.3321M15.0517 12.9169L4.94807 7.08354M15.0517 12.9169L18.4668 12.0018M15.0517 12.9169L15.9668 16.332M4.94807 7.08354L4.0332 3.66868M4.94807 7.08354L1.5332 7.99882M9.99998 4.16699V15.8337M9.99998 4.16699L7.49996 1.66699M9.99998 4.16699L12.5 1.66699M9.99998 15.8337L7.49996 18.3337M9.99998 15.8337L12.5 18.3337" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="snowflake01-clip0_118_52098">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
