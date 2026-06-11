import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowsTriangleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowsTriangleIcon({ size = 'md', className, ...props }: ArrowsTriangleIconProps) {
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
      <path d="M10.8334 15.8334H14.4119C15.9662 15.8334 16.7434 15.8334 17.1846 15.5077C17.5694 15.2238 17.8136 14.7883 17.8553 14.312C17.903 13.7656 17.4978 13.1025 16.6873 11.7761L15.8565 10.4167M5.10847 8.83771L3.31275 11.7762C2.50225 13.1025 2.097 13.7656 2.14479 14.312C2.18645 14.7883 2.4307 15.2238 2.8154 15.5077C3.25668 15.8334 4.03385 15.8334 5.58817 15.8334H7.08335M14.0741 7.50003L12.2754 4.55677C11.5231 3.3257 11.1469 2.71016 10.6627 2.50032C10.2399 2.31712 9.7601 2.31712 9.33735 2.50032C8.8531 2.71016 8.47694 3.3257 7.7246 4.55678L6.87475 5.94745M15 4.16676L14.0849 7.58181L10.6699 6.66676M1.66669 9.66512L5.08175 8.75004L5.99681 12.1651M12.9167 18.3334L10.4167 15.8334L12.9167 13.3334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
