import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MicrophoneOff01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MicrophoneOff01Icon({ size = 'md', className, ...props }: MicrophoneOff01IconProps) {
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
      <g clipPath="url(#microphoneoff01-clip0_118_43934)">
<path d="M12.5 7.83317V4.1665C12.5 2.7858 11.3808 1.6665 10 1.6665C9.01869 1.6665 8.16939 2.23194 7.76019 3.05478M10 15.8332V18.3332M10 15.8332C6.77836 15.8332 4.16669 13.2215 4.16669 9.99984V8.33317M10 15.8332C13.2217 15.8332 15.8334 13.2215 15.8334 9.99984V8.33317M6.66669 18.3332H13.3334M1.66669 1.6665L18.3334 18.3332M10 12.4998C8.61927 12.4998 7.50002 11.3806 7.50002 9.99984V7.49984L11.7689 11.7665C11.3164 12.2196 10.6909 12.4998 10 12.4998Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="microphoneoff01-clip0_118_43934">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
