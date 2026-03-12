import { clsx } from 'clsx';

export interface ArrowCircleBrokenDownLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenDownLeftIcon({ size = 20, className, ...props }: ArrowCircleBrokenDownLeftIconProps) {
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
      <g clipPath="url(#arrowcirclebrokendownleft-clip0_118_39412)">
<path d="M7.50021 7.50009V12.5001M7.50021 12.5001H12.5002M7.50021 12.5001L15.8334 4.1667M18.0505 7.84212C18.7929 10.6223 18.0737 13.7115 15.8926 15.8926C12.6382 19.147 7.36184 19.147 4.10746 15.8926C0.853095 12.6383 0.853095 7.3619 4.10746 4.10752C6.28855 1.92645 9.37785 1.20713 12.158 1.94956" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokendownleft-clip0_118_39412">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
