import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Lock01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Lock01Icon({ size = 'md', className, ...props }: Lock01IconProps) {
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
      <path d="M14.1666 8.33333V6.66667C14.1666 4.36548 12.3011 2.5 9.99998 2.5C7.6988 2.5 5.83331 4.36548 5.83331 6.66667V8.33333M9.99998 12.0833V13.75M7.33331 17.5H12.6666C14.0668 17.5 14.7668 17.5 15.3016 17.2275C15.7721 16.9878 16.1545 16.6054 16.3941 16.135C16.6666 15.6002 16.6666 14.9002 16.6666 13.5V12.3333C16.6666 10.9332 16.6666 10.2332 16.3941 9.69833C16.1545 9.22792 15.7721 8.8455 15.3016 8.60583C14.7668 8.33333 14.0668 8.33333 12.6666 8.33333H7.33331C5.93318 8.33333 5.23311 8.33333 4.69834 8.60583C4.22793 8.8455 3.84548 9.22792 3.6058 9.69833C3.33331 10.2332 3.33331 10.9332 3.33331 12.3333V13.5C3.33331 14.9002 3.33331 15.6002 3.6058 16.135C3.84548 16.6054 4.22793 16.9878 4.69834 17.2275C5.23311 17.5 5.93318 17.5 7.33331 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
