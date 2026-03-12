import { clsx } from 'clsx';

export interface LifeBuoy02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LifeBuoy02Icon({ size = 20, className, ...props }: LifeBuoy02IconProps) {
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
      <g clipPath="url(#lifebuoy02-clip0_118_39268)">
<path d="M7.0537 7.05369L4.10743 4.10743M4.10743 15.8925L7.05372 12.9462M12.9462 12.9462L15.8926 15.8925M15.8926 4.10738L12.9462 7.05367M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39758 5.39761 1.66663 9.99999 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996ZM14.1667 9.99996C14.1667 12.3011 12.3012 14.1666 9.99999 14.1666C7.69881 14.1666 5.83332 12.3011 5.83332 9.99996C5.83332 7.69878 7.69881 5.83329 9.99999 5.83329C12.3012 5.83329 14.1667 7.69878 14.1667 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="lifebuoy02-clip0_118_39268">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
