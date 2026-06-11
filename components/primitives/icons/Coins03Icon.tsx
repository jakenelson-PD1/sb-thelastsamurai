import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Coins03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Coins03Icon({ size = 'md', className, ...props }: Coins03IconProps) {
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
      <g clipPath="url(#coins03-clip0_118_44978)">
<path d="M8.41752 3.33317C9.46969 2.30218 10.9106 1.6665 12.5 1.6665C15.7217 1.6665 18.3334 4.27818 18.3334 7.49984C18.3334 9.08925 17.6977 10.5303 16.6666 11.5823M13.3334 12.4998C13.3334 15.7215 10.7217 18.3332 7.50002 18.3332C4.27836 18.3332 1.66669 15.7215 1.66669 12.4998C1.66669 9.27817 4.27836 6.6665 7.50002 6.6665C10.7217 6.6665 13.3334 9.27817 13.3334 12.4998Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="coins03-clip0_118_44978">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
