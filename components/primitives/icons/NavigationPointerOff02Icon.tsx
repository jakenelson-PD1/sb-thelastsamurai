import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface NavigationPointerOff02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function NavigationPointerOff02Icon({ size = 'md', className, ...props }: NavigationPointerOff02IconProps) {
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
      <g clipPath="url(#navigationpointeroff02-clip0_118_51187)">
<path d="M8.726 4.56347L9.38592 3.05903C9.57892 2.61896 9.67542 2.39893 9.81034 2.33158C9.9275 2.27309 10.0653 2.27309 10.1825 2.33158C10.3174 2.39893 10.4139 2.61896 10.6069 3.05903L13.2505 9.08641M7.45557 7.45993L3.31799 16.8937C3.10417 17.3812 2.99727 17.6249 3.04452 17.7743C3.08549 17.9038 3.18705 18.0053 3.31665 18.0461C3.46615 18.0932 3.70976 17.986 4.197 17.7717L9.72784 15.3381C9.82675 15.2946 9.87617 15.2728 9.92759 15.2642C9.97309 15.2566 10.0196 15.2566 10.0651 15.2642C10.1164 15.2728 10.1659 15.2946 10.2648 15.3381L15.7956 17.7717C16.2828 17.986 16.5265 18.0932 16.676 18.0461C16.8056 18.0053 16.9072 17.9038 16.9481 17.7743C16.9953 17.6249 16.8884 17.3812 16.6747 16.8937L16.5045 16.5058M18.3333 18.3337L1.66667 1.66699" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="navigationpointeroff02-clip0_118_51187">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
