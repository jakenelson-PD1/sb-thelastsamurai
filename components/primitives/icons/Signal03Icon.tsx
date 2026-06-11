import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Signal03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Signal03Icon({ size = 'md', className, ...props }: Signal03IconProps) {
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
      <path d="M8.82149 11.1783C8.17061 10.5275 8.17061 9.47217 8.82149 8.82134C9.47232 8.17045 10.5277 8.17045 11.1785 8.82134C11.8294 9.47217 11.8294 10.5275 11.1785 11.1783M6.46446 13.5353C4.51183 11.5828 4.51183 8.41692 6.46446 6.4643C8.41707 4.51168 11.5829 4.51168 13.5355 6.4643C15.4882 8.41692 15.4882 11.5828 13.5355 13.5353M4.10743 15.8924C0.853065 12.638 0.853065 7.36165 4.10743 4.10728C7.36181 0.852912 12.6382 0.852912 15.8926 4.10728C19.1469 7.36165 19.1469 12.638 15.8926 15.8924" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
