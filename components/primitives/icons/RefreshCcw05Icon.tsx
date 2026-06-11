import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface RefreshCcw05IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCcw05Icon({ size = 'md', className, ...props }: RefreshCcw05IconProps) {
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
      <path d="M7.12218 16.4728C9.12142 17.3598 11.5027 17.3116 13.5418 16.1343C16.9298 14.1783 18.0905 9.84621 16.1345 6.45828L15.9262 6.09743M3.86543 13.5417C1.90942 10.1538 3.0702 5.8217 6.4581 3.8657C8.49725 2.68839 10.8785 2.64022 12.8778 3.52719M2.07784 13.6114L4.35455 14.2215L4.96459 11.9447M15.0355 8.0548L15.6456 5.77809L17.9223 6.38813" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
