import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BarChart04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BarChart04Icon({ size = 'md', className, ...props }: BarChart04IconProps) {
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
      <path d="M2.5 9.16667V17.5M12.5 9.16667V17.5M7.5 2.5V17.5M17.5 2.5V17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
