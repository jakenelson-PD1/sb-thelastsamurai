import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Crop02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Crop02Icon({ size = 'md', className, ...props }: Crop02IconProps) {
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
      <g clipPath="url(#crop02-clip0_118_41641)">
<path d="M8.33333 5.00008H12.3333C13.2667 5.00008 13.7335 5.00008 14.09 5.18174C14.4036 5.34152 14.6586 5.59649 14.8183 5.9101C15 6.26661 15 6.73332 15 7.66675V11.6667M1.66666 5.00008H5M15 15.0001V18.3334M18.3333 15.0001H7.66666C6.73324 15.0001 6.26653 15.0001 5.91001 14.8184C5.59641 14.6587 5.34144 14.4037 5.18166 14.0901C5 13.7336 5 13.2668 5 12.3334V1.66675" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="crop02-clip0_118_41641">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
