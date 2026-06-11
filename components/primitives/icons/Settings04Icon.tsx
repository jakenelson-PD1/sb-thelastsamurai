import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Settings04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Settings04Icon({ size = 'md', className, ...props }: Settings04IconProps) {
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
      <path d="M2.5 6.66663H12.5M12.5 6.66663C12.5 8.04734 13.6192 9.16663 15 9.16663C16.3807 9.16663 17.5 8.04733 17.5 6.66663C17.5 5.28592 16.3807 4.16663 15 4.16663C13.6192 4.16663 12.5 5.28592 12.5 6.66663ZM7.5 13.3333H17.5M7.5 13.3333C7.5 14.714 6.38071 15.8333 5 15.8333C3.61929 15.8333 2.5 14.714 2.5 13.3333C2.5 11.9525 3.61929 10.8333 5 10.8333C6.38071 10.8333 7.5 11.9525 7.5 13.3333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
