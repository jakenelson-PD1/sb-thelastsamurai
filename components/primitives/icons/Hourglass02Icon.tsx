import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Hourglass02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Hourglass02Icon({ size = 'md', className, ...props }: Hourglass02IconProps) {
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
      <path d="M15.1355 1.66699H4.86455C4.47914 1.66699 4.16669 1.97944 4.16669 2.36486C4.16669 4.58589 5.04899 6.71596 6.6195 8.28647L7.63549 9.30249C7.73638 9.40332 7.78683 9.45383 7.82294 9.50224C8.04325 9.79774 8.04325 10.2029 7.82294 10.4984C7.78683 10.5468 7.73638 10.5973 7.63549 10.6982L6.6195 11.7142C5.04899 13.2847 4.16669 15.4147 4.16669 17.6358C4.16669 18.0212 4.47914 18.3337 4.86455 18.3337H15.1355C15.5209 18.3337 15.8334 18.0212 15.8334 17.6358C15.8334 15.4147 14.951 13.2847 13.3805 11.7142L12.3645 10.6982C12.2637 10.5973 12.2132 10.5468 12.1771 10.4984C11.9568 10.2029 11.9568 9.79774 12.1771 9.50224C12.2132 9.45383 12.2637 9.40332 12.3645 9.30249L13.3805 8.28647C14.951 6.71596 15.8334 4.58589 15.8334 2.36486C15.8334 1.97944 15.5209 1.66699 15.1355 1.66699Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
