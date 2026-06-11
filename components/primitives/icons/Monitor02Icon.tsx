import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Monitor02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Monitor02Icon({ size = 'md', className, ...props }: Monitor02IconProps) {
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
      <path d="M6.30983 17.5C7.42216 16.9665 8.67499 16.6667 9.99999 16.6667C11.325 16.6667 12.5778 16.9665 13.6902 17.5M5.66666 14.1667H14.3333C15.7335 14.1667 16.4335 14.1667 16.9683 13.8942C17.4387 13.6545 17.8212 13.2721 18.0608 12.8017C18.3333 12.2668 18.3333 11.5668 18.3333 10.1667V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86503C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5H5.66666C4.26652 2.5 3.56646 2.5 3.03168 2.77248C2.56127 3.01217 2.17882 3.39462 1.93914 3.86503C1.66666 4.3998 1.66666 5.09987 1.66666 6.5V10.1667C1.66666 11.5668 1.66666 12.2668 1.93914 12.8017C2.17882 13.2721 2.56127 13.6545 3.03168 13.8942C3.56646 14.1667 4.26652 14.1667 5.66666 14.1667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
