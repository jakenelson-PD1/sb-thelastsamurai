import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Share07IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Share07Icon({ size = 'md', className, ...props }: Share07IconProps) {
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
      <path d="M7.15833 11.2583L12.85 14.575M12.8417 5.42499L7.15833 8.74166M17.5 4.16666C17.5 5.54736 16.3807 6.66666 15 6.66666C13.6192 6.66666 12.5 5.54736 12.5 4.16666C12.5 2.78595 13.6192 1.66666 15 1.66666C16.3807 1.66666 17.5 2.78595 17.5 4.16666ZM7.5 9.99999C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 9.99999C2.5 8.61924 3.61929 7.49999 5 7.49999C6.38071 7.49999 7.5 8.61924 7.5 9.99999ZM17.5 15.8333C17.5 17.2141 16.3807 18.3333 15 18.3333C13.6192 18.3333 12.5 17.2141 12.5 15.8333C12.5 14.4526 13.6192 13.3333 15 13.3333C16.3807 13.3333 17.5 14.4526 17.5 15.8333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
