import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Moon02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Moon02Icon({ size = 'md', className, ...props }: Moon02IconProps) {
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
      <g clipPath="url(#moon02-clip0_118_52053)">
<path d="M18.2957 10.797C17.1482 12.8098 14.9826 14.1668 12.5 14.1668C8.81807 14.1668 5.83332 11.182 5.83332 7.50007C5.83332 5.01727 7.19055 2.85146 9.20357 1.7041C4.97478 2.10506 1.66666 5.66613 1.66666 9.99983C1.66666 14.6023 5.39761 18.3332 9.99999 18.3332C14.3335 18.3332 17.8944 15.0254 18.2957 10.797Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="moon02-clip0_118_52053">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
