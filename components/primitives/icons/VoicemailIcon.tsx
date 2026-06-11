import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface VoicemailIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function VoicemailIcon({ size = 'md', className, ...props }: VoicemailIconProps) {
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
      <path d="M5.00001 13.3332H15M5.00001 13.3332C6.84096 13.3332 8.33334 11.8408 8.33334 9.99984C8.33334 8.15889 6.84096 6.6665 5.00001 6.6665C3.15905 6.6665 1.66667 8.15889 1.66667 9.99984C1.66667 11.8408 3.15905 13.3332 5.00001 13.3332ZM15 13.3332C16.8409 13.3332 18.3333 11.8408 18.3333 9.99984C18.3333 8.15889 16.8409 6.6665 15 6.6665C13.1591 6.6665 11.6667 8.15889 11.6667 9.99984C11.6667 11.8408 13.1591 13.3332 15 13.3332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
