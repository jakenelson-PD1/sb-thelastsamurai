import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AnchorIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AnchorIcon({ size = 'md', className, ...props }: AnchorIconProps) {
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
      <g clipPath="url(#anchor-clip0_118_36716)">
<path d="M9.99999 6.66666C11.3807 6.66666 12.5 5.54737 12.5 4.16666C12.5 2.78596 11.3807 1.66666 9.99999 1.66666C8.61924 1.66666 7.49999 2.78596 7.49999 4.16666C7.49999 5.54737 8.61924 6.66666 9.99999 6.66666ZM9.99999 6.66666V18.3333M9.99999 18.3333C7.78986 18.3333 5.67024 17.4553 4.10743 15.8926C2.54463 14.3297 1.66666 12.2102 1.66666 10H4.16666M9.99999 18.3333C12.2102 18.3333 14.3297 17.4553 15.8926 15.8926C17.4553 14.3297 18.3333 12.2102 18.3333 10H15.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="anchor-clip0_118_36716">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
