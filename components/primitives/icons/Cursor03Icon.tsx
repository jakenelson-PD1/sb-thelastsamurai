import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Cursor03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Cursor03Icon({ size = 'md', className, ...props }: Cursor03IconProps) {
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
      <path d="M3.92628 3.06205C3.47581 2.88459 3.25057 2.79587 3.10706 2.8436C2.98244 2.88506 2.88466 2.98283 2.84321 3.10745C2.79547 3.25097 2.88419 3.4762 3.06165 3.92668L7.47885 15.1396C7.62178 15.5023 7.69324 15.6838 7.80971 15.7566C7.91124 15.8201 8.03517 15.8368 8.14989 15.8025C8.28149 15.7632 8.39851 15.6072 8.63242 15.2952L10.4163 12.9168L13.2908 16.8691C13.4488 17.0863 13.5278 17.195 13.6285 17.2404C13.7168 17.2803 13.8163 17.2881 13.9098 17.2625C14.0163 17.2333 14.1113 17.1383 14.3013 16.9483L16.948 14.3018C17.1379 14.1118 17.2329 14.0168 17.2621 13.9103C17.2877 13.8168 17.2799 13.7173 17.24 13.6289C17.1946 13.5282 17.086 13.4492 16.8687 13.2912L12.9163 10.4168L15.2948 8.63283C15.6068 8.39892 15.7628 8.28189 15.8021 8.15029C15.8363 8.03557 15.8197 7.91164 15.7562 7.81011C15.6833 7.69364 15.502 7.62218 15.1392 7.47924L3.92628 3.06205Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
