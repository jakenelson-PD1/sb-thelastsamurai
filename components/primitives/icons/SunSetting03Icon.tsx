import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SunSetting03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SunSetting03Icon({ size = 'md', className, ...props }: SunSetting03IconProps) {
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
      <path d="M5.05007 17.4271C6.0584 17.8854 7.34174 17.8854 8.3501 17.4271C9.35844 16.9687 10.6418 16.9687 11.6501 17.4271C12.6584 17.8854 13.9418 17.8854 14.9501 17.4271M10 2.5V4.16667M3.33335 10.8333H1.66669M5.26179 6.0951L4.08327 4.91658M14.7379 6.0951L15.9165 4.91658M18.3334 10.8333H16.6667M5.83335 10.8333C5.83335 8.53217 7.69884 6.66667 10 6.66667C12.3012 6.66667 14.1667 8.53217 14.1667 10.8333M1.7501 14.5104C2.75844 14.0521 4.04177 14.0521 5.0501 14.5104C6.05844 14.9688 7.34177 14.9688 8.3501 14.5104C9.35844 14.0521 10.6418 14.0521 11.6501 14.5104C12.6584 14.9688 13.9418 14.9688 14.9501 14.5104C15.9584 14.0521 17.2418 14.0521 18.2501 14.5104" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
