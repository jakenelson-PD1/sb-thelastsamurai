import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Loading03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Loading03Icon({ size = 'md', className, ...props }: Loading03IconProps) {
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
      <g clipPath="url(#loading03-clip0_118_38103)">
<path d="M2.78356 14.1664C1.74011 12.3582 2.27063 10.0537 3.99831 8.88344L4.00017 8.88152C5.38806 7.94365 7.21481 7.97512 8.57027 8.96027L11.4304 11.0398C12.7849 12.0249 14.6116 12.0564 16.0004 11.1184L16.0023 11.1166C17.7309 9.94636 18.2624 7.63996 17.217 5.83357M14.1684 17.2161C12.3601 18.2595 10.0556 17.729 8.88527 16.0014L8.88344 15.9995C7.9455 14.6116 7.97697 12.7849 8.96211 11.4294L11.0416 8.56936C12.0268 7.21477 12.0583 5.38801 11.1204 3.9992L11.1166 3.99735C9.94636 2.27059 7.63996 1.73821 5.83357 2.78352M15.8921 4.10753C19.1465 7.36199 19.1465 12.6376 15.8921 15.8921C12.6376 19.1465 7.36199 19.1465 4.10753 15.8921C0.853073 12.6376 0.853073 7.36199 4.10753 4.10753C7.36199 0.853073 12.6376 0.853073 15.8921 4.10753Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="loading03-clip0_118_38103">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
