import { clsx } from 'clsx';

export interface CloudRaining01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CloudRaining01Icon({ size = 20, className, ...props }: CloudRaining01IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#cloudraining01-clip0_118_51787)">
<path d="M16.6667 12.7022C17.6717 12.0295 18.3334 10.8838 18.3334 9.58366C18.3334 7.63068 16.8404 6.0264 14.9336 5.8498C14.5435 3.4771 12.4832 1.66699 10 1.66699C7.51689 1.66699 5.45653 3.4771 5.06647 5.8498C3.15961 6.0264 1.66669 7.63068 1.66669 9.58366C1.66669 10.8838 2.32836 12.0295 3.33335 12.7022M6.66669 15.0003V16.667M6.66669 10.0003V11.667M13.3334 15.0003V16.667M13.3334 10.0003V11.667M10 16.667V18.3337M10 11.667V13.3337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cloudraining01-clip0_118_51787">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
