import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ZapOffIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ZapOffIcon({ size = 'md', className, ...props }: ZapOffIconProps) {
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
      <path d="M6.66667 6.66669L3.41122 10.5733C3.12054 10.922 2.9752 11.0964 2.97298 11.2438C2.97105 11.3718 3.02811 11.4936 3.12772 11.5741C3.24229 11.6667 3.46932 11.6667 3.92336 11.6667H10L9.16667 18.3334L13.3333 13.3334M13.0417 8.33335H16.0767C16.5307 8.33335 16.7577 8.33335 16.8722 8.42594C16.9719 8.50644 17.0289 8.62827 17.027 8.75627C17.0248 8.9036 16.8795 9.07802 16.5887 9.42677L15.4585 10.7831M8.81067 4.0939L10.8333 1.66669L10.3335 5.66478M17.5 17.5L2.5 2.50002" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
