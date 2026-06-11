import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Shield03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Shield03Icon({ size = 'md', className, ...props }: Shield03IconProps) {
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
      <path d="M9.99998 2.08363V17.917M16.6666 10.0003C16.6666 14.0907 12.205 17.0656 10.5816 18.0127C10.3971 18.1204 10.3049 18.1741 10.1747 18.202C10.0736 18.2237 9.92631 18.2237 9.82523 18.202C9.69506 18.1741 9.60281 18.1204 9.41831 18.0127C7.79495 17.0656 3.33331 14.0907 3.33331 10.0003V6.01497C3.33331 5.3487 3.33331 5.01558 3.44228 4.72922C3.53854 4.47625 3.69496 4.25053 3.89803 4.07157C4.1279 3.869 4.43981 3.75203 5.06365 3.51809L9.53181 1.84253C9.70506 1.77756 9.79165 1.74508 9.88081 1.7322C9.95981 1.72078 10.0401 1.72078 10.1191 1.7322C10.2083 1.74508 10.2949 1.77756 10.4681 1.84253L14.9363 3.51809C15.5601 3.75203 15.8721 3.869 16.1019 4.07157C16.305 4.25053 16.4614 4.47625 16.5576 4.72922C16.6666 5.01558 16.6666 5.3487 16.6666 6.01497V10.0003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
