import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignBottom01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignBottom01Icon({ size = 'md', className, ...props }: AlignBottom01IconProps) {
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
      <path d="M2.5 17.5H17.5M10 2.5V14.1667M10 14.1667L15.8333 8.33333M10 14.1667L4.16667 8.33333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
