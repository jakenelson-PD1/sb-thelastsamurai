import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Stars02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Stars02Icon({ size = 'md', className, ...props }: Stars02IconProps) {
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
      <g clipPath="url(#stars02-clip0_118_52143)">
<path d="M3.75 18.3337V14.167M3.75 5.83366V1.66699M1.66666 3.75033H5.83333M1.66666 16.2503H5.83333M10.8333 2.50033L9.38816 6.25771C9.15316 6.86873 9.03566 7.17425 8.85291 7.43123C8.691 7.65899 8.492 7.85798 8.26424 8.01993C8.00726 8.20266 7.70174 8.32017 7.09071 8.55516L3.33333 10.0003L7.09071 11.4455C7.70174 11.6805 8.00726 11.798 8.26424 11.9807C8.492 12.1427 8.691 12.3417 8.85291 12.5694C9.03566 12.8264 9.15316 13.1319 9.38816 13.7429L10.8333 17.5003L12.2785 13.7429C12.5135 13.1319 12.631 12.8264 12.8137 12.5694C12.9757 12.3417 13.1747 12.1427 13.4024 11.9807C13.6594 11.798 13.9649 11.6805 14.5759 11.4455L18.3333 10.0003L14.5759 8.55516C13.9649 8.32017 13.6594 8.20266 13.4024 8.01993C13.1747 7.85798 12.9757 7.65899 12.8137 7.43123C12.631 7.17425 12.5135 6.86873 12.2785 6.25771L10.8333 2.50033Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="stars02-clip0_118_52143">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
