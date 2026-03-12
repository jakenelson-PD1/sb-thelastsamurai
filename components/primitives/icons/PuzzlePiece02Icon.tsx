import { clsx } from 'clsx';

export interface PuzzlePiece02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PuzzlePiece02Icon({ size = 20, className, ...props }: PuzzlePiece02IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#puzzlepiece02-clip0_118_48917)">
<path d="M9.99999 1.6665L13 4.6665C15 -0.583496 20.5833 4.99984 15.3333 6.99984L18.3333 9.99984L15.3333 12.9998C13.3333 7.74984 7.74999 13.3332 13 15.3332L9.99999 18.3332L6.99999 15.3332C4.99999 20.5832 -0.583344 14.9998 4.66666 12.9998L1.66666 9.99984L4.66666 6.99984C6.66666 12.2498 12.25 6.6665 6.99999 4.6665L9.99999 1.6665Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="puzzlepiece02-clip0_118_48917">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
