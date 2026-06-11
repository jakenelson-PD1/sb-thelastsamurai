import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CodeCircle03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CodeCircle03Icon({ size = 'md', className, ...props }: CodeCircle03IconProps) {
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
      <g clipPath="url(#codecircle03-clip0_118_48512)">
<path d="M12.9167 12.4998L15.4167 9.99984L12.9167 7.49984M7.08335 7.49984L4.58335 9.99984L7.08335 12.4998M10.8334 5.83317L9.16669 14.1665M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="codecircle03-clip0_118_48512">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
