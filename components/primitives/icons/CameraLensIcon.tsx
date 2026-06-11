import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CameraLensIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CameraLensIcon({ size = 'md', className, ...props }: CameraLensIconProps) {
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
      <g clipPath="url(#cameralens-clip0_118_50389)">
<path d="M17.8462 12.7846C15.4937 14.4582 12.4079 14.6442 9.89749 13.3337M2.1537 7.21607C4.51198 5.53838 7.60702 5.35564 10.1207 6.67657M12.8114 11.7706C15.217 10.2545 16.6099 7.47877 16.3342 4.59384M7.15152 8.25342C4.76858 9.77458 3.39131 12.5367 3.66564 15.4068M12.9391 8.44783C12.8282 5.60742 11.1208 3.01436 8.48507 1.81051M7.06301 11.605C7.19259 14.425 8.89524 16.9937 11.5147 18.1902M15.8925 4.10777C19.1469 7.36214 19.1469 12.6385 15.8925 15.8928C12.6382 19.1472 7.36179 19.1472 4.10743 15.8928C0.853065 12.6385 0.853065 7.36213 4.10743 4.10777C7.36181 0.853401 12.6382 0.853401 15.8925 4.10777ZM12.357 7.6433C13.6587 8.94508 13.6587 11.0556 12.357 12.3573C11.0552 13.6591 8.94474 13.6591 7.64296 12.3573C6.34122 11.0556 6.34122 8.94508 7.64296 7.6433C8.94474 6.34156 11.0552 6.34156 12.357 7.6433Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cameralens-clip0_118_50389">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
