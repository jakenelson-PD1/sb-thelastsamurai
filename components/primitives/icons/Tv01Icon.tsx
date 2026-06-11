import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Tv01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Tv01Icon({ size = 'md', className, ...props }: Tv01IconProps) {
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
      <path d="M15 14.1667V16.1667C15 16.6334 15 16.8668 14.9092 17.045C14.8292 17.2018 14.7018 17.3293 14.545 17.4092C14.3667 17.5 14.1334 17.5 13.6667 17.5H6.33332C5.86661 17.5 5.63326 17.5 5.455 17.4092C5.2982 17.3293 5.17071 17.2018 5.09081 17.045C4.99999 16.8668 4.99999 16.6334 4.99999 16.1667V14.1667M5.66666 14.1667H14.3333C15.7335 14.1667 16.4335 14.1667 16.9683 13.8942C17.4387 13.6545 17.8212 13.2721 18.0608 12.8017C18.3333 12.2668 18.3333 11.5668 18.3333 10.1667V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86503C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5H5.66666C4.26652 2.5 3.56646 2.5 3.03168 2.77248C2.56127 3.01217 2.17882 3.39462 1.93914 3.86503C1.66666 4.3998 1.66666 5.09987 1.66666 6.5V10.1667C1.66666 11.5668 1.66666 12.2668 1.93914 12.8017C2.17882 13.2721 2.56127 13.6545 3.03168 13.8942C3.56646 14.1667 4.26652 14.1667 5.66666 14.1667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
