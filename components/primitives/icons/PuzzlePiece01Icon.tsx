import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PuzzlePiece01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PuzzlePiece01Icon({ size = 'md', className, ...props }: PuzzlePiece01IconProps) {
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
      <g clipPath="url(#puzzlepiece01-clip0_118_48904)">
<path d="M6.24999 3.74984C6.24999 2.59925 7.18273 1.6665 8.33332 1.6665C9.48391 1.6665 10.4167 2.59925 10.4167 3.74984V4.99984H11.25C12.4148 4.99984 12.9972 4.99984 13.4567 5.19014C14.0692 5.44387 14.556 5.93056 14.8097 6.54313C15 7.00255 15 7.58499 15 8.74984H16.25C17.4006 8.74984 18.3333 9.68259 18.3333 10.8332C18.3333 11.9838 17.4006 12.9165 16.25 12.9165H15V14.3332C15 15.7333 15 16.4333 14.7275 16.9682C14.4878 17.4386 14.1054 17.821 13.635 18.0607C13.1002 18.3332 12.4002 18.3332 11 18.3332H10.4167V16.8748C10.4167 15.8393 9.57716 14.9998 8.54166 14.9998C7.50612 14.9998 6.66666 15.8393 6.66666 16.8748V18.3332H5.66666C4.26652 18.3332 3.56646 18.3332 3.03168 18.0607C2.56127 17.821 2.17882 17.4386 1.93914 16.9682C1.66666 16.4333 1.66666 15.7333 1.66666 14.3332V12.9165H2.91666C4.06725 12.9165 4.99999 11.9838 4.99999 10.8332C4.99999 9.68259 4.06725 8.74984 2.91666 8.74984H1.66666C1.66666 7.58499 1.66666 7.00255 1.85696 6.54313C2.11069 5.93056 2.59738 5.44387 3.20995 5.19014C3.66937 4.99984 4.25181 4.99984 5.41666 4.99984H6.24999V3.74984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="puzzlepiece01-clip0_118_48904">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
