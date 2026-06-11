import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LeftIndent02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LeftIndent02Icon({ size = 'md', className, ...props }: LeftIndent02IconProps) {
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
      <path d="M17.5 7.70821H10M17.5 3.33321H10M17.5 12.2916H2.5M17.5 16.6666H2.5M3.56667 2.46654L6.78889 4.88321C7.03013 5.06414 7.15075 5.15461 7.19388 5.26552C7.23167 5.36266 7.23167 5.47044 7.19388 5.56758C7.15075 5.67848 7.03013 5.76894 6.78889 5.94988L3.56667 8.36659C3.22335 8.624 3.05169 8.75275 2.90801 8.74975C2.78297 8.74717 2.66571 8.68859 2.5886 8.59009C2.5 8.47692 2.5 8.26236 2.5 7.83321V2.99988C2.5 2.57074 2.5 2.35616 2.5886 2.243C2.66571 2.14454 2.78297 2.0859 2.90801 2.0833C3.05169 2.08032 3.22335 2.20906 3.56667 2.46654Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
