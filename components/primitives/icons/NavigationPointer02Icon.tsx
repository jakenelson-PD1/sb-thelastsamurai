import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface NavigationPointer02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function NavigationPointer02Icon({ size = 'md', className, ...props }: NavigationPointer02IconProps) {
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
      <path d="M4.1974 17.771C3.71015 17.9854 3.46654 18.0926 3.31704 18.0455C3.18744 18.0047 3.08588 17.9033 3.04491 17.7737C2.99766 17.6243 3.10456 17.3805 3.31838 16.893L9.38619 3.05842C9.57919 2.61835 9.67569 2.39832 9.8106 2.33098C9.92777 2.27249 10.0656 2.27249 10.1828 2.33098C10.3177 2.39832 10.4142 2.61835 10.6073 3.05842L16.675 16.893C16.8889 17.3805 16.9958 17.6243 16.9485 17.7737C16.9075 17.9033 16.8059 18.0047 16.6764 18.0455C16.5269 18.0926 16.2833 17.9854 15.796 17.771L10.2652 15.3374C10.1663 15.2939 10.1169 15.2722 10.0654 15.2636C10.0199 15.2559 9.97344 15.2559 9.92794 15.2636C9.8766 15.2722 9.8271 15.2939 9.72819 15.3374L4.1974 17.771Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
