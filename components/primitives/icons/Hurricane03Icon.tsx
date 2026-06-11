import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Hurricane03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Hurricane03Icon({ size = 'md', className, ...props }: Hurricane03IconProps) {
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
      <path d="M17.5 3.33301H2.5M16.6667 6.66634H5M15 9.99967H7.5M12.5 13.333H6.66667M14.1667 16.6663H10" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
