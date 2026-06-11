import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Thermometer03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Thermometer03Icon({ size = 'md', className, ...props }: Thermometer03IconProps) {
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
      <path d="M17.5 2.50033H12.5M17.5 5.83366H12.5M17.5 9.16699H12.5M4.58332 11.4652V3.75033C4.58332 2.59973 5.51606 1.66699 6.66666 1.66699C7.81725 1.66699 8.74999 2.59973 8.74999 3.75033V11.4652C9.75499 12.1378 10.4167 13.2835 10.4167 14.5837C10.4167 16.6547 8.73774 18.3337 6.66666 18.3337C4.59559 18.3337 2.91666 16.6547 2.91666 14.5837C2.91666 13.2835 3.57833 12.1378 4.58332 11.4652ZM7.49999 14.5837C7.49999 15.0439 7.12689 15.417 6.66666 15.417C6.20642 15.417 5.83332 15.0439 5.83332 14.5837C5.83332 14.1234 6.20642 13.7503 6.66666 13.7503C7.12689 13.7503 7.49999 14.1234 7.49999 14.5837Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
