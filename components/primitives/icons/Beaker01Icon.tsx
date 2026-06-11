import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Beaker01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Beaker01Icon({ size = 'md', className, ...props }: Beaker01IconProps) {
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
      <path d="M8.33333 1.66706V5.55074C8.33333 5.73173 8.33333 5.82221 8.30575 5.89419C8.27973 5.9621 8.24529 6.01139 8.19048 6.05918C8.13237 6.10984 8.03828 6.14432 7.85007 6.21327C5.45743 7.08978 3.75 9.38733 3.75 12.0837C3.75 15.5354 6.54822 18.3337 10 18.3337C13.4517 18.3337 16.25 15.5354 16.25 12.0837C16.25 9.38733 14.5426 7.08978 12.1499 6.21327C11.9617 6.14432 11.8676 6.10984 11.8095 6.05918C11.7547 6.01139 11.7202 5.9621 11.6942 5.89419C11.6667 5.82221 11.6667 5.73173 11.6667 5.55074V1.66706M7.08333 1.66699H12.9167" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
