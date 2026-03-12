import { clsx } from 'clsx';

export interface Globe05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Globe05Icon({ size = 20, className, ...props }: Globe05IconProps) {
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
      <g clipPath="url(#globe05-clip0_118_50948)">
<path d="M12.5 2.04849C11.7108 1.80062 10.871 1.66699 10 1.66699C5.39762 1.66699 1.66666 5.39795 1.66666 10.0003C1.66666 14.6027 5.39762 18.3337 10 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 8.57091 17.9734 7.22551 17.3392 6.04987M14.1667 4.79199H14.1708M8.75008 18.2406L8.75016 16.4044C8.75016 16.305 8.78575 16.2088 8.85041 16.1333L10.9219 13.7165C11.0922 13.5179 11.0394 13.2133 10.8123 13.0836L8.43208 11.7234C8.36741 11.6865 8.31386 11.6329 8.27695 11.5682L6.72538 8.84916C6.64463 8.70766 6.48881 8.62624 6.32652 8.64066L1.72015 9.05091M17.5 5.00033C17.5 6.84128 15.8333 8.33366 14.1667 10.0003C12.5 8.33366 10.8333 6.84128 10.8333 5.00033C10.8333 3.15938 12.3257 1.66699 14.1667 1.66699C16.0076 1.66699 17.5 3.15938 17.5 5.00033ZM14.375 4.79199C14.375 4.90705 14.2817 5.00033 14.1667 5.00033C14.0516 5.00033 13.9583 4.90705 13.9583 4.79199C13.9583 4.67693 14.0516 4.58366 14.1667 4.58366C14.2817 4.58366 14.375 4.67693 14.375 4.79199Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="globe05-clip0_118_50948">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
