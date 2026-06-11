import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MicrophoneOff02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MicrophoneOff02Icon({ size = 'md', className, ...props }: MicrophoneOff02IconProps) {
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
      <g clipPath="url(#microphoneoff02-clip0_118_43947)">
<path d="M3.33335 9.99984V10.8332C3.33335 14.5151 6.31812 17.4998 10 17.4998C12.0544 17.4998 13.8918 16.5706 15.1147 15.1095M1.66669 1.6665L18.3334 18.3332M13.3334 8.6665V5.83317C13.3334 3.99222 11.8409 2.49984 10 2.49984C9.20052 2.49984 8.46677 2.78132 7.8924 3.25059M10 14.1665C8.15907 14.1665 6.66669 12.6741 6.66669 10.8332V6.6665L12.7346 12.7398C12.1321 13.6023 11.1319 14.1665 10 14.1665Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="microphoneoff02-clip0_118_43947">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
