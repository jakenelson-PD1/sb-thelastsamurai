import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Repeat04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Repeat04Icon({ size = 'md', className, ...props }: Repeat04IconProps) {
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
      <path d="M10 17.0835C13.912 17.0835 17.0834 13.9122 17.0834 10.0002C17.0834 7.64555 15.9344 5.55927 14.1667 4.27133M10.8334 18.6668L9.16669 17.0002L10.8334 15.3335M10 2.91683C6.088 2.91683 2.91669 6.08815 2.91669 10.0002C2.91669 12.3547 4.06558 14.4411 5.83335 15.729M9.16669 4.66683L10.8334 3.00016L9.16669 1.3335" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
