import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Sliders01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Sliders01Icon({ size = 'md', className, ...props }: Sliders01IconProps) {
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
      <path d="M4.16669 17.5V11.6667M4.16669 8.33333V2.5M10 17.5V10M10 6.66667V2.5M15.8334 17.5V13.3333M15.8334 10V2.5M1.66669 11.6667H6.66669M7.50002 6.66667H12.5M13.3334 13.3333H18.3334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
