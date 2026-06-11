import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Cryptocurrency02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Cryptocurrency02Icon({ size = 'md', className, ...props }: Cryptocurrency02IconProps) {
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
      <path d="M14.8983 16.7416C13.4745 17.776 11.7598 18.3332 10 18.3332C8.24018 18.3332 6.52553 17.776 5.1018 16.7416M13.6531 2.50985C15.2348 3.2813 16.5318 4.5337 17.3579 6.08753C18.1841 7.64137 18.4972 9.41683 18.2523 11.1596M1.74785 11.1595C1.50294 9.41683 1.816 7.64129 2.6422 6.08745C3.46838 4.53362 4.76527 3.28122 6.347 2.50977M9.52859 5.4712L5.47141 9.52842C5.30641 9.69342 5.2239 9.77592 5.19299 9.871C5.1658 9.95475 5.1658 10.0448 5.19299 10.1286C5.2239 10.2237 5.30641 10.3062 5.47141 10.4712L9.52859 14.5284C9.69359 14.6934 9.77609 14.7759 9.87125 14.8068C9.95492 14.834 10.0451 14.834 10.1288 14.8068C10.2239 14.7759 10.3064 14.6934 10.4714 14.5284L14.5286 10.4712C14.6936 10.3062 14.7761 10.2237 14.807 10.1286C14.8343 10.0448 14.8343 9.95475 14.807 9.871C14.7761 9.77592 14.6936 9.69342 14.5286 9.52842L10.4714 5.4712C10.3064 5.30619 10.2239 5.22369 10.1288 5.19278C10.0451 5.16559 9.95492 5.16559 9.87125 5.19278C9.77609 5.22369 9.69359 5.30619 9.52859 5.4712Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
