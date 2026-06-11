import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Monitor03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Monitor03Icon({ size = 'md', className, ...props }: Monitor03IconProps) {
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
      <path d="M1.66666 11.6667H18.3333M6.66666 17.5H13.3333M5.66666 15H14.3333C15.7335 15 16.4335 15 16.9683 14.7275C17.4387 14.4878 17.8212 14.1054 18.0608 13.635C18.3333 13.1002 18.3333 12.4002 18.3333 11V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86503C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5H5.66666C4.26652 2.5 3.56646 2.5 3.03168 2.77248C2.56127 3.01217 2.17882 3.39462 1.93914 3.86503C1.66666 4.3998 1.66666 5.09987 1.66666 6.5V11C1.66666 12.4002 1.66666 13.1002 1.93914 13.635C2.17882 14.1054 2.56127 14.4878 3.03168 14.7275C3.56646 15 4.26652 15 5.66666 15Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
