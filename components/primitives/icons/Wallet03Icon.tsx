import { clsx } from 'clsx';

export interface Wallet03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Wallet03Icon({ size = 20, className, ...props }: Wallet03IconProps) {
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
      <path d="M13.75 11.6667H13.7583M2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V7.5C17.5 6.57952 16.7538 5.83333 15.8333 5.83333H4.16667C3.24619 5.83333 2.5 5.08714 2.5 4.16667ZM2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H14.1667M14.1667 11.6667C14.1667 11.8967 13.9801 12.0833 13.75 12.0833C13.5199 12.0833 13.3333 11.8967 13.3333 11.6667C13.3333 11.4366 13.5199 11.25 13.75 11.25C13.9801 11.25 14.1667 11.4366 14.1667 11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
