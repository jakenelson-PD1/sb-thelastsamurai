import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Coins01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Coins01Icon({ size = 'md', className, ...props }: Coins01IconProps) {
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
      <g clipPath="url(#coins01-clip0_118_44952)">
<path d="M13.2814 13.2813C16.1336 12.8994 18.3334 10.4565 18.3334 7.49984C18.3334 4.27818 15.7217 1.6665 12.5 1.6665C9.54335 1.6665 7.10043 3.86623 6.71858 6.7184M13.3334 12.4998C13.3334 15.7215 10.7217 18.3332 7.50002 18.3332C4.27836 18.3332 1.66669 15.7215 1.66669 12.4998C1.66669 9.27817 4.27836 6.6665 7.50002 6.6665C10.7217 6.6665 13.3334 9.27817 13.3334 12.4998Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="coins01-clip0_118_44952">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
