import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Pencil02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Pencil02Icon({ size = 'md', className, ...props }: Pencil02IconProps) {
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
      <g clipPath="url(#pencil02-clip0_118_42225)">
<path d="M15 1.66675L18.3334 5.00008M1.66669 18.3334L2.73035 14.4333C2.79975 14.1788 2.83445 14.0517 2.88771 13.933C2.93501 13.8277 2.99312 13.7275 3.06112 13.6342C3.1377 13.5291 3.23095 13.4358 3.41744 13.2493L12.0286 4.63816C12.1936 4.47315 12.2761 4.39064 12.3713 4.35973C12.4549 4.33254 12.5451 4.33254 12.6288 4.35973C12.7239 4.39064 12.8064 4.47315 12.9714 4.63816L15.3619 7.02867C15.5269 7.19368 15.6094 7.27619 15.6404 7.37132C15.6676 7.45501 15.6676 7.54516 15.6404 7.62884C15.6094 7.72397 15.5269 7.80648 15.3619 7.97149L6.75077 16.5827C6.56428 16.7692 6.47103 16.8624 6.36592 16.939C6.2726 17.007 6.17245 17.0651 6.06712 17.1124C5.94848 17.1657 5.82125 17.2003 5.5668 17.2697L1.66669 18.3334Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="pencil02-clip0_118_42225">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
