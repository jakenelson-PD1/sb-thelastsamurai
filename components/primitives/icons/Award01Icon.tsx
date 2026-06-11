import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Award01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Award01Icon({ size = 'md', className, ...props }: Award01IconProps) {
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
      <path d="M6.63889 12.2686L5.83332 18.3337L9.65699 16.0395C9.78174 15.9647 9.84407 15.9272 9.91066 15.9126C9.96949 15.8997 10.0305 15.8997 10.0893 15.9126C10.1559 15.9272 10.2182 15.9647 10.343 16.0395L14.1667 18.3337L13.3619 12.268M15.8333 7.50033C15.8333 10.722 13.2217 13.3337 9.99999 13.3337C6.77833 13.3337 4.16666 10.722 4.16666 7.50033C4.16666 4.27867 6.77833 1.66699 9.99999 1.66699C13.2217 1.66699 15.8333 4.27867 15.8333 7.50033Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
