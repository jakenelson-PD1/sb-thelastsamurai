import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface IntersectSquareIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function IntersectSquareIcon({ size = 'md', className, ...props }: IntersectSquareIconProps) {
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
      <g clipPath="url(#intersectsquare-clip0_118_47313)">
<path d="M1.66666 4.33317C1.66666 3.39975 1.66666 2.93304 1.84831 2.57652C2.0081 2.26291 2.26306 2.00795 2.57667 1.84816C2.93319 1.6665 3.39991 1.6665 4.33332 1.6665H10.6667C11.6001 1.6665 12.0668 1.6665 12.4233 1.84816C12.7369 2.00795 12.9919 2.26291 13.1517 2.57652C13.3333 2.93304 13.3333 3.39975 13.3333 4.33317V10.6665C13.3333 11.5999 13.3333 12.0667 13.1517 12.4232C12.9919 12.7368 12.7369 12.9918 12.4233 13.1515C12.0668 13.3332 11.6001 13.3332 10.6667 13.3332H4.33332C3.3999 13.3332 2.93319 13.3332 2.57667 13.1515C2.26306 12.9918 2.0081 12.7368 1.84831 12.4232C1.66666 12.0667 1.66666 11.5999 1.66666 10.6665V4.33317Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66666 9.33317C6.66666 8.39975 6.66666 7.93304 6.84831 7.57652C7.0081 7.26291 7.26306 7.00795 7.57667 6.84816C7.93319 6.6665 8.39991 6.6665 9.33332 6.6665H15.6667C16.6001 6.6665 17.0668 6.6665 17.4233 6.84816C17.7369 7.00795 17.9919 7.26291 18.1517 7.57652C18.3333 7.93304 18.3333 8.39975 18.3333 9.33317V15.6665C18.3333 16.5999 18.3333 17.0667 18.1517 17.4232C17.9919 17.7368 17.7369 17.9918 17.4233 18.1515C17.0668 18.3332 16.6001 18.3332 15.6667 18.3332H9.33332C8.39991 18.3332 7.93319 18.3332 7.57667 18.1515C7.26306 17.9918 7.0081 17.7368 6.84831 17.4232C6.66666 17.0667 6.66666 16.5999 6.66666 15.6665V9.33317Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="intersectsquare-clip0_118_47313">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
