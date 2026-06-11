import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleBrokenUpRightIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenUpRightIcon({ size = 'md', className, ...props }: ArrowCircleBrokenUpRightIconProps) {
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
      <g clipPath="url(#arrowcirclebrokenupright-clip0_118_39490)">
<path d="M1.94947 12.158C1.20704 9.37779 1.92635 6.28848 4.10743 4.1074C7.3618 0.853034 12.6382 0.853034 15.8926 4.1074C19.1469 7.36178 19.1469 12.6381 15.8926 15.8925C13.7115 18.0736 10.6222 18.7929 7.84203 18.0505M12.5001 12.5V7.50004M12.5001 7.50004H7.50011M12.5001 7.50004L4.16661 15.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokenupright-clip0_118_39490">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
