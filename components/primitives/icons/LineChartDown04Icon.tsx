import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LineChartDown04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LineChartDown04Icon({ size = 'md', className, ...props }: LineChartDown04IconProps) {
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
      <path d="M2.5 7.5L8.04611 11.4615C8.21185 11.5799 8.43892 11.5611 8.58292 11.4171L11.4171 8.58292C11.5611 8.43892 11.7882 8.42008 11.9539 8.5385L17.5 12.5M5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V5C17.5 3.61929 16.3807 2.5 15 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
