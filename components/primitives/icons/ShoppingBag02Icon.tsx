import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ShoppingBag02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ShoppingBag02Icon({ size = 'md', className, ...props }: ShoppingBag02IconProps) {
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
      <path d="M13.3337 7.49984V4.99984C13.3337 3.15889 11.8412 1.6665 10.0003 1.6665C8.15935 1.6665 6.66696 3.15889 6.66696 4.99984V7.49984M2.99363 8.6265L2.49363 13.9598C2.35147 15.4763 2.28039 16.2344 2.532 16.8201C2.75305 17.3345 3.1404 17.7599 3.63198 18.028C4.19157 18.3332 4.9531 18.3332 6.47617 18.3332H13.5244C15.0475 18.3332 15.809 18.3332 16.3686 18.028C16.8602 17.7599 17.2476 17.3345 17.4686 16.8201C17.7202 16.2344 17.6492 15.4763 17.507 13.9598L17.007 8.6265C16.8869 7.34596 16.8269 6.7057 16.5389 6.22164C16.2853 5.79532 15.9106 5.4541 15.4625 5.24137C14.9537 4.99984 14.3106 4.99984 13.0244 4.99984H6.97617C5.69004 4.99984 5.04697 4.99984 4.53815 5.24137C4.09001 5.4541 3.7153 5.79532 3.46168 6.22164C3.1737 6.7057 3.11368 7.34595 2.99363 8.6265Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
