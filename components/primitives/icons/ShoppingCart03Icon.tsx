import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ShoppingCart03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ShoppingCart03Icon({ size = 'md', className, ...props }: ShoppingCart03IconProps) {
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
      <g clipPath="url(#shoppingcart03-clip0_118_45810)">
<path d="M4.1668 11.6665H15.1133C15.9573 11.6665 16.3793 11.6665 16.7152 11.5092C17.0112 11.3705 17.2599 11.1479 17.4303 10.8692C17.6238 10.5526 17.6704 10.1332 17.7636 9.29434L18.2511 4.9068C18.2796 4.65057 18.2938 4.52246 18.2526 4.4233C18.2164 4.33622 18.1518 4.26398 18.0692 4.2184C17.9752 4.1665 17.8463 4.1665 17.5885 4.1665H3.75014M1.66669 1.6665H2.70705C2.92757 1.6665 3.03783 1.6665 3.1241 1.70844C3.20004 1.74536 3.26297 1.80448 3.30455 1.87797C3.35179 1.96145 3.35866 2.0715 3.37242 2.29159L4.12762 14.3748C4.14138 14.5948 4.14825 14.7049 4.19549 14.7883C4.23707 14.8618 4.3 14.921 4.37595 14.9579C4.46221 14.9998 4.57247 14.9998 4.79299 14.9998H15.8334M6.25002 17.9165H6.25835M13.75 17.9165H13.7584M6.66669 17.9165C6.66669 18.1466 6.48014 18.3332 6.25002 18.3332C6.0199 18.3332 5.83335 18.1466 5.83335 17.9165C5.83335 17.6864 6.0199 17.4998 6.25002 17.4998C6.48014 17.4998 6.66669 17.6864 6.66669 17.9165ZM14.1667 17.9165C14.1667 18.1466 13.9801 18.3332 13.75 18.3332C13.5199 18.3332 13.3334 18.1466 13.3334 17.9165C13.3334 17.6864 13.5199 17.4998 13.75 17.4998C13.9801 17.4998 14.1667 17.6864 14.1667 17.9165Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="shoppingcart03-clip0_118_45810">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
