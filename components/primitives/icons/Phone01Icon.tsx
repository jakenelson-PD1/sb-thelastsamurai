import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Phone01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Phone01Icon({ size = 'md', className, ...props }: Phone01IconProps) {
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
      <path d="M10 14.5832H10.0084M6.83335 18.3332H13.1667C14.1001 18.3332 14.5669 18.3332 14.9234 18.1515C15.2369 17.9918 15.4919 17.7368 15.6517 17.4232C15.8334 17.0667 15.8334 16.5999 15.8334 15.6665V4.33317C15.8334 3.39975 15.8334 2.93304 15.6517 2.57652C15.4919 2.26291 15.2369 2.00795 14.9234 1.84816C14.5669 1.6665 14.1001 1.6665 13.1667 1.6665H6.83335C5.89994 1.6665 5.43322 1.6665 5.0767 1.84816C4.7631 2.00795 4.50813 2.26291 4.34835 2.57652C4.16669 2.93304 4.16669 3.39975 4.16669 4.33317V15.6665C4.16669 16.5999 4.16669 17.0667 4.34835 17.4232C4.50813 17.7368 4.7631 17.9918 5.0767 18.1515C5.43322 18.3332 5.89993 18.3332 6.83335 18.3332ZM10.4167 14.5832C10.4167 14.8133 10.2301 14.9998 10 14.9998C9.76994 14.9998 9.58335 14.8133 9.58335 14.5832C9.58335 14.3531 9.76994 14.1665 10 14.1665C10.2301 14.1665 10.4167 14.3531 10.4167 14.5832Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
