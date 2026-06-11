import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PaintPourIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PaintPourIcon({ size = 'md', className, ...props }: PaintPourIconProps) {
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
      <g clipPath="url(#paintpour-clip0_118_42096)">
<path d="M13.3331 9.16675H1.66641M8.33308 3.33341L6.66641 1.66675M11.6664 18.3334H1.66641M18.3331 13.3334C18.3331 14.2539 17.5869 15.0001 16.6664 15.0001C15.7459 15.0001 14.9997 14.2539 14.9997 13.3334C14.9997 12.4129 16.6664 10.8334 16.6664 10.8334C16.6664 10.8334 18.3331 12.4129 18.3331 13.3334ZM7.49975 2.50008L13.2236 8.22394C13.5536 8.55391 13.7187 8.719 13.7804 8.90925C13.8348 9.07658 13.8348 9.25691 13.7804 9.42425C13.7187 9.6145 13.5536 9.77958 13.2236 10.1096L9.38533 13.9478C8.72533 14.6078 8.39533 14.9378 8.01477 15.0615C7.68004 15.1702 7.31946 15.1702 6.98471 15.0615C6.60417 14.9378 6.27416 14.6078 5.61413 13.9478L2.7187 11.0523C2.05866 10.3923 1.72866 10.0623 1.60501 9.68175C1.49625 9.347 1.49625 8.9865 1.60501 8.65175C1.72866 8.27117 2.05867 7.94116 2.7187 7.28113L7.49975 2.50008Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="paintpour-clip0_118_42096">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
