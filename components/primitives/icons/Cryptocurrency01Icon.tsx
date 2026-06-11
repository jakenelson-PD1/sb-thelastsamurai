import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Cryptocurrency01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Cryptocurrency01Icon({ size = 'md', className, ...props }: Cryptocurrency01IconProps) {
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
      <path d="M14.8983 16.7416C13.4745 17.776 11.7598 18.3332 10 18.3332C8.24018 18.3332 6.52553 17.776 5.1018 16.7416M13.6531 2.50985C15.2348 3.2813 16.5318 4.5337 17.3579 6.08753C18.1841 7.64137 18.4972 9.41683 18.2523 11.1596M1.74785 11.1595C1.50294 9.41683 1.816 7.64129 2.6422 6.08745C3.46838 4.53362 4.76527 3.28122 6.347 2.50977M14.5833 9.99983C14.5833 12.5311 12.5313 14.5832 10 14.5832C7.4687 14.5832 5.41668 12.5311 5.41668 9.99983C5.41668 7.46849 7.4687 5.41647 10 5.41647C12.5313 5.41647 14.5833 7.46849 14.5833 9.99983Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
