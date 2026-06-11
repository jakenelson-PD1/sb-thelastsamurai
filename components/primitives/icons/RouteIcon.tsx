import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface RouteIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function RouteIcon({ size = 'md', className, ...props }: RouteIconProps) {
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
      <g clipPath="url(#route-clip0_118_51252)">
<path d="M9.58335 4.16699H9.94535C12.4847 4.16699 13.7544 4.16699 14.2364 4.62307C14.653 5.0173 14.8376 5.59806 14.7252 6.1605C14.595 6.81118 13.5584 7.54437 11.4853 9.01074L8.09812 11.4066C6.02494 12.8729 4.98835 13.6062 4.85822 14.2568C4.74574 14.8192 4.93037 15.4 5.34699 15.7942C5.82897 16.2503 7.09865 16.2503 9.63802 16.2503H10.4167M6.66669 4.16699C6.66669 5.5477 5.5474 6.66699 4.16669 6.66699C2.78598 6.66699 1.66669 5.5477 1.66669 4.16699C1.66669 2.78628 2.78598 1.66699 4.16669 1.66699C5.5474 1.66699 6.66669 2.78628 6.66669 4.16699ZM18.3334 15.8337C18.3334 17.2144 17.2141 18.3337 15.8334 18.3337C14.4526 18.3337 13.3334 17.2144 13.3334 15.8337C13.3334 14.4529 14.4526 13.3337 15.8334 13.3337C17.2141 13.3337 18.3334 14.4529 18.3334 15.8337Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="route-clip0_118_51252">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
