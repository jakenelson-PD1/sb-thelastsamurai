import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LineChartDown02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LineChartDown02Icon({ size = 'md', className, ...props }: LineChartDown02IconProps) {
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
      <path d="M17.5 17.5H3.83333C3.36662 17.5 3.13327 17.5 2.95501 17.4092C2.79821 17.3293 2.67072 17.2018 2.59082 17.045C2.5 16.8668 2.5 16.6334 2.5 16.1667V2.5M17.5 12.5L12.9714 7.97141C12.8064 7.8064 12.7239 7.72389 12.6287 7.69298C12.5451 7.66579 12.4549 7.66579 12.3712 7.69298C12.2761 7.72389 12.1936 7.8064 12.0286 7.97141L10.4714 9.52858C10.3064 9.69358 10.2239 9.77608 10.1287 9.807C10.0451 9.83425 9.95492 9.83425 9.87125 9.807C9.77608 9.77608 9.69358 9.69358 9.52858 9.52858L5.83333 5.83333M17.5 12.5H14.1667M17.5 12.5V9.16667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
