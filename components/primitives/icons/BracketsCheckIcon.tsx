import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BracketsCheckIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BracketsCheckIcon({ size = 'md', className, ...props }: BracketsCheckIconProps) {
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
      <path d="M15.4757 16.6668C16.5273 16.6668 17.3807 15.8143 17.3807 14.7618V10.9527L18.3332 10.0002L17.3807 9.04766V5.2385C17.3807 4.186 16.5282 3.3335 15.4757 3.3335M4.52417 3.3335C3.47167 3.3335 2.61917 4.186 2.61917 5.2385V9.04766L1.66667 10.0002L2.61917 10.9527V14.7618C2.61917 15.8143 3.47167 16.6668 4.52417 16.6668M6.25001 10.0002L8.2786 12.0287C8.44359 12.1937 8.52609 12.2762 8.62126 12.3072C8.70492 12.3344 8.79509 12.3344 8.87876 12.3072C8.97392 12.2762 9.05642 12.1937 9.22142 12.0287L13.75 7.50016" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
