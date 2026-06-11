import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleBrokenUpLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenUpLeftIcon({ size = 'md', className, ...props }: ArrowCircleBrokenUpLeftIconProps) {
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
      <g clipPath="url(#arrowcirclebrokenupleft-clip0_118_39477)">
<path d="M12.158 18.0505C9.37782 18.7929 6.28851 18.0736 4.10743 15.8925C0.853065 12.6381 0.853065 7.36178 4.10743 4.1074C7.36181 0.853034 12.6382 0.853034 15.8926 4.1074C18.0737 6.28848 18.7929 9.37779 18.0505 12.158M7.50018 12.5V7.50004M7.50018 7.50004H12.5002M7.50018 7.50004L15.8333 15.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokenupleft-clip0_118_39477">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
