import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Asterisk01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Asterisk01Icon({ size = 'md', className, ...props }: Asterisk01IconProps) {
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
      <g clipPath="url(#asterisk01-clip0_118_36742)">
<path d="M10 1.66666V18.3333M15.8926 4.10744L4.10746 15.8926M18.3334 10H1.66669M15.8926 15.8926L4.10746 4.10744" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="asterisk01-clip0_118_36742">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
