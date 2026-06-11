import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface IntersectCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function IntersectCircleIcon({ size = 'md', className, ...props }: IntersectCircleIconProps) {
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
      <g clipPath="url(#intersectcircle-clip0_118_47294)">
<path d="M7.50001 13.3332C10.7217 13.3332 13.3333 10.7215 13.3333 7.49984C13.3333 4.27818 10.7217 1.6665 7.50001 1.6665C4.27835 1.6665 1.66667 4.27818 1.66667 7.49984C1.66667 10.7215 4.27835 13.3332 7.50001 13.3332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 18.3332C15.7217 18.3332 18.3333 15.7215 18.3333 12.4998C18.3333 9.27817 15.7217 6.6665 12.5 6.6665C9.27834 6.6665 6.66667 9.27817 6.66667 12.4998C6.66667 15.7215 9.27834 18.3332 12.5 18.3332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="intersectcircle-clip0_118_47294">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
