import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FaceContentIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FaceContentIcon({ size = 'md', className, ...props }: FaceContentIconProps) {
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
      <g clipPath="url(#facecontent-clip0_118_45928)">
<path d="M6.66666 11.6665C6.66666 11.6665 7.91666 13.3332 10 13.3332C12.0833 13.3332 13.3333 11.6665 13.3333 11.6665M14.1667 7.69984C13.8375 8.104 13.3875 8.33317 12.9167 8.33317C12.4458 8.33317 12.0083 8.104 11.6667 7.69984M8.33333 7.69984C8.00416 8.104 7.55416 8.33317 7.08333 8.33317C6.6125 8.33317 6.175 8.104 5.83333 7.69984M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 10 18.3332C5.39762 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39762 1.6665 10 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="facecontent-clip0_118_45928">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
