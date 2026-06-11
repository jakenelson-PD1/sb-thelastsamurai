import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CircleCutIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CircleCutIcon({ size = 'md', className, ...props }: CircleCutIconProps) {
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
      <g clipPath="url(#circlecut-clip0_118_41512)">
<path d="M5.83335 17.2186C8.3242 15.7777 10 13.0846 10 10.0001C10 6.91557 8.3242 4.22247 5.83335 2.7816M18.3334 10.0001C18.3334 14.6024 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6024 1.66669 10.0001C1.66669 5.39771 5.39765 1.66675 10 1.66675C14.6024 1.66675 18.3334 5.39771 18.3334 10.0001Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="circlecut-clip0_118_41512">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
