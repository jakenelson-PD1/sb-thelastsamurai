import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LockKeyholeCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LockKeyholeCircleIcon({ size = 'md', className, ...props }: LockKeyholeCircleIconProps) {
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
      <g clipPath="url(#lockkeyholecircle-clip0_118_49372)">
<path d="M9.99999 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99999 1.66699C5.39761 1.66699 1.66666 5.39795 1.66666 10.0003C1.66666 14.6027 5.39761 18.3337 9.99999 18.3337Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.443 10.9962C11.3842 10.8199 11.3547 10.7317 11.3563 10.6596C11.3579 10.5837 11.3681 10.5439 11.403 10.4766C11.4363 10.4125 11.525 10.3298 11.7027 10.1646C12.1932 9.70815 12.5 9.0569 12.5 8.33398C12.5 6.95328 11.3807 5.83398 10 5.83398C8.61925 5.83398 7.5 6.95328 7.5 8.33398C7.5 9.0569 7.80682 9.70815 8.29734 10.1646C8.475 10.3298 8.56375 10.4125 8.597 10.4766C8.63192 10.5439 8.64208 10.5837 8.64367 10.6596C8.64525 10.7317 8.61583 10.8199 8.557 10.9962L7.79249 13.2898C7.69374 13.5861 7.64437 13.7342 7.67397 13.8522C7.69989 13.9553 7.76432 14.0447 7.85403 14.102C7.95652 14.1673 8.11267 14.1673 8.42492 14.1673H11.5751C11.8873 14.1673 12.0435 14.1673 12.146 14.102C12.2357 14.0447 12.3001 13.9553 12.326 13.8522C12.3557 13.7342 12.3063 13.5861 12.2075 13.2898L11.443 10.9962Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="lockkeyholecircle-clip0_118_49372">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
