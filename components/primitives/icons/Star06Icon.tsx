import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Star06IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Star06Icon({ size = 'md', className, ...props }: Star06IconProps) {
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
      <g clipPath="url(#star06-clip0_118_50292)">
<path d="M3.75002 18.3337V14.167M3.75002 5.83366V1.66699M1.66669 3.75033H5.83335M1.66669 16.2503H5.83335M10.8334 2.50033L9.38819 6.25771C9.15319 6.86873 9.03569 7.17425 8.85294 7.43123C8.69102 7.65899 8.49202 7.85798 8.26426 8.01993C8.00728 8.20267 7.70176 8.32017 7.09074 8.55516L3.33335 10.0003L7.09074 11.4455C7.70176 11.6805 8.00728 11.798 8.26426 11.9807C8.49202 12.1427 8.69102 12.3417 8.85294 12.5694C9.03569 12.8264 9.15319 13.1319 9.38819 13.7429L10.8334 17.5003L12.2785 13.7429C12.5135 13.1319 12.631 12.8264 12.8138 12.5694C12.9757 12.3417 13.1747 12.1427 13.4024 11.9807C13.6594 11.798 13.9649 11.6805 14.5759 11.4455L18.3334 10.0003L14.5759 8.55516C13.9649 8.32017 13.6594 8.20266 13.4024 8.01993C13.1747 7.85798 12.9757 7.65899 12.8138 7.43123C12.631 7.17425 12.5135 6.86873 12.2785 6.25771L10.8334 2.50033Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="star06-clip0_118_50292">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
