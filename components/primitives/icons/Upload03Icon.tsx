import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Upload03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Upload03Icon({ size = 'md', className, ...props }: Upload03IconProps) {
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
      <g clipPath="url(#upload03-clip0_118_37831)">
<path d="M13.3333 10L9.99999 6.66669M9.99999 6.66669L6.66666 10M9.99999 6.66669V13.3334M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99999 18.3334C5.39761 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39761 1.66669 9.99999 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="upload03-clip0_118_37831">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
