import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Download04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Download04Icon({ size = 'md', className, ...props }: Download04IconProps) {
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
      <path d="M6.66667 9.99997L10 13.3333M10 13.3333L13.3333 9.99997M10 13.3333V5.66664C10 4.50771 10 3.92825 9.54125 3.27947C9.23642 2.8484 8.35884 2.31637 7.83565 2.24549C7.04825 2.1388 6.74923 2.29479 6.1512 2.60675C3.48611 3.997 1.66667 6.786 1.66667 9.99997C1.66667 14.6023 5.39763 18.3333 10 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99997C18.3333 6.91546 16.6575 4.22236 14.1667 2.78149" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
