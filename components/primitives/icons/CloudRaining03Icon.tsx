import { clsx } from 'clsx';

export interface CloudRaining03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CloudRaining03Icon({ size = 20, className, ...props }: CloudRaining03IconProps) {
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
      <g clipPath="url(#cloudraining03-clip0_118_51813)">
<path d="M16.6667 12.7022C17.6717 12.0295 18.3333 10.8838 18.3333 9.58366C18.3333 7.63068 16.8404 6.0264 14.9336 5.8498C14.5435 3.4771 12.4832 1.66699 10 1.66699C7.51686 1.66699 5.45651 3.4771 5.06645 5.8498C3.15959 6.0264 1.66666 7.63068 1.66666 9.58366C1.66666 10.8838 2.32834 12.0295 3.33333 12.7022M10.2083 12.5003L7.87496 18.3337M14.2083 10.8337L11.875 16.667M7.54166 10.8337L5.20833 16.667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cloudraining03-clip0_118_51813">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
