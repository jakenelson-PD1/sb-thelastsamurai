import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PentagonIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PentagonIcon({ size = 'md', className, ...props }: PentagonIconProps) {
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
      <path d="M9.21708 2.44332C9.49858 2.23903 9.63933 2.13689 9.79316 2.09743C9.929 2.06258 10.0715 2.06258 10.2073 2.09743C10.3612 2.13689 10.5019 2.23903 10.7834 2.44332L17.5488 7.35326C17.8308 7.55793 17.9719 7.66025 18.0572 7.79454C18.1324 7.91312 18.1766 8.04881 18.1853 8.18899C18.1953 8.34779 18.1414 8.51346 18.0337 8.84479L15.4501 16.7874C15.3424 17.1184 15.2886 17.2839 15.1872 17.4063C15.0977 17.5144 14.9825 17.5981 14.852 17.6498C14.7042 17.7083 14.5302 17.7083 14.1822 17.7083H5.81836C5.47031 17.7083 5.29628 17.7083 5.14851 17.6498C5.01803 17.5981 4.90271 17.5144 4.81324 17.4063C4.71191 17.2839 4.65807 17.1184 4.55041 16.7874L1.96684 8.84479C1.85905 8.51346 1.80516 8.34779 1.81514 8.18899C1.82395 8.04881 1.86805 7.91312 1.94335 7.79454C2.02861 7.66025 2.16962 7.55793 2.45163 7.35326L9.21708 2.44332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
