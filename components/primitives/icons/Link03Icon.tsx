import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Link03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Link03Icon({ size = 'md', className, ...props }: Link03IconProps) {
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
      <g clipPath="url(#link03-clip0_118_39307)">
<path d="M8.33332 10.8334C8.69116 11.3118 9.14774 11.7076 9.67208 11.9941C10.1964 12.2806 10.7762 12.451 11.3722 12.4936C11.9682 12.5363 12.5663 12.4503 13.1261 12.2415C13.6859 12.0327 14.1942 11.7059 14.6167 11.2834L17.1167 8.78337C17.8757 7.99749 18.2956 6.94499 18.2862 5.8525C18.2767 4.76002 17.8384 3.71496 17.0659 2.94243C16.2933 2.1699 15.2483 1.7317 14.1558 1.7222C13.0633 1.7127 12.0108 2.13269 11.225 2.89168L9.79166 4.31668M11.6667 9.1667C11.3087 8.6882 10.8522 8.29235 10.3278 8.00589C9.80349 7.71943 9.22374 7.54908 8.62774 7.5064C8.03182 7.46371 7.43366 7.5497 6.87386 7.75852C6.31406 7.96734 5.80572 8.29412 5.38332 8.7167L2.88332 11.2167C2.12433 12.0025 1.70434 13.055 1.71384 14.1475C1.72333 15.24 2.16153 16.285 2.93407 17.0576C3.7066 17.8301 4.75166 18.2683 5.84414 18.2778C6.93663 18.2873 7.98913 17.8674 8.77499 17.1084L10.2 15.6834" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="link03-clip0_118_39307">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
