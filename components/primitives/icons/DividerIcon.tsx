import { clsx } from 'clsx';

export interface DividerIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DividerIcon({ size = 20, className, ...props }: DividerIconProps) {
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
      <path d="M2.5 10H2.50833M6.25 10H6.25833M13.75 10H13.7583M10 10H10.0083M17.5 10H17.5083M17.5 17.5V16.8333C17.5 15.8999 17.5 15.4332 17.3183 15.0767C17.1586 14.7631 16.9036 14.5081 16.59 14.3483C16.2335 14.1667 15.7667 14.1667 14.8333 14.1667H5.16667C4.23325 14.1667 3.76653 14.1667 3.41002 14.3483C3.09642 14.5081 2.84144 14.7631 2.68166 15.0767C2.5 15.4332 2.5 15.8999 2.5 16.8333V17.5M17.5 2.5V3.16667C17.5 4.10008 17.5 4.5668 17.3183 4.92332C17.1586 5.23692 16.9036 5.49189 16.59 5.65167C16.2335 5.83333 15.7667 5.83333 14.8333 5.83333H5.16667C4.23325 5.83333 3.76653 5.83333 3.41002 5.65167C3.09641 5.49189 2.84144 5.23692 2.68166 4.92332C2.5 4.5668 2.5 4.10009 2.5 3.16667V2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
