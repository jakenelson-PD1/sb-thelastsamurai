import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Rocket01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Rocket01Icon({ size = 'md', className, ...props }: Rocket01IconProps) {
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
      <g clipPath="url(#rocket01-clip0_118_51213)">
<path d="M10.833 9.16683L2.91636 17.0835M11.6817 2.9489C12.6967 3.6224 13.6723 4.41642 14.584 5.32808C15.5035 6.2476 16.3033 7.23217 16.9806 8.25663M7.71216 6.58029L5.31644 5.78171C5.04054 5.68975 4.73665 5.74827 4.51463 5.93613L2.13367 7.95079C1.64623 8.36325 1.78471 9.14816 2.38386 9.36891L4.63986 10.2001M9.73392 15.2939L10.5651 17.5499C10.7858 18.1491 11.5707 18.2876 11.9832 17.8002L13.9978 15.4192C14.1857 15.1972 14.2442 14.8932 14.1522 14.6173L13.3537 12.2217M16.1235 1.89244L12.0348 2.5739C11.5932 2.64748 11.1883 2.86449 10.8826 3.19135L5.37166 9.08233C3.94321 10.6092 3.98294 12.9939 5.46148 14.4725C6.94002 15.951 9.32467 15.9907 10.8517 14.5622L16.7426 9.05141C17.0695 8.74558 17.2865 8.34066 17.3601 7.89915L18.0415 3.81043C18.2295 2.6824 17.2516 1.70444 16.1235 1.89244Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="rocket01-clip0_118_51213">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
