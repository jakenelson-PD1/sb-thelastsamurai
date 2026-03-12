import { clsx } from 'clsx';

export interface LetterSpacing02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LetterSpacing02Icon({ size = 20, className, ...props }: LetterSpacing02IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M1.66669 15H18.3334M1.66669 15L4.16669 12.5M1.66669 15L4.16669 17.5M18.3334 15L15.8334 12.5M18.3334 15L15.8334 17.5M5.83335 2.5H14.1667M10 2.5V11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
