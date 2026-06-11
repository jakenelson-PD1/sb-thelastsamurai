import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ReverseRightIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ReverseRightIcon({ size = 'md', className, ...props }: ReverseRightIconProps) {
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
      <path d="M16.6666 5.83333H8.33331C5.57189 5.83333 3.33331 8.07191 3.33331 10.8333C3.33331 13.5947 5.57189 15.8333 8.33331 15.8333H16.6666M16.6666 5.83333L13.3333 2.5M16.6666 5.83333L13.3333 9.16667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
