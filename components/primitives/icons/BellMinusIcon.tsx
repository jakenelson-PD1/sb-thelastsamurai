import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BellMinusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BellMinusIcon({ size = 'md', className, ...props }: BellMinusIconProps) {
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
      <path d="M7.79514 17.4998C8.38273 18.0185 9.15465 18.3332 9.99998 18.3332C10.8454 18.3332 11.6172 18.0185 12.2048 17.4998M12.5 4.1665H17.5M10.8333 1.73641C10.5597 1.69018 10.2811 1.6665 9.99998 1.6665C8.6739 1.6665 7.40215 2.19329 6.46447 3.13097C5.52678 4.06865 5 5.34042 5 6.6665C5 9.24167 4.35039 11.0048 3.62472 12.171C3.01261 13.1548 2.70655 13.6466 2.71777 13.7838C2.7302 13.9358 2.76238 13.9937 2.88481 14.0845C2.99538 14.1665 3.49382 14.1665 4.49071 14.1665H15.5093C16.5062 14.1665 17.0046 14.1665 17.1152 14.0845C17.2376 13.9937 17.2699 13.9358 17.2823 13.7838C17.2935 13.6466 16.9875 13.1548 16.3754 12.1713C15.7308 11.1353 15.1461 9.6285 15.0236 7.49984" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
