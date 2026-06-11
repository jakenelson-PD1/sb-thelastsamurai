import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Image02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Image02Icon({ size = 'md', className, ...props }: Image02IconProps) {
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
      <g clipPath="url(#image02-clip0_118_50480)">
<path d="M4.99964 16.6673L12.3905 9.27649C12.7205 8.94649 12.8856 8.78141 13.0758 8.71966C13.2432 8.66524 13.4235 8.66524 13.5908 8.71966C13.7811 8.78141 13.9462 8.94649 14.2762 9.27649L17.8377 12.8381M8.74999 7.08366C8.74999 8.00413 8.0038 8.75033 7.08332 8.75033C6.16285 8.75033 5.41666 8.00413 5.41666 7.08366C5.41666 6.16318 6.16285 5.41699 7.08332 5.41699C8.0038 5.41699 8.74999 6.16318 8.74999 7.08366ZM18.3333 10.0003C18.3333 14.6027 14.6023 18.3337 9.99999 18.3337C5.39761 18.3337 1.66666 14.6027 1.66666 10.0003C1.66666 5.39795 5.39761 1.66699 9.99999 1.66699C14.6023 1.66699 18.3333 5.39795 18.3333 10.0003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="image02-clip0_118_50480">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
