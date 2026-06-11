import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MessageXCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MessageXCircleIcon({ size = 'md', className, ...props }: MessageXCircleIconProps) {
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
      <path d="M8.33303 7.5L12.4997 11.6667M12.4997 7.5L8.33303 11.6667M10.4163 16.6667C14.3283 16.6667 17.4997 13.4953 17.4997 9.58333C17.4997 5.67132 14.3283 2.5 10.4163 2.5C6.50435 2.5 3.33303 5.67132 3.33303 9.58333C3.33303 10.375 3.4629 11.1363 3.70251 11.8472C3.79267 12.1147 3.83775 12.2484 3.84589 12.3512C3.85392 12.4527 3.84785 12.5238 3.82275 12.6224C3.79732 12.7223 3.7412 12.8263 3.62895 13.034L2.2659 15.557C2.07147 15.9168 1.97425 16.0968 1.99601 16.2357C2.01496 16.3566 2.08615 16.4631 2.19068 16.5268C2.31068 16.6001 2.51411 16.579 2.92099 16.537L7.1885 16.0958C7.31774 16.0825 7.38235 16.0758 7.44125 16.0781C7.49918 16.0803 7.54007 16.0858 7.59656 16.0988C7.654 16.112 7.72622 16.1398 7.87066 16.1954C8.66068 16.4998 9.51901 16.6667 10.4163 16.6667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
