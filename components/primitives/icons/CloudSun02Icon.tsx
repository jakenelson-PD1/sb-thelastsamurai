import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudSun02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudSun02Icon({ size = 'md', className, ...props }: CloudSun02IconProps) {
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
      <g clipPath="url(#cloudsun02-clip0_118_51904)">
<path d="M8.75002 1.25V2.58333M3.00002 8.33333H1.66669M4.54269 4.12614L3.59987 3.18333M12.9582 4.12614L13.901 3.18333M15.8334 8.33333H14.5M5.41675 8.33342C5.41675 6.49244 6.90913 5.00006 8.7501 5.00006C10.0051 5.00006 11.0981 5.69363 11.6668 6.71838M5.00002 18.3333C3.15907 18.3333 1.66669 16.8409 1.66669 15C1.66669 13.1591 3.15907 11.6667 5.00002 11.6667C5.38685 11.6667 5.75828 11.7326 6.1037 11.8538C6.70053 10.283 8.21991 9.16667 10 9.16667C11.7801 9.16667 13.2995 10.283 13.8964 11.8538C14.2418 11.7326 14.6132 11.6667 15 11.6667C16.8409 11.6667 18.3334 13.1591 18.3334 15C18.3334 16.8409 16.8409 18.3333 15 18.3333C11.1331 18.3333 8.2327 18.3333 5.00002 18.3333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cloudsun02-clip0_118_51904">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
