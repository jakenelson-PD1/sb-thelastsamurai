import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface HeartRoundedIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function HeartRoundedIcon({ size = 'md', className, ...props }: HeartRoundedIconProps) {
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
      <path d="M13.4259 2.5C16.3611 2.5 18.3333 5.29375 18.3333 7.9C18.3333 13.1782 10.1482 17.5 10 17.5C9.85183 17.5 1.66666 13.1782 1.66666 7.9C1.66666 5.29375 3.63889 2.5 6.57407 2.5C8.25926 2.5 9.36108 3.35312 10 4.10312C10.6389 3.35312 11.7407 2.5 13.4259 2.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
