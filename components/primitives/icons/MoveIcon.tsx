import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MoveIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MoveIcon({ size = 'md', className, ...props }: MoveIconProps) {
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
      <g clipPath="url(#move-clip0_118_42070)">
<path d="M4.16667 7.50008L1.66667 10.0001M1.66667 10.0001L4.16667 12.5001M1.66667 10.0001H18.3333M18.3333 10.0001L15.8333 7.50008M18.3333 10.0001L15.8333 12.5001M7.5 4.16675L10 1.66675M10 1.66675L12.5 4.16675M10 1.66675V18.3334M10 18.3334L12.5 15.8334M10 18.3334L7.5 15.8334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="move-clip0_118_42070">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
