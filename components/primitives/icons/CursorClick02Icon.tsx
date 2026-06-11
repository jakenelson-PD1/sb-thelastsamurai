import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CursorClick02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CursorClick02Icon({ size = 'md', className, ...props }: CursorClick02IconProps) {
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
      <g clipPath="url(#cursorclick02-clip0_118_41732)">
<path d="M7.50002 2.91675V1.66675M4.21724 4.2173L3.33335 3.33341M4.21724 10.8334L3.33335 11.7173M10.8334 4.2173L11.7173 3.33341M2.91669 7.50008H1.66669M7.08335 7.08341L10.5093 17.7316L12.9167 15.3242L15.9259 18.3334L18.3334 15.926L15.3241 12.9167L17.7315 10.5093L7.08335 7.08341Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cursorclick02-clip0_118_41732">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
