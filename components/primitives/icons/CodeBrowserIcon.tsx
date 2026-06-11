import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CodeBrowserIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CodeBrowserIcon({ size = 'md', className, ...props }: CodeBrowserIconProps) {
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
      <path d="M18.3333 7.5H1.66666M11.6667 14.5833L13.75 12.5L11.6667 10.4167M8.33332 10.4167L6.24999 12.5L8.33332 14.5833M1.66666 6.5V13.5C1.66666 14.9002 1.66666 15.6002 1.93914 16.135C2.17882 16.6054 2.56127 16.9878 3.03168 17.2275C3.56646 17.5 4.26652 17.5 5.66666 17.5H14.3333C15.7335 17.5 16.4335 17.5 16.9683 17.2275C17.4387 16.9878 17.8212 16.6054 18.0608 16.135C18.3333 15.6002 18.3333 14.9002 18.3333 13.5V6.5C18.3333 5.09987 18.3333 4.39981 18.0608 3.86503C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5H5.66666C4.26652 2.5 3.56646 2.5 3.03168 2.77248C2.56127 3.01217 2.17882 3.39462 1.93914 3.86503C1.66666 4.3998 1.66666 5.09987 1.66666 6.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
