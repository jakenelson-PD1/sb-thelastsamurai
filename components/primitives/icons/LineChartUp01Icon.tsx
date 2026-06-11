import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LineChartUp01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LineChartUp01Icon({ size = 'md', className, ...props }: LineChartUp01IconProps) {
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
      <path d="M17.5 17.5H3.83333C3.36662 17.5 3.13327 17.5 2.95501 17.4092C2.79821 17.3293 2.67072 17.2018 2.59082 17.045C2.5 16.8668 2.5 16.6334 2.5 16.1667V2.5M16.6667 6.66667L13.4009 10.1522C13.2772 10.2843 13.2153 10.3503 13.1407 10.3845C13.0747 10.4147 13.0022 10.4271 12.93 10.4206C12.8482 10.4132 12.7679 10.3715 12.6072 10.2881L9.89275 8.87858C9.73208 8.79517 9.65175 8.7535 9.57 8.74608C9.49783 8.73958 9.42525 8.752 9.35933 8.78217C9.28467 8.81633 9.22283 8.88233 9.09908 9.01442L5.83333 12.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
