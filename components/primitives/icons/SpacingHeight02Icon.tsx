import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SpacingHeight02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SpacingHeight02Icon({ size = 'md', className, ...props }: SpacingHeight02IconProps) {
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
      <path d="M17.5 2.5H2.5M17.5 17.5H2.5M10 14.5833V5.4167M12.5001 5.41667L7.5 5.41667M12.5001 14.5833H7.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
