import { clsx } from 'clsx';

export interface BellPlusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BellPlusIcon({ size = 20, className, ...props }: BellPlusIconProps) {
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
      <path d="M7.79516 17.4998C8.38275 18.0185 9.15466 18.3332 10 18.3332C10.8454 18.3332 11.6172 18.0185 12.2048 17.4998M15 6.6665V1.6665M12.5 4.1665H17.5M10.8333 1.73641C10.5597 1.69018 10.2811 1.6665 10 1.6665C8.67391 1.6665 7.40216 2.19329 6.46448 3.13097C5.5268 4.06865 5.00001 5.34042 5.00001 6.6665C5.00001 9.24167 4.35041 11.0048 3.62473 12.171C3.01262 13.1548 2.70656 13.6466 2.71778 13.7838C2.73021 13.9358 2.7624 13.9937 2.88482 14.0845C2.9954 14.1665 3.49384 14.1665 4.49072 14.1665H15.5093C16.5062 14.1665 17.0046 14.1665 17.1152 14.0845C17.2376 13.9937 17.2697 13.9358 17.2822 13.7838C17.2934 13.6466 16.9873 13.1547 16.3752 12.1708C15.9652 11.5118 15.5794 10.6622 15.3214 9.58317" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
