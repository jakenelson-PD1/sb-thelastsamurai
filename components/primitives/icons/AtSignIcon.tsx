import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AtSignIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AtSignIcon({ size = 'md', className, ...props }: AtSignIconProps) {
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
      <g clipPath="url(#atsign-clip0_118_36768)">
<path d="M13.3333 6.66666V10.8333C13.3333 11.4963 13.5967 12.1322 14.0656 12.6011C14.5344 13.0699 15.1702 13.3333 15.8333 13.3333C16.4963 13.3333 17.1322 13.0699 17.6011 12.6011C18.0699 12.1322 18.3333 11.4963 18.3333 10.8333V10C18.3332 8.11918 17.6968 6.29372 16.5277 4.82043C15.3586 3.34715 13.7254 2.31267 11.8938 1.88524C10.0622 1.4578 8.13992 1.66252 6.43942 2.46613C4.73894 3.26973 3.3603 4.62496 2.52768 6.31142C1.69506 7.9979 1.45744 9.91642 1.85344 11.7551C2.24944 13.5937 3.25578 15.2443 4.70882 16.4386C6.16187 17.6327 7.97616 18.3002 9.85672 18.3326C11.7372 18.3649 13.5734 17.7602 15.0666 16.6167M13.3333 10C13.3333 11.8409 11.8409 13.3333 9.99997 13.3333C8.15902 13.3333 6.66664 11.8409 6.66664 10C6.66664 8.15904 8.15902 6.66666 9.99997 6.66666C11.8409 6.66666 13.3333 8.15904 13.3333 10Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="atsign-clip0_118_36768">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
