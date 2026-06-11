import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Shuffle01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Shuffle01Icon({ size = 'md', className, ...props }: Shuffle01IconProps) {
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
      <path d="M15 12.5L17.5 15M17.5 15L15 17.5M17.5 15H15.4741C14.6914 15 14.3001 15 13.9448 14.8921C13.6303 14.7966 13.3378 14.6401 13.0839 14.4313C12.7971 14.1957 12.58 13.87 12.1458 13.2188L11.9444 12.9167M15 2.5L17.5 5M17.5 5L15 7.5M17.5 5H15.4741C14.6914 5 14.3001 5 13.9448 5.10787C13.6303 5.20338 13.3378 5.35995 13.0839 5.56863C12.7971 5.80436 12.58 6.12997 12.1458 6.7812L7.85413 13.2188C7.41998 13.87 7.20291 14.1957 6.91611 14.4313C6.6622 14.6401 6.36964 14.7966 6.05517 14.8921C5.69995 15 5.30861 15 4.52593 15H2.5M2.5 5H4.52593C5.30861 5 5.69995 5 6.05517 5.10787C6.36964 5.20338 6.6622 5.35995 6.91611 5.56863C7.20291 5.80436 7.41998 6.12997 7.85413 6.7812L8.05556 7.08333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
