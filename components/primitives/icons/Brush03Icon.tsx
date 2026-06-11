import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Brush03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Brush03Icon({ size = 'md', className, ...props }: Brush03IconProps) {
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
      <path d="M16.6666 8.33341V3.00008C16.6666 2.53337 16.6666 2.30001 16.5758 2.12176C16.4959 1.96496 16.3685 1.83747 16.2116 1.75757C16.0334 1.66675 15.8001 1.66675 15.3333 1.66675H4.66665C4.19994 1.66675 3.96658 1.66675 3.78832 1.75757C3.63152 1.83747 3.50404 1.96496 3.42414 2.12176C3.33331 2.30001 3.33331 2.53337 3.33331 3.00008V8.33341M16.6666 8.33341H3.33331M16.6666 8.33341V8.50008C16.6666 9.90025 16.6666 10.6002 16.3941 11.1351C16.1545 11.6055 15.7721 11.9879 15.3016 12.2276C14.7668 12.5001 14.0668 12.5001 12.6666 12.5001H7.33331C5.93318 12.5001 5.23311 12.5001 4.69834 12.2276C4.22793 11.9879 3.84548 11.6055 3.6058 11.1351C3.33331 10.6002 3.33331 9.90025 3.33331 8.50008V8.33341M12.0833 12.5001V16.2501C12.0833 17.4007 11.1506 18.3334 9.99998 18.3334C8.8494 18.3334 7.91665 17.4007 7.91665 16.2501V12.5001" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
