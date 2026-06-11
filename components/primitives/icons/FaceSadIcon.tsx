import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FaceSadIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FaceSadIcon({ size = 'md', className, ...props }: FaceSadIconProps) {
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
      <g clipPath="url(#facesad-clip0_118_45980)">
<path d="M13.3334 13.3332C13.3334 13.3332 12.0834 11.6665 10 11.6665C7.91669 11.6665 6.66669 13.3332 6.66669 13.3332M14.1667 7.69984C13.8375 8.104 13.3875 8.33317 12.9167 8.33317C12.4459 8.33317 12.0084 8.104 11.6667 7.69984M8.33335 7.69984C8.00419 8.104 7.55419 8.33317 7.08335 8.33317C6.61252 8.33317 6.17502 8.104 5.83335 7.69984M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="facesad-clip0_118_45980">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
