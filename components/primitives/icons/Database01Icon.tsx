import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Database01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Database01Icon({ size = 'md', className, ...props }: Database01IconProps) {
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
      <path d="M17.5 4.1665C17.5 5.54721 14.1422 6.6665 10 6.6665C5.85787 6.6665 2.5 5.54721 2.5 4.1665M17.5 4.1665C17.5 2.7858 14.1422 1.6665 10 1.6665C5.85787 1.6665 2.5 2.7858 2.5 4.1665M17.5 4.1665V15.8332C17.5 17.2165 14.1667 18.3332 10 18.3332C5.83333 18.3332 2.5 17.2165 2.5 15.8332V4.1665M17.5 9.99984C17.5 11.3832 14.1667 12.4998 10 12.4998C5.83333 12.4998 2.5 11.3832 2.5 9.99984" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
