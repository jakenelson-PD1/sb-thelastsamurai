import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleBrokenLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenLeftIcon({ size = 'md', className, ...props }: ArrowCircleBrokenLeftIconProps) {
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
      <g clipPath="url(#arrowcirclebrokenleft-clip0_118_39438)">
<path d="M17.2184 14.1666C15.7775 16.6575 13.0844 18.3333 9.99991 18.3333C5.39752 18.3333 1.66656 14.6023 1.66656 9.99996C1.66656 5.39758 5.39752 1.66663 9.99991 1.66663C13.0844 1.66663 15.7775 3.34245 17.2184 5.83329M9.99991 6.66663L6.66662 9.99996M6.66662 9.99996L9.99991 13.3333M6.66662 9.99996H18.3332" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokenleft-clip0_118_39438">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
