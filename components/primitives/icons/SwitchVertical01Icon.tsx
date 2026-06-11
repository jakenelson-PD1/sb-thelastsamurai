import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SwitchVertical01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SwitchVertical01Icon({ size = 'md', className, ...props }: SwitchVertical01IconProps) {
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
      <path d="M14.1667 3.33325V16.6666M14.1667 16.6666L10.8333 13.3333M14.1667 16.6666L17.5 13.3333M5.83333 16.6666V3.33325M5.83333 3.33325L2.5 6.66659M5.83333 3.33325L9.16667 6.66659" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
