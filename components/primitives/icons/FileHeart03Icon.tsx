import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FileHeart03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FileHeart03Icon({ size = 'md', className, ...props }: FileHeart03IconProps) {
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
      <path d="M11.6666 1.89136V5.33347C11.6666 5.80018 11.6666 6.03354 11.7575 6.2118C11.8374 6.3686 11.9648 6.49608 12.1216 6.57598C12.2999 6.66681 12.5332 6.66681 13 6.66681H16.4421M11.6666 1.66675H7.33331C5.93318 1.66675 5.23311 1.66675 4.69834 1.93923C4.22793 2.17891 3.84548 2.56136 3.6058 3.03177C3.33331 3.56655 3.33331 4.26661 3.33331 5.66675V14.3334C3.33331 15.7336 3.33331 16.4336 3.6058 16.9684C3.84548 17.4388 4.22793 17.8212 4.69834 18.0609C5.23311 18.3334 5.93318 18.3334 7.33331 18.3334H12.6666C14.0668 18.3334 14.7668 18.3334 15.3016 18.0609C15.7721 17.8212 16.1545 17.4388 16.3941 16.9684C16.6666 16.4336 16.6666 15.7336 16.6666 14.3334V6.66675L11.6666 1.66675ZM9.99773 9.85891C9.33123 9.10141 8.2199 8.89766 7.38488 9.59125C6.54986 10.2849 6.4323 11.4447 7.08805 12.265C7.74379 13.0854 9.99773 15.0001 9.99773 15.0001C9.99773 15.0001 12.2516 13.0854 12.9073 12.265C13.5631 11.4447 13.4599 10.2777 12.6105 9.59125C11.7611 8.90491 10.6641 9.10141 9.99773 9.85891Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
