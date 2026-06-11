import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ClockSnoozeIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ClockSnoozeIcon({ size = 'md', className, ...props }: ClockSnoozeIconProps) {
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
      <g clipPath="url(#clocksnooze-clip0_118_51604)">
<path d="M13.75 14.167H17.9167L13.75 18.3337H17.9167M18.2922 10.8337C18.3194 10.5596 18.3334 10.2816 18.3334 10.0003C18.3334 5.39795 14.6024 1.66699 10 1.66699C5.39765 1.66699 1.66669 5.39795 1.66669 10.0003C1.66669 14.6027 5.39765 18.3337 10 18.3337C10.1398 18.3337 10.2787 18.3302 10.4167 18.3234C10.5565 18.3166 10.6954 18.3062 10.8334 18.2925M10 5.00033V10.0003L13.1154 11.558" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clocksnooze-clip0_118_51604">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
