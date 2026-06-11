import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Loading01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Loading01Icon({ size = 'md', className, ...props }: Loading01IconProps) {
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
      <path d="M10 1.875V3.95833M10 15V18.3333M4.79167 10H1.875M17.7083 10H16.4583M15.3809 15.3809L14.7917 14.7917M15.5535 4.51316L14.375 5.69167M4.10131 15.8987L6.45833 13.5417M4.2739 4.34057L6.04167 6.10833" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
