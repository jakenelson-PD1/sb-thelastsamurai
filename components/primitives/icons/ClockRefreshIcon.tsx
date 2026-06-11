import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ClockRefreshIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ClockRefreshIcon({ size = 'md', className, ...props }: ClockRefreshIconProps) {
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
      <path d="M17.0443 10.7436C16.8128 12.9185 15.5806 14.9566 13.5414 16.1339C10.1535 18.0899 5.82138 16.9292 3.86537 13.5413L3.65704 13.1804M2.95514 9.25551C3.18664 7.08062 4.41897 5.04252 6.45812 3.86521C9.846 1.9092 14.1782 3.06998 16.1342 6.45788L16.3425 6.81873M2.91096 15.0545L3.52102 12.7778L5.79772 13.3878M14.2018 6.61124L16.4786 7.22128L17.0886 4.94457M9.99975 6.24955V9.99959L12.0831 11.2496" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
