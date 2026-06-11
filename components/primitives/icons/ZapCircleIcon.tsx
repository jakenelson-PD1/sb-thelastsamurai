import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ZapCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ZapCircleIcon({ size = 'md', className, ...props }: ZapCircleIconProps) {
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
      <g clipPath="url(#zapcircle-clip0_118_37965)">
<path d="M10 4.58337L6.13471 10.2057C5.90201 10.5441 5.78567 10.7134 5.79266 10.854C5.79874 10.9765 5.85851 11.0902 5.95601 11.1646C6.06797 11.25 6.27333 11.25 6.68406 11.25H10V15.4167L13.8654 9.79437C14.098 9.45596 14.2145 9.28671 14.2075 9.14604C14.2014 9.02354 14.1416 8.90987 14.044 8.83546C13.9321 8.75004 13.7268 8.75004 13.316 8.75004H10V4.58337Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="zapcircle-clip0_118_37965">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
