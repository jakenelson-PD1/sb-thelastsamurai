import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignHorizontalCentre01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignHorizontalCentre01Icon({ size = 'md', className, ...props }: AlignHorizontalCentre01IconProps) {
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
      <path d="M9.99999 2.5V17.5M18.3333 10H12.9167M12.9167 10L16.25 13.3333M12.9167 10L16.25 6.66667M1.66666 10H7.08332M7.08332 10L3.74999 13.3333M7.08332 10L3.74999 6.66667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
