import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Building05IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Building05Icon({ size = 'md', className, ...props }: Building05IconProps) {
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
      <path d="M10.8333 9.16667H14.8333C15.7667 9.16667 16.2335 9.16667 16.59 9.34833C16.9036 9.50808 17.1586 9.76308 17.3183 10.0767C17.5 10.4332 17.5 10.8999 17.5 11.8333V17.5M10.8333 17.5V5.16667C10.8333 4.23325 10.8333 3.76653 10.6517 3.41002C10.4919 3.09641 10.2369 2.84144 9.92333 2.68166C9.56683 2.5 9.10008 2.5 8.16666 2.5H5.16666C4.23325 2.5 3.76653 2.5 3.41001 2.68166C3.09641 2.84144 2.84144 3.09641 2.68166 3.41002C2.5 3.76653 2.5 4.23325 2.5 5.16667V17.5M18.3333 17.5H1.66666M5.41666 5.83333H7.91666M5.41666 9.16667H7.91666M5.41666 12.5H7.91666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
