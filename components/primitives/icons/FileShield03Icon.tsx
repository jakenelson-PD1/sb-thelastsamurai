import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FileShield03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FileShield03Icon({ size = 'md', className, ...props }: FileShield03IconProps) {
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
      <path d="M11.6666 1.66699H7.33331C5.93318 1.66699 5.23311 1.66699 4.69834 1.93948C4.22793 2.17916 3.84548 2.56161 3.6058 3.03202C3.33331 3.56679 3.33331 4.26686 3.33331 5.66699V14.3337C3.33331 15.7338 3.33331 16.4338 3.6058 16.9687C3.84548 17.4391 4.22793 17.8215 4.69834 18.0612C5.23311 18.3337 5.93318 18.3337 7.33331 18.3337H12.6666C14.0668 18.3337 14.7668 18.3337 15.3016 18.0612C15.7721 17.8215 16.1545 17.4391 16.3941 16.9687C16.6666 16.4338 16.6666 15.7338 16.6666 14.3337V6.66699M11.6666 1.66699L16.6666 6.66699M11.6666 1.66699V6.66699H16.6666M9.99998 15.0003C9.99998 15.0003 12.5 13.8087 12.5 12.0213V9.93608L10.677 9.28466C10.239 9.12774 9.75998 9.12774 9.32198 9.28466L7.49998 9.93608V12.0213C7.49998 13.8087 9.99998 15.0003 9.99998 15.0003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
