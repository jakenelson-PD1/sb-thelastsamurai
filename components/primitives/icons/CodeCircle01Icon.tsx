import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CodeCircle01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CodeCircle01Icon({ size = 'md', className, ...props }: CodeCircle01IconProps) {
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
      <g clipPath="url(#codecircle01-clip0_118_48486)">
<path d="M12.0833 12.4998L14.5833 9.99984L12.0833 7.49984M7.91666 7.49984L5.41666 9.99984L7.91666 12.4998M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 9.99999 18.3332C5.39761 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39761 1.6665 9.99999 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="codecircle01-clip0_118_48486">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
