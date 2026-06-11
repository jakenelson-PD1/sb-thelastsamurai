import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Grid02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Grid02Icon({ size = 'md', className, ...props }: Grid02IconProps) {
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
      <path d="M6.66667 2.5H5.16667C4.23325 2.5 3.76653 2.5 3.41002 2.68166C3.09641 2.84144 2.84144 3.09641 2.68166 3.41002C2.5 3.76653 2.5 4.23325 2.5 5.16667V6.66667M6.66667 17.5H5.16667C4.23325 17.5 3.76653 17.5 3.41002 17.3183C3.09641 17.1586 2.84144 16.9036 2.68166 16.59C2.5 16.2335 2.5 15.7667 2.5 14.8333V13.3333M17.5 6.66667V5.16667C17.5 4.23325 17.5 3.76653 17.3183 3.41002C17.1586 3.09641 16.9036 2.84144 16.59 2.68166C16.2335 2.5 15.7667 2.5 14.8333 2.5H13.3333M17.5 13.3333V14.8333C17.5 15.7667 17.5 16.2335 17.3183 16.59C17.1586 16.9036 16.9036 17.1586 16.59 17.3183C16.2335 17.5 15.7667 17.5 14.8333 17.5H13.3333M10 14.1667V5.83333M5.83333 10H14.1667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
