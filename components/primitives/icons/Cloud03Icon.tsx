import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Cloud03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Cloud03Icon({ size = 'md', className, ...props }: Cloud03IconProps) {
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
      <path d="M7.91666 15.833C4.46487 15.833 1.66666 13.0348 1.66666 9.58301C1.66666 6.13122 4.46487 3.33301 7.91666 3.33301C10.3189 3.33301 12.4046 4.68829 13.4508 6.67595C13.5497 6.66957 13.6495 6.66634 13.75 6.66634C16.2813 6.66634 18.3333 8.71834 18.3333 11.2497C18.3333 13.781 16.2813 15.833 13.75 15.833C11.6237 15.833 10.102 15.833 7.91666 15.833Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
