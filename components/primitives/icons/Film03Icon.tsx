import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Film03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Film03Icon({ size = 'md', className, ...props }: Film03IconProps) {
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
      <g clipPath="url(#film03-clip0_118_43713)">
<path d="M5.83335 1.6665V4.99984M5.83335 13.3332V16.6665M14.1667 3.33317V6.6665M14.1667 14.9998V18.3332M1.66669 4.99984H10M1.66669 13.3332H10M10 6.6665H18.3334M10 14.9998H18.3334M10 16.6665V2.99984C10 2.53313 10 2.29977 9.90919 2.12151C9.82927 1.96471 9.70185 1.83723 9.54502 1.75733C9.36677 1.6665 9.13344 1.6665 8.66669 1.6665H5.66669C4.26655 1.6665 3.56649 1.6665 3.03171 1.93899C2.5613 2.17867 2.17885 2.56112 1.93917 3.03153C1.66669 3.5663 1.66669 4.26637 1.66669 5.6665V12.6665C1.66669 14.0667 1.66669 14.7667 1.93917 15.3015C2.17885 15.7719 2.5613 16.1543 3.03171 16.394C3.56649 16.6665 4.26655 16.6665 5.66669 16.6665H10ZM10 3.33317H14.3334C15.7335 3.33317 16.4335 3.33317 16.9684 3.60565C17.4388 3.84534 17.8212 4.22779 18.0609 4.6982C18.3334 5.23297 18.3334 5.93304 18.3334 7.33317V14.3332C18.3334 15.7333 18.3334 16.4333 18.0609 16.9682C17.8212 17.4386 17.4388 17.821 16.9684 18.0607C16.4335 18.3332 15.7335 18.3332 14.3334 18.3332H11.3334C10.8666 18.3332 10.6333 18.3332 10.455 18.2423C10.2982 18.1624 10.1708 18.035 10.0909 17.8782C10 17.6999 10 17.4666 10 16.9998V3.33317Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="film03-clip0_118_43713">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
