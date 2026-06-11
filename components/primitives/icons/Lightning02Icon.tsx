import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Lightning02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Lightning02Icon({ size = 'md', className, ...props }: Lightning02IconProps) {
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
      <path d="M11.8746 1.66699H7.07829C6.92873 1.66699 6.85394 1.66699 6.78793 1.68977C6.72953 1.7099 6.67636 1.74277 6.63223 1.78598C6.58234 1.83485 6.5489 1.90174 6.48201 2.03552L2.98201 9.03549C2.82228 9.35499 2.74241 9.51474 2.76159 9.64458C2.77834 9.75791 2.84106 9.85941 2.93498 9.92508C3.04253 10.0003 3.22112 10.0003 3.57829 10.0003H8.74959L6.24961 18.3337L16.4105 7.79642C16.7533 7.44091 16.9248 7.26316 16.9348 7.11106C16.9434 6.97904 16.8889 6.85073 16.7878 6.76535C16.6714 6.66699 16.4245 6.66699 15.9306 6.66699H9.99958L11.8746 1.66699Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
