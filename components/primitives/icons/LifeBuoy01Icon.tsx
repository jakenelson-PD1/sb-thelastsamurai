import { clsx } from 'clsx';

export interface LifeBuoy01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LifeBuoy01Icon({ size = 20, className, ...props }: LifeBuoy01IconProps) {
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
      <g clipPath="url(#lifebuoy01-clip0_118_39255)">
<path d="M7.61354 7.61353L4.10743 4.10743M4.10743 15.8925L7.63996 12.36M12.3842 12.3865L15.8903 15.8925M15.8903 4.10743L12.3572 7.64048M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39758 5.39761 1.66663 9.99999 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996ZM13.3333 9.99996C13.3333 11.8409 11.8409 13.3333 9.99999 13.3333C8.15904 13.3333 6.66666 11.8409 6.66666 9.99996C6.66666 8.15901 8.15904 6.66663 9.99999 6.66663C11.8409 6.66663 13.3333 8.15901 13.3333 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="lifebuoy01-clip0_118_39255">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
