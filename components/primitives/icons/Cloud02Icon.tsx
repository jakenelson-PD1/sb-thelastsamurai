import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Cloud02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Cloud02Icon({ size = 'md', className, ...props }: Cloud02IconProps) {
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
      <path d="M5.00001 15.833C3.15905 15.833 1.66667 14.3406 1.66667 12.4997C1.66667 10.9462 2.72944 9.64084 4.1676 9.27109C4.16698 9.23626 4.16667 9.20134 4.16667 9.16634C4.16667 5.94468 6.77835 3.33301 10 3.33301C13.0083 3.33301 15.4846 5.61008 15.7995 8.53459C17.2737 9.03976 18.3333 10.4376 18.3333 12.083C18.3333 14.1541 16.6544 15.833 14.5833 15.833C11.4674 15.833 8.48967 15.833 5.00001 15.833Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
