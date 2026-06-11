import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface RefreshCw03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCw03Icon({ size = 'md', className, ...props }: RefreshCw03IconProps) {
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
      <path d="M11.6667 18.3334C11.6667 18.3334 12.3743 18.2323 15.3033 15.3034C18.2323 12.3744 18.2323 7.62571 15.3033 4.69678C14.2656 3.65906 12.9994 2.98899 11.6667 2.68661M11.6667 18.3334H16.6667M11.6667 18.3334V13.3334M8.33333 1.66691C8.33333 1.66691 7.62563 1.76801 4.6967 4.69695C1.76777 7.62587 1.76777 12.3746 4.6967 15.3036C5.73443 16.3412 7.0006 17.0113 8.33333 17.3137M8.33333 1.66691L3.33333 1.66675M8.33333 1.66691V6.66675" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
