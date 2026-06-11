import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FileQuestion03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FileQuestion03Icon({ size = 'md', className, ...props }: FileQuestion03IconProps) {
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
      <path d="M11.6666 1.89136V5.33347C11.6666 5.80018 11.6666 6.03354 11.7575 6.2118C11.8374 6.3686 11.9648 6.49608 12.1216 6.57598C12.2999 6.66681 12.5332 6.66681 13 6.66681H16.4421M8.2083 10.0019C8.35515 9.58458 8.6449 9.23258 9.0264 9.00841C9.4079 8.78416 9.8564 8.70225 10.2925 8.77708C10.7286 8.85183 11.1241 9.07858 11.4091 9.41708C11.6941 9.75558 11.85 10.184 11.8493 10.6265C11.8493 11.8756 9.97573 12.5001 9.97573 12.5001M9.99998 15.0001H10.0083M11.6666 1.66675H7.33331C5.93318 1.66675 5.23311 1.66675 4.69834 1.93923C4.22793 2.17891 3.84548 2.56136 3.6058 3.03177C3.33331 3.56655 3.33331 4.26661 3.33331 5.66675V14.3334C3.33331 15.7336 3.33331 16.4336 3.6058 16.9684C3.84548 17.4388 4.22793 17.8212 4.69834 18.0609C5.23311 18.3334 5.93318 18.3334 7.33331 18.3334H12.6666C14.0668 18.3334 14.7668 18.3334 15.3016 18.0609C15.7721 17.8212 16.1545 17.4388 16.3941 16.9684C16.6666 16.4336 16.6666 15.7336 16.6666 14.3334V6.66675L11.6666 1.66675Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
