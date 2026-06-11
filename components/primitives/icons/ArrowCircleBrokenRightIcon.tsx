import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleBrokenRightIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenRightIcon({ size = 'md', className, ...props }: ArrowCircleBrokenRightIconProps) {
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
      <g clipPath="url(#arrowcirclebrokenright-clip0_118_39451)">
<path d="M2.78157 5.83329C4.22245 3.34245 6.91555 1.66663 10.0001 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10.0001 18.3333C6.91555 18.3333 4.22245 16.6575 2.78157 14.1666M10 13.3333L13.3333 9.99996M13.3333 9.99996L10 6.66663M13.3333 9.99996H1.66666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokenright-clip0_118_39451">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
