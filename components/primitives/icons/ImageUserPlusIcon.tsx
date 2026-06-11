import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ImageUserPlusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ImageUserPlusIcon({ size = 'md', className, ...props }: ImageUserPlusIconProps) {
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
      <g clipPath="url(#imageuserplus-clip0_118_50668)">
<path d="M15.8333 6.66699V1.66699M13.3333 4.16699H18.3333M18.3333 10.0003V14.3337C18.3333 15.7338 18.3333 16.4338 18.0608 16.9687C17.8212 17.4391 17.4387 17.8215 16.9683 18.0612C16.4335 18.3337 15.7335 18.3337 14.3333 18.3337H5.66666C4.26653 18.3337 3.56646 18.3337 3.03169 18.0612C2.56128 17.8215 2.17883 17.4391 1.93915 16.9687C1.66666 16.4338 1.66666 15.7338 1.66666 14.3337V5.66699C1.66666 4.26686 1.66666 3.56679 1.93915 3.03202C2.17883 2.56161 2.56128 2.17916 3.03169 1.93948C3.56646 1.66699 4.26653 1.66699 5.66666 1.66699H10M1.78811 16.6056C2.17906 15.1992 3.469 14.167 5 14.167H10.8333C11.6077 14.167 11.995 14.167 12.317 14.2311C13.6392 14.4941 14.6729 15.5277 14.9359 16.85C15 17.172 15 17.5592 15 18.3337M11.6667 7.91699C11.6667 9.75791 10.1742 11.2503 8.33333 11.2503C6.49238 11.2503 5 9.75791 5 7.91699C5 6.07604 6.49238 4.58366 8.33333 4.58366C10.1742 4.58366 11.6667 6.07604 11.6667 7.91699Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="imageuserplus-clip0_118_50668">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
