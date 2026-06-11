import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowCircleUpLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleUpLeftIcon({ size = 'md', className, ...props }: ArrowCircleUpLeftIconProps) {
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
      <g clipPath="url(#arrowcircleupleft-clip0_118_39581)">
<path d="M7.50015 12.5V7.5M7.50015 7.5H12.5002M7.50015 7.5L12.5002 12.4999M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39758 5.39761 1.66663 9.99999 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcircleupleft-clip0_118_39581">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
