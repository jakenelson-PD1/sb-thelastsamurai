import { clsx } from 'clsx';

export interface Monitor01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Monitor01Icon({ size = 20, className, ...props }: Monitor01IconProps) {
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
      <path d="M6.66667 17.5H13.3333M10 14.1667V17.5M5.66667 14.1667H14.3333C15.7335 14.1667 16.4335 14.1667 16.9683 13.8942C17.4388 13.6545 17.8212 13.2721 18.0608 12.8017C18.3333 12.2668 18.3333 11.5668 18.3333 10.1667V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86503C17.8212 3.39462 17.4388 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5H5.66667C4.26654 2.5 3.56647 2.5 3.0317 2.77248C2.56129 3.01217 2.17884 3.39462 1.93916 3.86503C1.66667 4.3998 1.66667 5.09987 1.66667 6.5V10.1667C1.66667 11.5668 1.66667 12.2668 1.93916 12.8017C2.17884 13.2721 2.56129 13.6545 3.0317 13.8942C3.56647 14.1667 4.26654 14.1667 5.66667 14.1667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
