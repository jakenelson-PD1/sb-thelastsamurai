import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Bell04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Bell04Icon({ size = 'md', className, ...props }: Bell04IconProps) {
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
      <path d="M11.9925 15.0125C12.3498 16.3462 11.5584 17.717 10.2247 18.0745C8.89108 18.4318 7.52021 17.6403 7.16286 16.3066M9.07625 4.78428C9.32975 4.3282 9.41325 3.77695 9.26758 3.23312C8.96975 2.12173 7.8274 1.46218 6.716 1.75998C5.60462 2.05777 4.94507 3.20015 5.24286 4.31153C5.38859 4.85537 5.73653 5.29101 6.18411 5.55923M13.5299 7.87132C13.2325 6.76121 12.4383 5.83291 11.3223 5.29062C10.2062 4.74835 8.85966 4.63652 7.57874 4.97973C6.29784 5.32295 5.18756 6.0931 4.49216 7.12076C3.79676 8.14842 3.5732 9.34937 3.87065 10.4595C4.3628 12.2962 4.26724 13.7615 3.95645 14.875C3.60222 16.144 3.42511 16.7785 3.47296 16.906C3.5277 17.0517 3.5673 17.0918 3.7125 17.148C3.8394 17.1972 4.37255 17.0543 5.43883 16.7686L15.3264 14.1193C16.3927 13.8335 16.9258 13.6907 17.0112 13.5846C17.1087 13.4633 17.123 13.4089 17.0976 13.2553C17.0753 13.121 16.6047 12.66 15.6633 11.7381C14.8375 10.9292 14.0221 9.70804 13.5299 7.87132Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
