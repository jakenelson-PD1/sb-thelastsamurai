import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FaceFrownIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FaceFrownIcon({ size = 'md', className, ...props }: FaceFrownIconProps) {
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
      <g clipPath="url(#facefrown-clip0_118_45941)">
<path d="M13.3333 13.3332C13.3333 13.3332 12.0833 11.6665 10 11.6665C7.91667 11.6665 6.66667 13.3332 6.66667 13.3332M12.5 7.49984H12.5083M7.5 7.49984H7.50834M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 10 18.3332C5.39763 18.3332 1.66667 14.6022 1.66667 9.99984C1.66667 5.39746 5.39763 1.6665 10 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984ZM12.9167 7.49984C12.9167 7.72995 12.7301 7.9165 12.5 7.9165C12.2699 7.9165 12.0833 7.72995 12.0833 7.49984C12.0833 7.26972 12.2699 7.08317 12.5 7.08317C12.7301 7.08317 12.9167 7.26972 12.9167 7.49984ZM7.91667 7.49984C7.91667 7.72995 7.73012 7.9165 7.5 7.9165C7.26989 7.9165 7.08334 7.72995 7.08334 7.49984C7.08334 7.26972 7.26989 7.08317 7.5 7.08317C7.73012 7.08317 7.91667 7.26972 7.91667 7.49984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="facefrown-clip0_118_45941">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
