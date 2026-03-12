import { clsx } from 'clsx';

export interface ArrowCircleBrokenDownRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenDownRightIcon({ size = 20, className, ...props }: ArrowCircleBrokenDownRightIconProps) {
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
      <g clipPath="url(#arrowcirclebrokendownright-clip0_118_39425)">
<path d="M7.84206 1.94956C10.6222 1.20713 13.7115 1.92645 15.8926 4.10752C19.1469 7.3619 19.1469 12.6383 15.8926 15.8926C12.6382 19.147 7.36184 19.147 4.10746 15.8926C1.92639 13.7115 1.20707 10.6223 1.9495 7.84212M12.5001 7.50009V12.5001M12.5001 12.5001H7.50014M12.5001 12.5001L4.16664 4.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokendownright-clip0_118_39425">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
