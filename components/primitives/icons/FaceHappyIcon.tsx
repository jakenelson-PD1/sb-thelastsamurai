import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FaceHappyIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FaceHappyIcon({ size = 'md', className, ...props }: FaceHappyIconProps) {
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
      <g clipPath="url(#facehappy-clip0_118_45954)">
<path d="M12.5 7.49984H12.5083M7.49999 7.49984H7.50832M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 9.99999 18.3332C5.39761 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39761 1.6665 9.99999 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984ZM12.9167 7.49984C12.9167 7.72995 12.7301 7.9165 12.5 7.9165C12.2699 7.9165 12.0833 7.72995 12.0833 7.49984C12.0833 7.26972 12.2699 7.08317 12.5 7.08317C12.7301 7.08317 12.9167 7.26972 12.9167 7.49984ZM7.91666 7.49984C7.91666 7.72995 7.73011 7.9165 7.49999 7.9165C7.26987 7.9165 7.08332 7.72995 7.08332 7.49984C7.08332 7.26972 7.26987 7.08317 7.49999 7.08317C7.73011 7.08317 7.91666 7.26972 7.91666 7.49984ZM9.99999 14.5832C12.0837 14.5832 13.75 13.0557 13.75 11.6665H6.24999C6.24999 13.0557 7.91624 14.5832 9.99999 14.5832Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="facehappy-clip0_118_45954">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
