import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface GitMergeIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function GitMergeIcon({ size = 'md', className, ...props }: GitMergeIconProps) {
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
      <path d="M12.5 15C12.5 16.3807 13.6192 17.5 15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6192 16.3807 12.5 15 12.5C13.6192 12.5 12.5 13.6192 12.5 15ZM12.5 15C10.5109 15 8.60325 14.2098 7.1967 12.8033C5.79017 11.3968 5 9.48908 5 7.5M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5ZM5 7.5V17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
