import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowsRightIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowsRightIcon({ size = 'md', className, ...props }: ArrowsRightIconProps) {
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
      <path d="M3.33331 5.83333H12.5M12.5 5.83333L9.16665 9.16667M12.5 5.83333L9.16665 2.5M3.33331 14.1667H16.6666M16.6666 14.1667L13.3333 17.5M16.6666 14.1667L13.3333 10.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
