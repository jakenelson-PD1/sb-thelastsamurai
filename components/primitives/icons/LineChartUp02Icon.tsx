import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LineChartUp02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LineChartUp02Icon({ size = 'md', className, ...props }: LineChartUp02IconProps) {
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
      <path d="M17.5 17.5H3.83333C3.36662 17.5 3.13327 17.5 2.95501 17.4092C2.79821 17.3293 2.67072 17.2018 2.59082 17.045C2.5 16.8668 2.5 16.6334 2.5 16.1667V2.5M17.5 5.83333L12.9714 10.3619C12.8064 10.5269 12.7239 10.6094 12.6287 10.6403C12.5451 10.6676 12.4549 10.6676 12.3712 10.6403C12.2761 10.6094 12.1936 10.5269 12.0286 10.3619L10.4714 8.80475C10.3064 8.63975 10.2239 8.55725 10.1287 8.52633C10.0451 8.49908 9.95492 8.49908 9.87125 8.52633C9.77608 8.55725 9.69358 8.63975 9.52858 8.80475L5.83333 12.5M17.5 5.83333H14.1667M17.5 5.83333V9.16667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
