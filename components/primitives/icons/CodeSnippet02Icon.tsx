import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CodeSnippet02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CodeSnippet02Icon({ size = 'md', className, ...props }: CodeSnippet02IconProps) {
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
      <path d="M14.1667 14.1667L18.3333 10L14.1667 5.83333M5.83334 5.83333L1.66667 10L5.83334 14.1667M11.6667 2.5L8.33334 17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
