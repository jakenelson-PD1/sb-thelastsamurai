import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Link04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Link04Icon({ size = 'md', className, ...props }: Link04IconProps) {
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
      <path d="M6.25002 5.83337H5.83335C3.53217 5.83337 1.66669 7.69886 1.66669 10C1.66669 12.3012 3.53217 14.1667 5.83335 14.1667H7.50002C9.80119 14.1667 11.6667 12.3012 11.6667 10M13.75 14.1667H14.1667C16.4679 14.1667 18.3334 12.3012 18.3334 10C18.3334 7.69886 16.4679 5.83337 14.1667 5.83337H12.5C10.1989 5.83337 8.33335 7.69886 8.33335 10" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
