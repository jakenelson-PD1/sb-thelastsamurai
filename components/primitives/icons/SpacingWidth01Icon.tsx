import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SpacingWidth01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SpacingWidth01Icon({ size = 'md', className, ...props }: SpacingWidth01IconProps) {
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
      <path d="M5 10H15M5 10L6.66667 7.5M5 10L6.66667 12.5M15 10L13.3333 7.5M15 10L13.3333 12.5M17.5 17.5V2.5M2.5 17.5V2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
