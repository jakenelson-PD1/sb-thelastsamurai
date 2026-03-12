import { clsx } from 'clsx';

export interface Star04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Star04Icon({ size = 20, className, ...props }: Star04IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#star04-clip0_118_50266)">
<path d="M10 1.66699L11.6767 6.02623C11.9117 6.63726 12.0292 6.94277 12.2119 7.19975C12.3739 7.42751 12.5729 7.6265 12.8006 7.78845C13.0576 7.97118 13.3631 8.08868 13.9741 8.32369L18.3334 10.0003L13.9741 11.677C13.3631 11.912 13.0576 12.0295 12.8006 12.2122C12.5729 12.3742 12.3739 12.5732 12.2119 12.8009C12.0292 13.0579 11.9117 13.3634 11.6767 13.9744L10 18.3337L8.32339 13.9744C8.08838 13.3634 7.97088 13.0579 7.78815 12.8009C7.6262 12.5732 7.4272 12.3742 7.19945 12.2122C6.94246 12.0295 6.63695 11.912 6.02593 11.677L1.66669 10.0003L6.02592 8.32369C6.63695 8.08868 6.94246 7.97118 7.19945 7.78845C7.4272 7.6265 7.6262 7.42751 7.78815 7.19975C7.97088 6.94277 8.08838 6.63725 8.32339 6.02623L10 1.66699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="star04-clip0_118_50266">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
