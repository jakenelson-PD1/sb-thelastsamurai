import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LayersThree02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LayersThree02Icon({ size = 'md', className, ...props }: LayersThree02IconProps) {
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
      <g clipPath="url(#layersthree02-clip0_118_47354)">
<path d="M5.83335 7.91664L1.66669 10L9.70185 14.0176C9.81119 14.0723 9.86585 14.0996 9.92319 14.1103C9.97394 14.1198 10.0261 14.1198 10.0769 14.1103C10.1342 14.0996 10.1889 14.0723 10.2982 14.0176L18.3334 10L14.1667 7.91664M5.83335 12.0833L1.66669 14.1667L9.70185 18.1843C9.81119 18.2389 9.86585 18.2663 9.92319 18.277C9.97394 18.2865 10.0261 18.2865 10.0769 18.277C10.1342 18.2663 10.1889 18.2389 10.2982 18.1843L18.3334 14.1667L14.1667 12.0833M1.66669 5.8333L9.70185 1.81571C9.81119 1.76105 9.86585 1.73372 9.92319 1.72297C9.97394 1.71344 10.0261 1.71344 10.0769 1.72297C10.1342 1.73372 10.1889 1.76105 10.2982 1.81571L18.3334 5.8333L10.2982 9.85092C10.1889 9.90559 10.1342 9.93292 10.0769 9.94367C10.0261 9.95317 9.97394 9.95317 9.92319 9.94367C9.86585 9.93292 9.81119 9.90559 9.70185 9.85092L1.66669 5.8333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="layersthree02-clip0_118_47354">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
