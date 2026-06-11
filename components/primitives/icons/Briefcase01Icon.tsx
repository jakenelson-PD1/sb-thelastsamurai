import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Briefcase01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Briefcase01Icon({ size = 'md', className, ...props }: Briefcase01IconProps) {
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
      <path d="M13.3334 5.83333C13.3334 5.05836 13.3334 4.67087 13.2482 4.35295C13.017 3.49022 12.3431 2.81635 11.4804 2.58518C11.1625 2.5 10.775 2.5 10 2.5C9.22502 2.5 8.83752 2.5 8.5196 2.58518C7.65691 2.81635 6.98304 3.49022 6.75187 4.35295C6.66669 4.67087 6.66669 5.05836 6.66669 5.83333M4.33335 17.5H15.6667C16.6001 17.5 17.0669 17.5 17.4234 17.3183C17.7369 17.1586 17.9919 16.9036 18.1517 16.59C18.3334 16.2335 18.3334 15.7667 18.3334 14.8333V8.5C18.3334 7.56657 18.3334 7.09987 18.1517 6.74335C17.9919 6.42974 17.7369 6.17477 17.4234 6.01499C17.0669 5.83333 16.6001 5.83333 15.6667 5.83333H4.33335C3.39993 5.83333 2.93322 5.83333 2.5767 6.01499C2.2631 6.17477 2.00813 6.42974 1.84835 6.74335C1.66669 7.09987 1.66669 7.56657 1.66669 8.5V14.8333C1.66669 15.7667 1.66669 16.2335 1.84835 16.59C2.00813 16.9036 2.2631 17.1586 2.5767 17.3183C2.93322 17.5 3.39994 17.5 4.33335 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
