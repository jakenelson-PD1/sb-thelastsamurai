import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Minimize02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Minimize02Icon({ size = 'md', className, ...props }: Minimize02IconProps) {
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
      <path d="M2.49988 6.66667H2.66654C4.06668 6.66667 4.76674 6.66667 5.30152 6.39418C5.77193 6.1545 6.15438 5.77205 6.39406 5.30164C6.66654 4.76687 6.66654 4.0668 6.66654 2.66667V2.5M2.49988 13.3333H2.66654C4.06668 13.3333 4.76674 13.3333 5.30152 13.6058C5.77193 13.8455 6.15438 14.2279 6.39406 14.6983C6.66654 15.2332 6.66654 15.9332 6.66654 17.3333V17.5M13.3332 2.5V2.66667C13.3332 4.0668 13.3332 4.76687 13.6057 5.30164C13.8454 5.77205 14.2278 6.1545 14.6982 6.39418C15.233 6.66667 15.9331 6.66667 17.3332 6.66667H17.4999M13.3332 17.5V17.3333C13.3332 15.9332 13.3332 15.2332 13.6057 14.6983C13.8454 14.2279 14.2278 13.8455 14.6982 13.6058C15.233 13.3333 15.9331 13.3333 17.3332 13.3333H17.4999" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
