import { clsx } from 'clsx';

export interface Monitor04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Monitor04Icon({ size = 20, className, ...props }: Monitor04IconProps) {
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
      <path d="M12.5 14.1667V17.5H7.50002V14.1667M4.33335 14.1667H15.6667C16.6001 14.1667 17.0669 14.1667 17.4234 13.985C17.7369 13.8252 17.9919 13.5702 18.1517 13.2567C18.3334 12.9002 18.3334 12.4334 18.3334 11.5V5.16667C18.3334 4.23325 18.3334 3.76653 18.1517 3.41002C17.9919 3.09641 17.7369 2.84144 17.4234 2.68166C17.0669 2.5 16.6001 2.5 15.6667 2.5H4.33335C3.39993 2.5 2.93322 2.5 2.5767 2.68166C2.2631 2.84144 2.00813 3.09641 1.84835 3.41002C1.66669 3.76653 1.66669 4.23324 1.66669 5.16667V11.5C1.66669 12.4334 1.66669 12.9002 1.84835 13.2567C2.00813 13.5702 2.2631 13.8252 2.5767 13.985C2.93322 14.1667 3.39994 14.1667 4.33335 14.1667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
