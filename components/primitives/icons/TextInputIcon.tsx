import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface TextInputIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function TextInputIcon({ size = 'md', className, ...props }: TextInputIconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M10.8334 5.83333H4.33335C3.39994 5.83333 2.93322 5.83333 2.5767 6.01499C2.2631 6.17477 2.00813 6.42974 1.84835 6.74335C1.66669 7.09987 1.66669 7.56658 1.66669 8.5V11.5C1.66669 12.4334 1.66669 12.9002 1.84835 13.2567C2.00813 13.5702 2.2631 13.8252 2.5767 13.985C2.93322 14.1667 3.39993 14.1667 4.33335 14.1667H10.8334M14.1667 5.83333H15.6667C16.6001 5.83333 17.0669 5.83333 17.4234 6.01499C17.7369 6.17477 17.9919 6.42974 18.1517 6.74335C18.3334 7.09987 18.3334 7.56658 18.3334 8.5V11.5C18.3334 12.4334 18.3334 12.9002 18.1517 13.2567C17.9919 13.5702 17.7369 13.8252 17.4234 13.985C17.0669 14.1667 16.6001 14.1667 15.6667 14.1667H14.1667M14.1667 17.5V2.5M16.25 2.50001L12.0834 2.5M16.25 17.5H12.0834" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
