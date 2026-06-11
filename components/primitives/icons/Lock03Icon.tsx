import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Lock03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Lock03Icon({ size = 'md', className, ...props }: Lock03IconProps) {
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
      <path d="M14.1667 9.16667V6.66667C14.1667 4.36548 12.3012 2.5 9.99999 2.5C7.69881 2.5 5.83333 4.36548 5.83333 6.66667V9.16667M7.33333 17.5H12.6667C14.0668 17.5 14.7668 17.5 15.3017 17.2275C15.7721 16.9878 16.1545 16.6054 16.3942 16.135C16.6667 15.6002 16.6667 14.9002 16.6667 13.5V13.1667C16.6667 11.7665 16.6667 11.0665 16.3942 10.5317C16.1545 10.0612 15.7721 9.67883 15.3017 9.43917C14.7668 9.16667 14.0668 9.16667 12.6667 9.16667H7.33333C5.93319 9.16667 5.23313 9.16667 4.69835 9.43917C4.22794 9.67883 3.8455 10.0612 3.60581 10.5317C3.33333 11.0665 3.33333 11.7665 3.33333 13.1667V13.5C3.33333 14.9002 3.33333 15.6002 3.60581 16.135C3.8455 16.6054 4.22794 16.9878 4.69835 17.2275C5.23313 17.5 5.93319 17.5 7.33333 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
