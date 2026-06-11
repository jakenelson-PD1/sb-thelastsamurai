import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LinkBroken02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LinkBroken02Icon({ size = 'md', className, ...props }: LinkBroken02IconProps) {
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
      <g clipPath="url(#linkbroken02-clip0_118_38038)">
<path d="M7.08334 12.9167L12.9167 7.08334M7.5 3.33335V1.66669M12.5 16.6667V18.3334M3.33334 7.50002H1.66667M16.6667 12.5H18.3333M4.09518 4.0952L2.91667 2.91669M15.9048 15.9048L17.0833 17.0833M10 14.714L8.23226 16.4818C6.93052 17.7835 4.81997 17.7835 3.51822 16.4818C2.21647 15.18 2.21647 13.0694 3.51822 11.7677L5.28599 9.99994M14.7141 9.99994L16.4818 8.23218C17.7836 6.93043 17.7836 4.81988 16.4818 3.51814C15.1801 2.21639 13.0696 2.21639 11.7678 3.51814L10 5.2859" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="linkbroken02-clip0_118_38038">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
