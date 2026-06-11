import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ZapFastIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ZapFastIcon({ size = 'md', className, ...props }: ZapFastIconProps) {
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
      <path d="M7.50002 14.5833H2.91669M5.41669 10H1.66669M7.50002 5.41667H3.33335M14.1667 2.5L8.66969 10.1958C8.42635 10.5365 8.3047 10.7068 8.30997 10.8488C8.31455 10.9724 8.37385 11.0876 8.47177 11.1632C8.58427 11.25 8.79352 11.25 9.21219 11.25H13.3334L12.5 17.5L17.997 9.80417C18.2404 9.4635 18.362 9.29325 18.3568 9.15125C18.3522 9.02758 18.2929 8.91242 18.1949 8.83683C18.0824 8.75 17.8732 8.75 17.4545 8.75H13.3334L14.1667 2.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
