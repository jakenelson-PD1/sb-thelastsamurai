import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface VirusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function VirusIcon({ size = 'md', className, ...props }: VirusIconProps) {
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
      <g clipPath="url(#virus-clip0_118_37883)">
<path d="M10 1.66669V5.83335M10 1.66669C9.4056 1.66669 8.82577 1.72891 8.26661 1.84721M10 1.66669C10.5944 1.66669 11.1743 1.72891 11.7334 1.84721M10 5.83335C7.69881 5.83335 5.83335 7.69885 5.83335 10M10 5.83335C12.3012 5.83335 14.1667 7.69885 14.1667 10M5.83335 10C5.83335 12.3012 7.69881 14.1667 10 14.1667M5.83335 10H1.66669M14.1667 10C14.1667 12.3012 12.3012 14.1667 10 14.1667M14.1667 10H18.3334M10 14.1667V18.3334M10 18.3334C10.5935 18.3334 11.1725 18.2713 11.7309 18.1534M10 18.3334C9.40427 18.3334 8.82319 18.2709 8.2629 18.152M4.10745 4.10746L7.05372 7.05375M12.9463 12.9463L15.8925 15.8926M1.66669 10C1.66669 10.5944 1.7289 11.1744 1.84722 11.7335M1.66669 10C1.66669 9.40477 1.72909 8.82402 1.84775 8.26405M18.3334 10C18.3334 9.4056 18.2711 8.82569 18.1528 8.2665M18.3334 10C18.3334 10.5943 18.2712 11.1739 18.1529 11.7329M4.10745 15.8926L7.05372 12.9463M12.9463 7.05375L15.8925 4.10746M14.5389 3.01009C15.5175 3.64685 16.3541 4.48355 16.9907 5.46226M16.9884 14.5414C16.3517 15.5191 15.5153 16.355 14.5371 16.9911M5.46145 16.9902C4.48422 16.3544 3.64861 15.5192 3.0123 14.5424M3.00978 5.46158C3.64623 4.4833 4.48247 3.64696 5.46065 3.01039" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="virus-clip0_118_37883">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
