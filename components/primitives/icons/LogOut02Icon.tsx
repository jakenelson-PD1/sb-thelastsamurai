import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LogOut02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LogOut02Icon({ size = 'md', className, ...props }: LogOut02IconProps) {
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
      <path d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M10 14.1667C10 14.9417 10 15.3292 9.91483 15.6471C9.68367 16.5098 9.00975 17.1837 8.14705 17.4148C7.82913 17.5 7.44164 17.5 6.66667 17.5H6.25C5.08515 17.5 4.50272 17.5 4.04329 17.3097C3.43073 17.056 2.94403 16.5692 2.6903 15.9567C2.5 15.4972 2.5 14.9148 2.5 13.75V6.25C2.5 5.08514 2.5 4.50272 2.6903 4.04329C2.94403 3.43073 3.43073 2.94403 4.04329 2.6903C4.50272 2.5 5.08515 2.5 6.25 2.5H6.66667C7.44164 2.5 7.82913 2.5 8.14705 2.58518C9.00975 2.81635 9.68367 3.49022 9.91483 4.35295C10 4.67087 10 5.05836 10 5.83333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
