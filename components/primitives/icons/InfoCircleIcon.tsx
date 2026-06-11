import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface InfoCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function InfoCircleIcon({ size = 'md', className, ...props }: InfoCircleIconProps) {
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
      <g clipPath="url(#infocircle-clip0_118_39203)">
<path d="M10 13.3333V9.99996M10 6.66663H10.0084M18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99996C1.66669 5.39758 5.39765 1.66663 10 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="infocircle-clip0_118_39203">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
