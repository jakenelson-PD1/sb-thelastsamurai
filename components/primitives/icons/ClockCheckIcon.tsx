import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ClockCheckIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ClockCheckIcon({ size = 'md', className, ...props }: ClockCheckIconProps) {
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
      <g clipPath="url(#clockcheck-clip0_118_51552)">
<path d="M12.0833 15.8337L13.75 17.5003L17.5 13.7503M18.3209 10.4586C18.3292 10.3068 18.3333 10.1541 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 10 1.66699C5.39762 1.66699 1.66666 5.39795 1.66666 10.0003C1.66666 14.5298 5.28042 18.2153 9.78208 18.3308M10 5.00033V10.0003L13.1153 11.558" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clockcheck-clip0_118_51552">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
