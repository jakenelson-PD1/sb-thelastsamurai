import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SpacingHeight01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SpacingHeight01Icon({ size = 'md', className, ...props }: SpacingHeight01IconProps) {
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
      <path d="M10 15V5M10 15L7.5 13.3333M10 15L12.5 13.3333M10 5L7.5 6.66667M10 5L12.5 6.66667M17.5 2.5H2.5M17.5 17.5H2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
