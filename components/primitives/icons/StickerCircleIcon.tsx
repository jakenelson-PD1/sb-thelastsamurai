import { clsx } from 'clsx';

export interface StickerCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function StickerCircleIcon({ size = 20, className, ...props }: StickerCircleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#stickercircle-clip0_118_43400)">
<path d="M18.3339 10.0974C18.3339 5.44117 14.5592 1.6665 9.90294 1.6665C6.12374 1.6665 2.92532 4.15305 1.85445 7.57934C1.78585 7.79882 1.75155 7.90856 1.75479 8.04579C1.75742 8.15737 1.79134 8.29522 1.84078 8.39525C1.90159 8.51834 1.99547 8.61225 2.18324 8.8L11.2008 17.8171C11.3885 18.0048 11.4824 18.0988 11.6054 18.1595C11.7055 18.2089 11.8434 18.2428 11.9549 18.2455C12.0922 18.2488 12.2019 18.2144 12.4214 18.1458C15.8475 17.0748 18.3339 13.8765 18.3339 10.0974Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.87236 8.11135C3.07277 8.09709 3.27513 8.08984 3.47918 8.08984C8.13546 8.08984 11.9101 11.8645 11.9101 16.5208C11.9101 16.7249 11.9029 16.9272 11.8886 17.1276C11.8637 17.4778 11.8513 17.6529 11.7492 17.761C11.6663 17.8489 11.5249 17.9016 11.4047 17.8896C11.2567 17.8748 11.1222 17.7402 10.853 17.4711L2.52889 9.14694C2.25978 8.87785 2.12522 8.74327 2.11041 8.59527C2.09836 8.4751 2.15116 8.33369 2.23898 8.25077C2.34711 8.1487 2.5222 8.13625 2.87236 8.11135Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="stickercircle-clip0_118_43400">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
