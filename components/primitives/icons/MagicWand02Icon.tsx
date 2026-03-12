import { clsx } from 'clsx';

export interface MagicWand02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MagicWand02Icon({ size = 20, className, ...props }: MagicWand02IconProps) {
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
      <path d="M12.5 3.33341V1.66675M12.5 13.3334V11.6667M6.66667 7.50008H8.33333M16.6667 7.50008H18.3333M14.8333 9.83341L15.8333 10.8334M14.8333 5.16675L15.8333 4.16675M2.5 17.5001L10 10.0001M10.1667 5.16675L9.16667 4.16675" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
