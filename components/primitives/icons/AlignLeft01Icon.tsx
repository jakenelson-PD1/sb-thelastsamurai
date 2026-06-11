import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignLeft01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignLeft01Icon({ size = 'md', className, ...props }: AlignLeft01IconProps) {
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
      <path d="M2.5 2.5V17.5M17.5 10H5.83333M5.83333 10L11.6667 15.8333M5.83333 10L11.6667 4.16667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
