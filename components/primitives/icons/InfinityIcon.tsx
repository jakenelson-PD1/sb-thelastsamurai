import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface InfinityIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function InfinityIcon({ size = 'md', className, ...props }: InfinityIconProps) {
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
      <path d="M15.1481 6.66675C19.3947 6.66675 19.3947 13.3334 15.1481 13.3334C10.9022 13.3334 9.20391 6.66675 4.53228 6.66675C0.711448 6.66675 0.711448 13.3334 4.53228 13.3334C9.20391 13.3334 10.9023 6.66675 15.149 6.66675H15.1481Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
