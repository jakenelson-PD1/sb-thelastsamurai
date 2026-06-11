import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BarChart01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BarChart01Icon({ size = 'md', className, ...props }: BarChart01IconProps) {
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
      <path d="M15 16.6668V8.3335M10 16.6668V3.3335M5 16.6668V11.6668" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
