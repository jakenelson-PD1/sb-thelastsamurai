import { clsx } from 'clsx';

export interface BellRinging01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BellRinging01Icon({ size = 20, className, ...props }: BellRinging01IconProps) {
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
      <g clipPath="url(#bellringing01-clip0_118_46689)">
<path d="M7.79535 17.4998C8.383 18.0185 9.15483 18.3332 10.0002 18.3332C10.8456 18.3332 11.6174 18.0185 12.2051 17.4998M1.91178 4.84975C1.89982 3.64029 2.55189 2.51088 3.60529 1.9165M18.0853 4.84975C18.0973 3.6403 17.4452 2.51088 16.3918 1.9165M15.0002 6.6665C15.0002 5.34042 14.4734 4.06865 13.5358 3.13097C12.5981 2.19329 11.3262 1.6665 10.0002 1.6665C8.67408 1.6665 7.40236 2.19329 6.46467 3.13097C5.52699 4.06865 5.00021 5.34042 5.00021 6.6665C5.00021 9.24167 4.3506 11.0048 3.62492 12.171C3.01282 13.1548 2.70676 13.6466 2.71797 13.7838C2.73041 13.9358 2.76259 13.9937 2.88502 14.0845C2.99559 14.1665 3.49403 14.1665 4.49092 14.1665H15.5095C16.5064 14.1665 17.0048 14.1665 17.1154 14.0845C17.2378 13.9937 17.27 13.9358 17.2824 13.7838C17.2937 13.6466 16.9876 13.1548 16.3755 12.171C15.6498 11.0048 15.0002 9.24167 15.0002 6.6665Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="bellringing01-clip0_118_46689">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
