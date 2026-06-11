import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface GitPullRequestIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function GitPullRequestIcon({ size = 'md', className, ...props }: GitPullRequestIconProps) {
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
      <path d="M15 12.5C13.6192 12.5 12.5 13.6192 12.5 15C12.5 16.3807 13.6192 17.5 15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6192 16.3807 12.5 15 12.5ZM15 12.5V6.66667C15 6.22464 14.8244 5.80072 14.5118 5.48816C14.1992 5.17559 13.7753 5 13.3333 5H10.8333M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5ZM5 7.5V17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
