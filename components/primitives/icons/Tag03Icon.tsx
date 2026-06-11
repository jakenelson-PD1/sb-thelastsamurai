import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Tag03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Tag03Icon({ size = 'md', className, ...props }: Tag03IconProps) {
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
      <path d="M17.5 9.1665L11.1716 2.83808C10.7392 2.4057 10.523 2.1895 10.2707 2.0349C10.047 1.89783 9.80317 1.79682 9.54808 1.73558C9.26033 1.6665 8.95458 1.6665 8.34317 1.6665H5M2.5 7.24984V8.89525C2.5 9.30292 2.5 9.50675 2.54605 9.69859C2.58687 9.86859 2.65422 10.0312 2.7456 10.1803C2.84867 10.3485 2.9928 10.4927 3.28105 10.7809L9.78108 17.2809C10.4411 17.9409 10.7711 18.2709 11.1517 18.3946C11.4864 18.5033 11.8469 18.5033 12.1817 18.3946C12.5622 18.2709 12.8922 17.9409 13.5522 17.2809L15.6144 15.2188C16.2744 14.5588 16.6044 14.2288 16.7281 13.8482C16.8368 13.5134 16.8368 13.1529 16.7281 12.8182C16.6044 12.4376 16.2744 12.1076 15.6144 11.4476L9.53108 5.36422C9.24283 5.07597 9.09867 4.93184 8.9305 4.82877C8.78133 4.73739 8.61875 4.67005 8.44875 4.62922C8.25691 4.58317 8.05308 4.58317 7.64543 4.58317H5.16667C4.23325 4.58317 3.76653 4.58317 3.41002 4.76483C3.09642 4.92461 2.84144 5.17958 2.68166 5.49319C2.5 5.8497 2.5 6.31641 2.5 7.24984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
