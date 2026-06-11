import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleRightIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleRightIcon({ size = 'md', className, ...props }: ArrowCircleRightIconProps) {
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
      <g clipPath="url(#arrowcircleright-clip0_118_39555)">
<path d="M10 13.3333L13.3333 9.99996M13.3333 9.99996L10 6.66663M13.3333 9.99996H6.66666M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39758 5.39762 1.66663 10 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcircleright-clip0_118_39555">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
