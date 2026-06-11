import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Ticket02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Ticket02Icon({ size = 'md', className, ...props }: Ticket02IconProps) {
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
      <path d="M6.66666 6.66634V5.83301M6.66666 10.4163V9.58301M6.66666 14.1663V13.333M5.66666 16.6663H14.3333C15.7335 16.6663 16.4335 16.6663 16.9683 16.3938C17.4387 16.1542 17.8212 15.7718 18.0608 15.3013C18.3333 14.7665 18.3333 14.0665 18.3333 12.6663V7.33301C18.3333 5.93287 18.3333 5.23281 18.0608 4.69803C17.8212 4.22762 17.4387 3.84517 16.9683 3.60549C16.4335 3.33301 15.7335 3.33301 14.3333 3.33301H5.66666C4.26653 3.33301 3.56646 3.33301 3.03169 3.60549C2.56128 3.84517 2.17883 4.22762 1.93915 4.69803C1.66666 5.23281 1.66666 5.93287 1.66666 7.33301V12.6663C1.66666 14.0665 1.66666 14.7665 1.93915 15.3013C2.17883 15.7718 2.56128 16.1542 3.03169 16.3938C3.56646 16.6663 4.26653 16.6663 5.66666 16.6663Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
