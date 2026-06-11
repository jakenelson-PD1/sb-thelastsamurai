import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignRight01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignRight01Icon({ size = 'md', className, ...props }: AlignRight01IconProps) {
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
      <path d="M17.5 17.5V2.5M2.5 10H14.1667M14.1667 10L8.33333 4.16667M14.1667 10L8.33333 15.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
