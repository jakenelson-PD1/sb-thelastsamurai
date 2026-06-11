import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudMoonIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudMoonIcon({ size = 'md', className, ...props }: CloudMoonIconProps) {
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
      <g clipPath="url(#cloudmoon-clip0_118_51761)">
<path d="M13.75 10.8331C15.8974 10.8331 17.6998 9.35643 18.1972 7.36313C17.8406 7.45215 17.4675 7.49941 17.0834 7.49941C14.552 7.49941 12.5 5.44738 12.5 2.91608C12.5 2.5321 12.5473 2.15916 12.6362 1.80273C10.6431 2.30033 9.16669 4.10263 9.16669 6.24978C9.16669 7.01038 9.35194 7.72772 9.67985 8.35909M4.16669 5.83309V2.49976M2.50002 4.16643H5.83335M5.00002 18.3331C3.15907 18.3331 1.66669 16.8407 1.66669 14.9998C1.66669 13.3515 2.86295 11.9828 4.43459 11.7142C5.10732 9.74726 6.97185 8.33309 9.16669 8.33309C11.0735 8.33309 12.731 9.40051 13.5744 10.9704C13.8954 10.8809 14.2338 10.8331 14.5834 10.8331C16.6544 10.8331 18.3334 12.512 18.3334 14.5831C18.3334 16.6542 16.6544 18.3331 14.5834 18.3331C11.3889 18.3331 8.19446 18.3331 5.00002 18.3331Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cloudmoon-clip0_118_51761">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
