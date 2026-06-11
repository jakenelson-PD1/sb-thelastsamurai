import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CheckIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CheckIcon({ size = 'md', className, ...props }: CheckIconProps) {
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
      <g clipPath="url(#check-clip0_118_36956)">
<mask id="check-mask0_118_36956" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
<path d="M19 1V19H1V1H19Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</mask>
<g mask="url(#check-mask0_118_36956)">
<path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
<defs>
<clipPath id="check-clip0_118_36956">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
