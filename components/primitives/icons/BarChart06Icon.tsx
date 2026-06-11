import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BarChart06IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BarChart06Icon({ size = 'md', className, ...props }: BarChart06IconProps) {
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
      <path d="M7.5 6.66667V17.5M17.5 14.1667V17.5M2.5 2.5V17.5M12.5 10.8333V17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
