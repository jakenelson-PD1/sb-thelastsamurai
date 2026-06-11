import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Hexagon02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Hexagon02Icon({ size = 'md', className, ...props }: Hexagon02IconProps) {
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
      <path d="M17.9733 9.3525C18.1046 9.58883 18.1702 9.707 18.1959 9.83208C18.2188 9.94292 18.2188 10.0571 18.1959 10.1679C18.1702 10.293 18.1046 10.4112 17.9733 10.6475L14.5474 16.8142C14.4087 17.0638 14.3394 17.1886 14.2408 17.2795C14.1535 17.3598 14.0501 17.4207 13.9374 17.4579C13.8101 17.5 13.6674 17.5 13.3819 17.5H6.61755C6.33202 17.5 6.18925 17.5 6.06192 17.4579C5.94927 17.4207 5.84587 17.3598 5.75863 17.2795C5.66001 17.1886 5.59068 17.0638 5.45201 16.8142L2.02609 10.6475C1.89479 10.4112 1.82914 10.293 1.8034 10.1679C1.78062 10.0571 1.78062 9.94292 1.8034 9.83208C1.82914 9.707 1.89479 9.58883 2.02609 9.3525L5.45201 3.18581C5.59068 2.93621 5.66001 2.81141 5.75863 2.72053C5.84587 2.64013 5.94927 2.57929 6.06192 2.54207C6.18925 2.5 6.33202 2.5 6.61755 2.5H13.3819C13.6674 2.5 13.8101 2.5 13.9374 2.54207C14.0501 2.57929 14.1535 2.64013 14.2408 2.72053C14.3394 2.81141 14.4087 2.93621 14.5474 3.18581L17.9733 9.3525Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
