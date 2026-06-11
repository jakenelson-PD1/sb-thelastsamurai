import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LineChartDown01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LineChartDown01Icon({ size = 'md', className, ...props }: LineChartDown01IconProps) {
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
      <path d="M17.5 17.5H3.83333C3.36662 17.5 3.13327 17.5 2.95501 17.4092C2.79821 17.3293 2.67072 17.2018 2.59082 17.045C2.5 16.8668 2.5 16.6334 2.5 16.1667V2.5M16.6667 12.5L13.4009 9.01442C13.2772 8.88233 13.2153 8.81633 13.1407 8.78217C13.0747 8.752 13.0022 8.73958 12.93 8.74608C12.8482 8.7535 12.7679 8.79517 12.6072 8.87858L9.89275 10.2881C9.73208 10.3715 9.65175 10.4132 9.57 10.4206C9.49783 10.4271 9.42525 10.4147 9.35933 10.3845C9.28467 10.3503 9.22283 10.2843 9.09908 10.1522L5.83333 6.66667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
