import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ScissorsCut02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ScissorsCut02Icon({ size = 'md', className, ...props }: ScissorsCut02IconProps) {
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
      <path d="M3.75 7.16667L17.5 14.1667M17.5 5.83333L3.75 12.8333M14.5833 10H14.5917M18.3333 10H18.3417M5 2.5C6.38071 2.5 7.5 3.61929 7.5 5C7.5 6.38071 6.38071 7.5 5 7.5C3.61929 7.5 2.5 6.38071 2.5 5C2.5 3.61929 3.61929 2.5 5 2.5ZM5 12.5C6.38071 12.5 7.5 13.6192 7.5 15C7.5 16.3807 6.38071 17.5 5 17.5C3.61929 17.5 2.5 16.3807 2.5 15C2.5 13.6192 3.61929 12.5 5 12.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
