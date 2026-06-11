import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FolderQuestionIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FolderQuestionIcon({ size = 'md', className, ...props }: FolderQuestionIconProps) {
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
      <path d="M10.8333 5.83333L9.90375 3.9741C9.63617 3.439 9.50242 3.17144 9.30284 2.97597C9.12634 2.80311 8.91359 2.67164 8.68009 2.59109C8.416 2.5 8.11685 2.5 7.51858 2.5H4.33334C3.39992 2.5 2.93321 2.5 2.57669 2.68166C2.26308 2.84144 2.00811 3.09641 1.84833 3.41002C1.66667 3.76653 1.66667 4.23325 1.66667 5.16667V5.83333M1.66667 5.83333H14.3333C15.7335 5.83333 16.4335 5.83333 16.9683 6.10582C17.4388 6.3455 17.8212 6.72795 18.0608 7.19836C18.3333 7.73313 18.3333 8.43317 18.3333 9.83333V13.5C18.3333 14.9002 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4388 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66667C4.26654 17.5 3.56647 17.5 3.0317 17.2275C2.56129 16.9878 2.17884 16.6054 1.93916 16.135C1.66667 15.6002 1.66667 14.9002 1.66667 13.5V5.83333ZM8.20842 9.7935C8.35525 9.37617 8.64509 9.02417 9.02651 8.8C9.40801 8.57575 9.8565 8.49383 10.2926 8.56867C10.7287 8.64342 11.1243 8.87017 11.4092 9.20867C11.6942 9.54717 11.8501 9.97558 11.8494 10.4181C11.8494 11.6672 9.97584 12.2917 9.97584 12.2917M10 14.7917H10.0083" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
