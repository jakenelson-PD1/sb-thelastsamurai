import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudBlank02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudBlank02Icon({ size = 'md', className, ...props }: CloudBlank02IconProps) {
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
      <path d="M7.91666 15.8333C4.46488 15.8333 1.66666 13.0351 1.66666 9.58334C1.66666 6.13156 4.46488 3.33334 7.91666 3.33334C10.3189 3.33334 12.4046 4.68863 13.4508 6.67629C13.5497 6.66991 13.6495 6.66668 13.75 6.66668C16.2813 6.66668 18.3333 8.71868 18.3333 11.25C18.3333 13.7813 16.2813 15.8333 13.75 15.8333C11.6237 15.8333 10.102 15.8333 7.91666 15.8333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
