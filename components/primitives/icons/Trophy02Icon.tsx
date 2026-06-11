import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Trophy02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Trophy02Icon({ size = 'md', className, ...props }: Trophy02IconProps) {
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
      <path d="M10 14.1667C7.00848 14.1667 4.58335 11.7416 4.58335 8.75V3.7963C4.58335 3.36449 4.58335 3.14859 4.66143 2.98115C4.74423 2.80359 4.88695 2.66087 5.0645 2.57807C5.23195 2.5 5.44785 2.5 5.87965 2.5H14.1204C14.5522 2.5 14.7681 2.5 14.9355 2.57807C15.1131 2.66087 15.2558 2.80359 15.3386 2.98115C15.4167 3.14859 15.4167 3.36449 15.4167 3.7963V8.75C15.4167 11.7416 12.9916 14.1667 10 14.1667ZM10 14.1667V17.5M14.1667 17.5H5.83335M18.3334 4.16667V8.33333M1.66669 4.16667V8.33333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
