import { clsx } from 'clsx';

export interface Contrast03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Contrast03Icon({ size = 20, className, ...props }: Contrast03IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#contrast03-clip0_118_41613)">
<path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3333 7.0834C13.3333 10.5351 10.5351 13.3334 7.08334 13.3334C6.57112 13.3334 6.0733 13.2718 5.59686 13.1556C6.57988 14.5248 8.18579 15.4167 10 15.4167C12.9916 15.4167 15.4167 12.9916 15.4167 10.0001C15.4167 8.18585 14.5248 6.57994 13.1555 5.59692C13.2718 6.07336 13.3333 6.57118 13.3333 7.0834Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="contrast03-clip0_118_41613">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
