import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BellOff02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BellOff02Icon({ size = 'md', className, ...props }: BellOff02IconProps) {
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
      <path d="M11.6667 17.4998H8.33333M7.19422 2.52793C8.01633 1.97059 8.9925 1.6665 10 1.6665C11.3261 1.6665 12.5978 2.19329 13.5355 3.13097C14.4732 4.06865 15 5.34042 15 6.6665C15 8.41717 15.2252 9.7925 15.5403 10.8602M5.21556 5.2142C5.07388 5.68089 5 6.16989 5 6.6665C5 9.24167 4.35039 11.0048 3.62472 12.171C3.01261 13.1548 2.70655 13.6466 2.71777 13.7838C2.7302 13.9358 2.76238 13.9937 2.88482 14.0845C2.99538 14.1665 3.49383 14.1665 4.49071 14.1665H14.1667M17.5 17.4998L2.5 2.49984" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
