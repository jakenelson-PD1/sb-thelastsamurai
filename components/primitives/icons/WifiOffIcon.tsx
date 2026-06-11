import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface WifiOffIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function WifiOffIcon({ size = 'md', className, ...props }: WifiOffIconProps) {
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
      <g clipPath="url(#wifioff-clip0_118_44867)">
<path d="M12.7599 8.33333C13.9002 8.68858 14.9687 9.26592 15.9 10.0417M18.8166 7.08331C16.3813 4.93662 13.2463 3.75218 9.99993 3.75218C9.49576 3.75218 8.99426 3.78075 8.49768 3.83706M7.10817 13.0083C7.95417 12.4073 8.96626 12.0844 10.004 12.0844C11.0418 12.0844 12.0538 12.4073 12.8998 13.0083M10 16.25H10.0083M0.994476 7.25063C2.10582 6.23224 3.39033 5.39979 4.79877 4.80255M3.94328 10.2025C5.10779 9.17667 6.53478 8.44183 8.11055 8.11161M13.0819 13.1459C12.2327 12.4802 11.1627 12.0833 9.99993 12.0833C8.81959 12.0833 7.73478 12.4923 6.87948 13.1763M2.50001 2.5L17.5 17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="wifioff-clip0_118_44867">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
