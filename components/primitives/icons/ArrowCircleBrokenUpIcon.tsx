import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleBrokenUpIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenUpIcon({ size = 'md', className, ...props }: ArrowCircleBrokenUpIconProps) {
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
      <g clipPath="url(#arrowcirclebrokenup-clip0_118_39464)">
<path d="M5.83334 17.2185C3.3425 15.7776 1.66667 13.0845 1.66667 9.99998C1.66667 5.39758 5.39763 1.66663 10 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99998C18.3333 13.0845 16.6575 15.7776 14.1667 17.2185M13.3333 9.99998L10 6.66668M10 6.66668L6.66667 9.99998M10 6.66668V18.3333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokenup-clip0_118_39464">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
