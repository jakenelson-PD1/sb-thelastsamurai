import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Speedometer01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Speedometer01Icon({ size = 'md', className, ...props }: Speedometer01IconProps) {
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
      <g clipPath="url(#speedometer01-clip0_118_37485)">
<path d="M10 1.66666V3.74999M10 1.66666C5.39763 1.66666 1.66667 5.39761 1.66667 9.99999M10 1.66666C14.6023 1.66666 18.3333 5.39761 18.3333 9.99999M1.66667 9.99999C1.66667 14.6023 5.39763 18.3333 10 18.3333M1.66667 9.99999H3.75001M18.3333 9.99999C18.3333 14.6023 14.6023 18.3333 10 18.3333M18.3333 9.99999H16.25M10 16.25V18.3333M15.8987 15.8987L14.4206 14.4206M4.10136 15.8987L5.58096 14.4191M4.10136 4.16666L5.54841 5.6137M15.8987 4.16666L11.2499 8.74999M11.6667 9.99999C11.6667 10.9205 10.9205 11.6667 10 11.6667C9.0795 11.6667 8.33334 10.9205 8.33334 9.99999C8.33334 9.07949 9.0795 8.33332 10 8.33332C10.9205 8.33332 11.6667 9.07949 11.6667 9.99999Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="speedometer01-clip0_118_37485">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
