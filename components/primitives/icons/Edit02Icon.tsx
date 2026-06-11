import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Edit02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Edit02Icon({ size = 'md', className, ...props }: Edit02IconProps) {
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
      <path d="M15 8.33338L11.6667 5.00005M2.08331 17.9167L4.90362 17.6034C5.2482 17.565 5.42048 17.5459 5.58152 17.4938C5.72439 17.4475 5.86035 17.3822 5.98572 17.2995C6.12702 17.2063 6.2496 17.0838 6.49476 16.8386L17.5 5.83338C18.4205 4.91291 18.4205 3.42052 17.5 2.50005C16.5795 1.57957 15.0872 1.57957 14.1667 2.50005L3.16142 13.5053C2.91627 13.7505 2.79369 13.873 2.70051 14.0143C2.61784 14.1397 2.55249 14.2756 2.50624 14.4185C2.45411 14.5795 2.43496 14.7518 2.39668 15.0964L2.08331 17.9167Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
