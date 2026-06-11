import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignVerticalCenter01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignVerticalCenter01Icon({ size = 'md', className, ...props }: AlignVerticalCenter01IconProps) {
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
      <path d="M2.5 9.99984H17.5M10 1.6665V7.08317M10 7.08317L13.3333 3.74984M10 7.08317L6.66667 3.74984M10 18.3332V12.9165M10 12.9165L13.3333 16.2498M10 12.9165L6.66667 16.2498" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
