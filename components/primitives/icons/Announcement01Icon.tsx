import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Announcement01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Announcement01Icon({ size = 'md', className, ...props }: Announcement01IconProps) {
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
      <path d="M18.3334 6.66636V9.99967M8.54169 4.58301H5.66669C4.26655 4.58301 3.56649 4.58301 3.03171 4.8555C2.5613 5.09518 2.17885 5.47763 1.93917 5.94804C1.66669 6.48282 1.66669 7.18289 1.66669 8.58301V9.58301C1.66669 10.3596 1.66669 10.7478 1.79355 11.0542C1.96271 11.4625 2.28717 11.787 2.69555 11.9562C3.00184 12.083 3.39012 12.083 4.16669 12.083V15.6247C4.16669 15.8182 4.16669 15.9149 4.17471 15.9963C4.25265 16.7877 4.8787 17.4138 5.67 17.4917C5.75148 17.4997 5.84821 17.4997 6.04169 17.4997C6.23516 17.4997 6.3319 17.4997 6.41339 17.4917C7.20468 17.4138 7.83073 16.7877 7.90866 15.9963C7.91669 15.9149 7.91669 15.8182 7.91669 15.6247V12.083H8.54169C10.0137 12.083 11.8144 12.8721 13.2036 13.6294C14.014 14.0712 14.4193 14.2921 14.6847 14.2596C14.9308 14.2294 15.1169 14.1189 15.2611 13.9173C15.4167 13.6998 15.4167 13.2647 15.4167 12.3944V4.27159C15.4167 3.40135 15.4167 2.96622 15.2611 2.74876C15.1169 2.5471 14.9308 2.4366 14.6847 2.40646C14.4193 2.37395 14.014 2.59485 13.2036 3.03665C11.8144 3.79394 10.0137 4.58301 8.54169 4.58301Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
