import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Gift02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Gift02Icon({ size = 'md', className, ...props }: Gift02IconProps) {
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
      <g clipPath="url(#gift02-clip0_118_45589)">
<path d="M10 5.83317H6.25002C5.69749 5.83317 5.16758 5.61368 4.77688 5.22298C4.38618 4.83228 4.16669 4.30237 4.16669 3.74984C4.16669 3.1973 4.38618 2.6674 4.77688 2.2767C5.16758 1.886 5.69749 1.6665 6.25002 1.6665C9.16669 1.6665 10 5.83317 10 5.83317ZM10 5.83317H13.75C14.3025 5.83317 14.8324 5.61368 15.2232 5.22298C15.6139 4.83228 15.8334 4.30237 15.8334 3.74984C15.8334 3.1973 15.6139 2.6674 15.2232 2.2767C14.8324 1.886 14.3025 1.6665 13.75 1.6665C10.8334 1.6665 10 5.83317 10 5.83317ZM10 5.83317V18.3332M1.66669 11.6665H18.3334M1.66669 8.49984V15.6665C1.66669 16.5999 1.66669 17.0667 1.84835 17.4232C2.00813 17.7368 2.2631 17.9918 2.5767 18.1515C2.93322 18.3332 3.39993 18.3332 4.33335 18.3332H15.6667C16.6001 18.3332 17.0669 18.3332 17.4234 18.1515C17.7369 17.9918 17.9919 17.7368 18.1517 17.4232C18.3334 17.0667 18.3334 16.5999 18.3334 15.6665V8.49984C18.3334 7.56642 18.3334 7.0997 18.1517 6.74319C17.9919 6.42959 17.7369 6.17462 17.4234 6.01483C17.0669 5.83317 16.6001 5.83317 15.6667 5.83317H4.33335C3.39994 5.83317 2.93322 5.83317 2.5767 6.01483C2.2631 6.17461 2.00813 6.42958 1.84835 6.74319C1.66669 7.0997 1.66669 7.56641 1.66669 8.49984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="gift02-clip0_118_45589">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
